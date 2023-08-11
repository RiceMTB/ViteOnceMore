<template>
  <div class="card flex justify-content-center">
      <Sidebar v-model:visible="visible">
          <h2>Navigation Menu</h2>
          <div class="linkList">
            <router-link to="/">
              Home        
            </router-link>
            <br>
            <router-link to="/bitCoin">
              Bit Coin Price        
            </router-link>
            <br>
            <router-link to="/fulljokelist">
              Full Joke List
            </router-link>
            <br>
            <router-link to="/randomjoke">
              Random Joke
            </router-link >
            <br>
            <router-link to="/jokeByID">
              Get Joke By ID
            </router-link>
            <br>
            <router-link to="/stats">
              Joke Stats
            </router-link>
            <br>
            <router-link to="/addJoke">
              Add New Joke
            </router-link>
        </div>
      </Sidebar>
      <Button icon="pi pi-arrow-right" @click="visible = true"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
</script>

<style scoped>
.linkList{ 
  font-size: larger;
}
</style>