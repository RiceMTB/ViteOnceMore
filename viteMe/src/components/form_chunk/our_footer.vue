<template>
  <div class="bg-red-500 text-gray-100 p-1 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
      <div class="align-items-center lg:flex">
          <span class="line-height-2">{{footer_display}}</span>
      </div>
  </div>
</template>

<script>
import strings from '/src/string_constants/fe_string.js';
export default {
  components: {
    strings,
   },
  setup() {
    // ...
  },
  created () { 
    this.footer_display = strings.header_statement.my_header_str;
  }

};
</script>
<style scoped>
div{ 
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f10606;
  color: #fff;
  padding: 0px;
  z-index: 1;
  justify-content:center;
}
</style>