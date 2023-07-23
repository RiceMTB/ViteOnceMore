<script setup>
import my_header from './components/form_chunk/primeHeader.vue'
import my_sidebar from './components/form_chunk/main_sidebar.vue'
</script>

<template>
  <div>
    <my_header class="theHeader"/>
    this test
    <my_sidebar/>
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
</style>
