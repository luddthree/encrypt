<template>
  <div class="">
    <h1>Encryption and Decryption App</h1>
    <EncryptForm />
    <DecryptForm />
  </div>
</template>

<script setup>
// Import the components
import EncryptForm from '/components/encrypt.vue'
import DecryptForm from '/components/decrypt.vue'
</script>

<style>
/* Optional: Add some basic styling */
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
input, button {
  margin: 5px;
}
</style>
