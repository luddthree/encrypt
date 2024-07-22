async function encryptText(plainText, password) {
    const iv = window.crypto.getRandomValues(new Uint8Array(12)); // generate a new IV for each encryption
    const key = await generateKey(password, iv); // generate key from password
    const encoder = new TextEncoder();
    const encoded = encoder.encode(plainText);

    const ciphertext = await window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        key,
        encoded
    );

    const buffer = new Uint8Array(ciphertext);
    const ivStr = Array.from(iv).map(b => String.fromCharCode(b)).join('');
    const bufferStr = Array.from(buffer).map(b => String.fromCharCode(b)).join('');
    return window.btoa(ivStr + bufferStr); // encode IV and ciphertext as base64
}

async function decryptText(ciphertextBase64, password) {
    const binaryStr = window.atob(ciphertextBase64);
    const iv = new Uint8Array(Array.from(binaryStr.slice(0, 12)).map(char => char.charCodeAt(0)));
    const ciphertext = new Uint8Array(Array.from(binaryStr.slice(12)).map(char => char.charCodeAt(0)));

    const key = await generateKey(password, iv);
    const decrypted = await window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv },
        key,
        ciphertext
    );

    const decoder = new TextDecoder();
    return decoder.decode(decrypted);
}

async function generateKey(password, iv) {
    const salt = iv.slice(0, 8); // Use first part of IV as salt for key derivation
    const encoder = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey(
        "raw",
        encoder.encode(password),
        { name: "PBKDF2" },
        false,
        ["deriveKey"]
    );
    return window.crypto.subtle.deriveKey(
        { name: "PBKDF2", salt, iterations: 1000, hash: "SHA-256" },
        keyMaterial,
        { name: "AES-GCM", length: 256 },
        true,
        ["encrypt", "decrypt"]
    );
}

export { encryptText, decryptText };
