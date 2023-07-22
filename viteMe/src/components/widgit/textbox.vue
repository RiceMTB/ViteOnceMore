<template>
  <div>
    <div class="card flex justify-content-left">
    <form @submit="onSubmit" class="py-1 flex  flex-column gap-2">
        <span class="p-float-label">
            <Textarea id="value" 
            v-model="value" 
            :class="{ 'p-invalid': errorMessage }" 
            :rows="getrow()" 
            :cols="getcol()"
            aria-describedby="text-error" />
            <label for="value">{{mylabel}}</label>
        </span>
    </form>
    <Toast />
</div>
  </div>
</template>
<script>
  export default{ 
   
   // props:['mycol', 'myrows', 'mylabel'],
    props:{ 
      mycol: Number,
      myrow: Number,
      mylabel: String
    },
    methods:{ 
      getrow(){ 
        return this.myrow
      },
      getcol(){ 
        return this.mycol
      }
  }
  }
</script>
