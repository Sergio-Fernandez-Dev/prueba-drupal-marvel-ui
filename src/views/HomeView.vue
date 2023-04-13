<script setup>
import APIRequestHandler from '@/tools/APIRequestHandler';
import { onMounted, ref } from "vue";
import InfoCard from '../components/InfoCard.vue';

const data = ref({});
const itemCategory = ref('characters');
let marvelAPI = '';

onMounted(async () => {
  makeRequest(itemCategory.value);
});

const makeRequest = async (category) => {
  itemCategory.value = category;
  marvelAPI = new APIRequestHandler("https://gateway.marvel.com/v1/public/");
  //await marvelAPI.getAPIKey(import.meta.env.BACKEND_API_URL_PATH, '/marvel/apikey');
  data.value = await marvelAPI.getData(`/${itemCategory.value}?ts=1&apikey=e8960442b278be0f6285586922d9e4e4&hash=a31a5f679419eb7125fa9c0fc3462def`);
  console.log(data.value);
}

const checkIfItemIsFavorite = (id) => {
  return false;
}
</script>

<template>
  <main class="main">
    <nav class="nav">
      <a class="nav__option" href="#" @click="makeRequest('characters')">Personajes</a>
      <a class="nav__option" href="#" @click="makeRequest('comics')">Comics</a>
    </nav>  
      <InfoCard 
        v-for="(item, index) in data" 
        :key="index" 
        :item="item" 
        :itemCategory="itemCategory"
        :fav="checkIfItemIsFavorite(item.id)" 
      />
  </main>
</template>

<style scoped></style>
