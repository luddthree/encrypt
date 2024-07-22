<template>
    <div class="max-w-md mx-auto p-4">
      <textarea class="w-full mb-4 p-4 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-y"
                v-model="passphrase"
                placeholder="Enter passphrase"
                rows="4"></textarea>
      <input class="w-full mb-4 p-4 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
             v-model="password"
             type="password"
             placeholder="Enter encryption password" />
      <button class="w-full p-4 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              @click="encryptData">
        Encrypt
      </button>
      <div class="mt-4">
        <textarea class="w-full p-4 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-y"
                  v-model="encrypted"
                  id="enc"
                  placeholder="Encrypted output"
                  readonly
                  rows="4"></textarea>
        <button class="mt-2 p-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                @click="copy()">
          Copy
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { encryptText } from '@/utils/crypto';
  
  const passphrase = ref('');
  const password = ref('');
  const encrypted = ref('');
  
  async function encryptData() {
    encrypted.value = await encryptText(passphrase.value, password.value);
  }

  function copy() {
  var copyText = document.getElementById("enc");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

//   alert("Copied the text: " + copyText.value);
}
  </script>
  