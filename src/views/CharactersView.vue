<script setup>
import APIRequestHandler from '@/tools/APIRequestHandler';
import { defineProps, onMounted, ref } from "vue";

const data = ref({});


onMounted( async () => {
  const marvelAPI = new APIRequestHandler("https://gateway.marvel.com/v1/public/");
  //await marvelAPI.getAPIKey(import.meta.env.BACKEND_API_URL_PATH, '/marvel/apikey');
  data.value = await marvelAPI.getData('/characters?ts=1&apikey=e8960442b278be0f6285586922d9e4e4&hash=a31a5f679419eb7125fa9c0fc3462def');
  console.log(data.value);
}); 

</script>

<template>
  <div>

  </div>
</template>

<style scoped>

</style>
