<template>
   <div class="card flex justify-content-left">
  <span class="p-float-label py-1">
    <InputText id="username" v-model="value" style="width: 300px" />
    <label for="username">{{mylabel}}</label>
  </span>
   </div>
</template>

<script>
  export default{ 
   

    props:{ 
      mylabel: String
    },
   
  }
</script>