<template>
   <iframe style="width: 100%;min-height: 80vh;border: none;"
      :src='urlStr'>
   </iframe>
</template>
<script setup>
defineProps({
   urlStr:{
      default:'http://212.129.223.183'
   }
})
</script>