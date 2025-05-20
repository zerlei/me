<template>
  <div style="width: 100%" v-html="sub_content"></div>
</template>
<script setup>
import {onMounted, ref} from 'vue';

const sub_content = ref('<div>123</div>');

onMounted(() => {
  fetch('http://212.129.223.183')
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const bodyContent = doc.body.innerHTML;
      sub_content.value = bodyContent.trim();

      let styles = '';

      // 处理 <style> 标签
      doc.querySelectorAll('style').forEach((tag) => {
        styles += tag.innerHTML + '\n';
      });
      const existingStyle = document.getElementById('injected-styles');
      if (existingStyle) existingStyle.remove();

      const styleEl = document.createElement('style');
      styleEl.id = 'injected-styles';
      styleEl.innerHTML = styles;
      document.head.appendChild(styleEl);
    });

});
defineProps({
  urlStr: {
    default: 'http://212.129.223.183'
  }
});
</script>

