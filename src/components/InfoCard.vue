<script setup>
import APIRequestHandler from '@/tools/APIRequestHandler';
import { ref } from 'vue';

const props = defineProps({
  item: Object,
  itemCategory: String,
  fav: Boolean,
});

const favStatus = ref(props.fav);

const APIhandler = new APIRequestHandler("https://localhost:52432");

const getDescription = (item) => {
  return item.description ? item.description : 'Description not available';
}

const addItemToFavorites = async (item, handler, category) => {
  const itemId = {'id': item.id};
  
  if (await handler.postData(`/marvel/favorites/${category}`, itemId)) {
    favStatus.value = true;
  }
}

const removeItemFromFavorites = async (id, handler) => {
  if (await handler.deleteData(`/marvel/favorites/${itemCategory}`, id)) {
    favStatus.value = false;
  }
}

</script>

<template>
  <div class="card">
    <img class="card__image" :src="item.thumbnail.path + '.' + item.thumbnail.extension" />
    <div class="card__info">
      <h3 class="card__title">{{ item.name }}</h3>
      <div class="card__description">{{ getDescription(item) }}</div>
    </div>
    <div class="card__footer">
      <button 
        class="button" 
        v-if="!favStatus" 
        @click.prevent= "addItemToFavorites(item, APIhandler, itemCategory)"
      >
        Añadir a favoritos
      </button>
      <button 
        class="button--faved" 
        v-else 
        @click.prevent="removeItemFromFavorites(item.id, APIhandler)"
      >
        Borrar de favoritos
      </button>
    </div>
  </div>
</template>

<style scoped></style>