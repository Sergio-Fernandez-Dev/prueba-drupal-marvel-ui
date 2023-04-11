<script setup>
import APIRequestHandler from '@/tools/APIRequestHandler';
import { defineProps, onMounted, ref } from "vue";
import InfoCard from '../components/InfoCard.vue';

const data = ref({});
const itemCategory = ref('characters');

onMounted(async () => {
  const marvelAPI = new APIRequestHandler("https://gateway.marvel.com/v1/public/");
  //await marvelAPI.getAPIKey(import.meta.env.BACKEND_API_URL_PATH, '/marvel/apikey');
  data.value = await marvelAPI.getData('/characters?ts=1&apikey=e8960442b278be0f6285586922d9e4e4&hash=a31a5f679419eb7125fa9c0fc3462def');
  console.log(data.value);
});

const checkIfItemIsFavorite = (id) => {
  return true;
}


</script>

<template>
  <div>
    <InfoCard 
      v-for="(item, index) in data" 
      :key="index" 
      :item="item" 
      :itemCategory="itemCategory"
      :fav="checkIfItemIsFavorite(item.id)" 
    />
  </div>
</template>

<style scoped></style>
