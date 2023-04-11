u<script setup>
import APIRequestHandler from '@/tools/APIRequestHandler';
import { onMounted, ref } from "vue";

const data = ref({});

onMounted( async () => {
  console.log(import.meta.env.VITE_MARVEL_API_URL);
  const marvelAPI = new APIRequestHandler(import.meta.env.MARVEL_API_URL);
  await marvelAPI.getAPIKey(import.meta.env.BACKEND_API_URL_PATH, '/marvel/apikey');
  data.value = await marvelAPI.getData('/comics');
}); 

</script>

<template>
  <div>

  </div>
</template>

<style scoped>

</style>
