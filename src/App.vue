<script setup>
import NavMenu from './components/NavMenu.vue'; 
import Footer from './components/Footer.vue'; 


</script>

<template>
   <div id="app">
    <NavMenu />
    <router-view />
    <Footer />
  </div>
 
</template>

<style scoped>

</style>
