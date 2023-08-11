<template>
  <div>
    <my_header class="theHeader"/>
    <my_title :form_title = this.$route.meta.form_title />
    <router-view />
    <my_sidebar/>
    <my_footer class="thefooter"/>
  </div>

</template>

<script setup>
  //imports
  import my_header from './components/form_chunk/primeHeader.vue'
  import my_footer from './components/form_chunk/our_footer.vue'
  import my_sidebar from './components/form_chunk/main_sidebar.vue'
  import my_title from './components/form_chunk/title_form.vue'
</script>

<style scoped>

</style>
