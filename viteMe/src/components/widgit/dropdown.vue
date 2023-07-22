<template>
  <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select a Country" class="w-full md:w-14rem">
      <template #value="slotProps">
          <div v-if="slotProps.value" class="flex align-items-center">
              <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
              <div>{{ slotProps.value.name }}</div>
          </div>
          <span v-else>
              {{ slotProps.placeholder }}
          </span>
      </template>
      <template #option="slotProps">
          <div class="flex align-items-center">
              <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px" />
              <div>{{ slotProps.option.name }}</div>
          </div>
      </template>
  </Dropdown>
</template>

<script>
export default{ 
  
}
</script>