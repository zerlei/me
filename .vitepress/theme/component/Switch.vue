<template>
  <n-space v-if="notSsrRender" style="width: 100%" justify="end">
    <n-switch v-model:value="blogExport" :rail-style="checkRailStyle" :round="false">
      <template #checked> For You </template>
      <template #unchecked> For Me </template>
    </n-switch>
  </n-space>
</template>
<script setup>
import {ref, watch, onMounted, computed} from 'vue';
import * as pkg from 'naive-ui';
const blogExport = ref(true);
const notSsrRender = ref(false);
const {NSwitch, NSpace} = pkg;
// 使用BroadcastChannel 会无法发布

const emit = defineEmits(['switcher'])
// const bc = new BroadcastChannel('switcher');
function checkRailStyle({_, checked}) {
  const style = {};
  if (checked) {
    style.background = '#18a058';
  } else {
    style.background = '#d03050';
  }
  return style;
}
//发送到home 组件 切换
watch(blogExport, async (n, o) => {
  emit('switcher',n)
  // bc.postMessage(n);
});
onMounted(() => {
  notSsrRender.value = true;
});
</script>
