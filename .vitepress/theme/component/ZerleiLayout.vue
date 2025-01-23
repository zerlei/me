<template>
  <!-- 不在docs目录里，使用特殊页面布局 -->
  <Layout v-show="cloak" :class="frontMatter.title ? '' : 'm-special-layout'">
    <template #nav-bar-content-before> </template>
    <template #doc-before>
      <div v-if="frontMatter.title">
        <h1 class="title">{{ frontMatter.title }}</h1>
        <div style="display: flex; flex-wrap: wrap; margin-bottom: 5px">
          <div
            style="
              background-color: rgba(32, 128, 240, 0.12);
              color: #2080f0;
              padding-left: 10px;
              padding-right: 10px;
              /* padding-top: 2px; */
              /* padding-bottom: 2px; */
              font-size: smaller;
              margin-right: 5px;
              border-radius: 2px;
              line-height: normal;
              margin-bottom: 5px;
            "
            v-for="tag in frontMatter.tags || []"
          >
            {{ tag }}
          </div>
          <div
            style="
              background-color: rgba(32, 128, 240, 0.12);
              color: #2080f0;
              padding-left: 10px;
              padding-right: 10px;
              /* padding-top: 2px; */
              /* padding-bottom: 2px; */
              font-size: smaller;
              margin-right: 5px;
              border-radius: 15px;
              line-height: normal;
              margin-bottom: 5px;
            "
            v-for="key in frontMatter.keys || []"
          >
            {{ key }}
          </div>
        </div>
        <div class="date" style="display: flex; justify-content: space-between">
          <div>🕒 Create: {{ frontMatter.birthtime }}</div>
          <div>🕒 Last Update: {{ frontMatter.mtime }}</div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import DefaultTheme from 'vitepress/theme';
import {useData, onContentUpdated} from 'vitepress';
import {ref} from 'vue';
const data = useData();
const cPage = data.page;
const posts = data.theme.value.posts;
const cloak = ref(false);
// watch(cPage, (n, o) => {

// })
const frontMatter = ref({});
function setFrontMatter(c) {
  const match =
    posts.find((e) => {
      if (e.regularPath.replace('.html', '.md') == '/' + c.filePath) {
        return true;
      }
    })?.frontMatter || {};
  frontMatter.value = match;
}
//ToDO 合并
function changeToGrowStyle() {
  if (!document.getElementById('grow')) {
    var NGrow = document.getElementById('ngrow');
    if (NGrow) {
      NGrow.remove();
    }
    // 防止重复添加
    const style = document.createElement('style');
    style.id = 'grow'; // 给 style 指定 id
    style.textContent = `
        .glow-container {
          position: relative;
        }
        .glow-figer {
          position: absolute;
          top: 1em;
          left: 1.5em;
          z-index: 100;
          font-size: 40px;
        }

        .glow-text {
          background: linear-gradient(90deg, #ff0000, #00ff00, #3584ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          animation: glowd 3s infinite;
          text-decoration: underline;
        }
        `;
    document.head.appendChild(style);
  }
}
function changeToNGlowStyle() {
  if (!document.getElementById('ngrow')) {
    var grow = document.getElementById('grow');
    if (grow) {
      grow.remove();
    }
    // 防止重复添加
    const style = document.createElement('style');
    style.id = 'ngrow'; // 给 style 指定 id
    style.textContent = `
      .glow-figer {
        display: none;
      }
        `;
    document.head.appendChild(style);
  }
}
const {Layout} = DefaultTheme;
dayjs.extend(relativeTime);
onContentUpdated(async () => {
  if (window.location.pathname.includes('project_ca')) {
    changeToNGlowStyle();
  } else {
    changeToGrowStyle();
  }
  setFrontMatter(cPage.value);
  cloak.value = true;
});

//TODO gittalk 这个似乎没用
// import Comments from "./Comments.vue";
</script>

<style scoped>
.title {
  color: var(--vp-c-text-1);
  font-weight: 600;
  font-size: 2.25em;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  line-height: 1.3;
  font-family:
    Dosis,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    'Noto Sans',
    sans-serif,
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji';
}

.date {
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid #c7c7c7;
}
</style>
