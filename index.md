---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: Zerlei的博客
  text: 很烂、没什么内容
  tagline: My blog, there are no worth content, very bad
  # actions:
  #   - theme: brand
  #     text: Markdown Examples
  #     link: /markdown-examples
  #   - theme: alt
  #     text: API Examples
  #     link: /api-examples
  image:
    src: ./asserts/zerlei.svg
features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
    link: /note/
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
<script setup>
import home  from "./home.vue";

</script>
<home />