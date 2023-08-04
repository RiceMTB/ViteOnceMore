<template> 
    
    <div class = "theHeader">
        <span>This Will Tell you who can see this</span>
        
    </div>
    <div class = "theMode">
        <the_mode/>
    </div>
    
    
</template>

<script setup>
import the_mode from './my_mode.vue'

</script>
<style scoped>
 .theHeader{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #f10606;
    color: #fff;
    padding: 0px;
    z-index: 1;
  }
  .theMode{
    font-size: small;
    position: fixed;
    top: 24px;
    left: 0;
    width: 100%;
    background-color: #5693e4;
    color: #fff;
    padding: 0px;
    z-index: 1;
  }
</style>