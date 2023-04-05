<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>PRUEBA DRUPAL MARVEL</nav>
    </div>
  </header>

  <RouterView />
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
