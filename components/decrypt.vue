<template>
    <div class="max-w-md mx-auto p-4">
      <textarea class="w-full mb-4 p-4 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-y"
                v-model="encryptedData"
                placeholder="Enter encrypted data"
                rows="4"></textarea>
      <input class="w-full mb-4 p-4 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
             v-model="password"
             type="password"
             placeholder="Enter decryption password" />
      <button class="w-full p-4 bg-green-500 text-white text-lg rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              @click="decryptData">
        Decrypt
      </button>
      <div class="mt-4">
        <textarea class="w-full p-4 text-lg border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-y"
                  v-model="decrypted"
                  id="dec"
                  placeholder="Decrypted output"
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
  import { decryptText } from '@/utils/crypto';
  
  const encryptedData = ref('');
  const password = ref('');
  const decrypted = ref('');
  
  async function decryptData() {
    decrypted.value = await decryptText(encryptedData.value, password.value);
  }

  function copy() {
  var copyText = document.getElementById("dec");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

//   alert("Copied the text: " + copyText.value);
  }
  </script>
  