<template>
  <div class="card flex justify-content-center">
      <Sidebar v-model:visible="visible">
          <h2>Menu</h2>
          <ourButton mylabel = "Go Here" />
          <ourButton mylabel = "Go There" />
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