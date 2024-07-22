<template>
  <div class="max-w-md mx-auto p-4">
    <h1 class="text-2xl font-bold mb-2">Encryption and Decryption</h1>
    <p class="text-sm mb-1">this website does not store any information.</p>
    <a class=" mb-4" href="https://github.com/luddthree/encrypt-decrypt">Github</a>
    <div class="flex mb-4 border-b-2 border-gray-300">
      <button
        :class="{
          'flex-1 p-2 text-center focus:outline-none': true,
          'bg-blue-500 text-white border-l border-t border-r border-gray-300 rounded-t-md -mb-2': showEncryptForm,
          'bg-gray-200 text-black hover:bg-gray-300': !showEncryptForm
        }"
        @click="showEncryptForm = true"
      >
        Encrypt
      </button>
      <button
        :class="{
          'flex-1 p-2 text-center focus:outline-none': true,
          'bg-green-500 text-white border-l border-t border-r border-gray-300 rounded-t-md -mb-2': !showEncryptForm,
          'bg-gray-200 text-black hover:bg-gray-300': showEncryptForm
        }"
        @click="showEncryptForm = false"
      >
        Decrypt
      </button>
    </div>
    <EncryptForm v-if="showEncryptForm" />
    <DecryptForm v-else />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Import the components
import EncryptForm from '/components/encrypt.vue';
import DecryptForm from '/components/decrypt.vue';

const showEncryptForm = ref(true);
</script>

<style>
/* Optional: Add some basic styling */
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
input,
button {
  margin: 5px;
}
</style>
