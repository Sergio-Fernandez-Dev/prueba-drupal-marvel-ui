<script setup>
import APIRequestHandler from '@/tools/APIRequestHandler';

defineProps({
  item: Object,
  itemCategory: String,
  fav: Boolean,
});

const APIhandler = new APIRequestHandler("https//localhost:3000");

const getDescription = (item) => {
  return item.description ? item.description : 'Description not available';
}

const addItemToFavorites = async (item, handler) => {
  if (handler.postData(`/marvel/favorites/${itemCategory}`, item)) {
    fav = true;
  }
}

const removeItemFromFavorites = async (id, handler) => {
  if (handler.deleteData(`/marvel/favorites/${itemCategory}`, id)) {
    fav = false;
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
        v-if="!fav" 
        onclick="addItemToFavorites(item, APIhandler)"
      >
        Añadir a favoritos
      </button>
      <button 
        class="button--faved" 
        v-else 
        onclick="removeItemFromFavorites(item.id, APIhandler)"
      >
        Borrar de favoritos
      </button>
    </div>
  </div>
</template>

<style scoped></style>