<template>
  <div class="card flex justify-content-left">
    <div class="">
      <label for="birth_date" class="block text-left" style="font-size:10px">{{mylabel}}</label>
      <Calendar v-model="date" inputId="birth_date"  />
    </div>
  </div>
</template>

<script>
  export default{ 
    props:{ 
      mylabel: String
    }, 
  }
</script>