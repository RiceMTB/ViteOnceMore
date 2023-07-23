<script setup>
import my_header from './components/form_chunk/primeHeader.vue'
import my_sidebar from './components/form_chunk/main_sidebar.vue'
</script>

<template>
  <div>
    <my_header class="theHeader"/>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <router-view />
    <my_sidebar/>
    <my_header class="thefooter"/>
  </div>

</template>

<style scoped>
 .theHeader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 0px;
  } 
  .thefooter {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 0px;
  } 
</style>
