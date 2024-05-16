<template>
  <div class="blogitem">
    <div style="pointer-events: none">
      <p style="font-size: large; font-weight: bolder; margin-bottom: 2px">{{ item.frontMatter.title }}</p>

      <div style="display: flex; justify-content: flex-start; flex-wrap: wrap">
        <Tags v-for="t in item.frontMatter.tags || []" :title="t" :focus="true" :radius="true"> </Tags>
        <Tags v-for="t in item.frontMatter.keys || []" :title="t" :radius="false" :focus="true"> </Tags>
      </div>
    </div>
    <p style="margin: 5px 0px;">{{ item.frontMatter.desp }}</p>
    <div style="display: flex; justify-content: space-between; flex-wrap: wrap; font-size: small; color: var(--vp-c-text-2)">
      <div>Created:{{ item.frontMatter.birthtime }}</div>
      <div>Last Update:{{ item.frontMatter.mtime }}</div>
    </div>
  </div>
</template>
<script setup>
import Tags from './Tags.vue';
const props = defineProps({
  item: Object
});
</script>
<style>
.blogitem:hover {
  background-color: var(--vp-custom-block-info-bg);
}
.blogitem {
  cursor: pointer;
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 10px 5px 10px 5px;
  border-radius: 5px;
}
</style>
