<template>
  <div class="card flex justify-content-center">
      <Sidebar v-model:visible="visible">
          <h2>Navigation Menu</h2>
          <router-link to="/">
            <ourButton mylabel = "Home" />
          </router-link>
          <router-link to="/fulljokelist">
            <ourButton mylabel = "Joke List" />
          </router-link>
          <ourButton mylabel = "Get a Random Joke" />
          <ourButton mylabel = "Get a Joke By ID" />
          <router-link to="/stats">
            <ourButton mylabel = "Joke Stats" />
          </router-link>
      </Sidebar>
      <Button icon="pi pi-arrow-right" @click="visible = true"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ourButton from '../widgit/ourButton.vue'
const visible = ref(false);
</script>

<style scoped>
.ourbutton{ 
  display: block;
}
</style>