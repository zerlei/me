<template>
  <div :style="tagStyle">
    {{ title }}
    [{{ count }}]
  </div>
</template>
<script setup>
import {ref, watch} from 'vue';
const props = defineProps({
  title: String,
  count: Number,
  focus: Boolean
});

watch(props, () => {
  tagStyle.value.color = props.focus ? '#2080f0' : 'var(--vp-c-text-1)';
  tagStyle.value.backgroundColor = props.focus ? 'rgba(23,128,240,0.12)' : 'var(--vp-custom-block-info-bg)';
});
console.log(props.focus);
const tagStyle = ref({
  color: props.focus ? '#2080f0' : 'var(--vp-c-text-1)',
  backgroundColor: props.focus ? 'rgba(23,128,240,0.12)' : 'var(--vp-custom-block-info-bg)',
  userSelect: 'none',
  cursor: 'pointer',
  borderRadius: '10px',
  padding: '2px 5px 2px 5px',
  fontSize: 'small'
});
</script>
