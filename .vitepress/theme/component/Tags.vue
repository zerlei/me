<template>
  <div
    @mouseenter="
      () => {
        tagStyle.color = '#2080f0';
        tagStyle.backgroundColor = 'rgba(23,128,240,0.12)';
      }
    "
    @mouseleave="()=>{
      if(!props.focus){
        tagStyle.color = 'var(--vp-c-text-1)';
        tagStyle.backgroundColor = 'var(--vp-custom-block-info-bg)';
      }

    }"
    :style="tagStyle"
  >
    {{ title }}
    <span v-if="showCount"> [{{ count }}] </span>
  </div>
</template>
<script setup>
import {ref, watch} from 'vue';
const props = defineProps({
  title: String,
  count: Number,
  focus: Boolean,
  radius: Boolean,
  showCount: Boolean
});

watch(props, () => {
  tagStyle.value.color = props.focus ? '#2080f0' : 'var(--vp-c-text-1)';
  tagStyle.value.backgroundColor = props.focus ? 'rgba(23,128,240,0.12)' : 'var(--vp-custom-block-info-bg)';
});
const tagStyle = ref({
  color: props.focus ? '#2080f0' : 'var(--vp-c-text-1)',
  backgroundColor: props.focus ? 'rgba(23,128,240,0.12)' : 'var(--vp-custom-block-info-bg)',
  userSelect: 'none',
  cursor: 'pointer',
  borderRadius: props.radius ? '10px' : '0px',
  padding: '1px 5px 1px 5px',
  fontSize: 'small',
  margin: '3px'
});
</script>
