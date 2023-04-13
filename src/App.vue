<script setup>
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header class="header">
    <h1 class="header__title">PRUEBA DRUPAL MARVEL</h1>
  </header>
  <nav class="nav">
    <RouterLink :to="{ name: 'home' }" class="nav__link">Home</RouterLink>
    <RouterLink :to="{ name: 'favorites' }" class="nav__link">Favoritos</RouterLink>
  </nav>

  <RouterView />

  <footer class="footer">
    <p class="footer__text">© 2021 PRUEBA DRUPAL MARVEL</p>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  height: 75px;
  background-color: blue;
  width: 100%;
  display: flex;
  justify-content: center;
}

header .wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: chocolate;
}

nav {
  width: 100%;
  height: 100%;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
}
</style>
