<template>
  <!-- <FireWorksAnimation />
  <ShareCard /> -->
  <!-- <h1 class="blog-title">Blogs</h1> -->
  <div v-if="notSsrRender">
    <n-config-provider :theme="nTheme">
    <n-list hoverable clickable>

      <n-list-item v-for="(item, index) in postsAll" v-on:click="routeGo(item)">
        <n-thing :title="item.frontMatter.title" content-style="margin-top: 10px;">
          <template #description>
            <n-space justify="space-between" size="small" style="margin-top: 4px">
              <div>
                Created:{{ item.frontMatter.birthtime }}
              </div>
              <div>
                Last Update:{{ item.frontMatter.mtime }}
              </div>
            </n-space>
            <n-space size="small" style="margin-top: 4px">
              <n-tag v-for="t in item.frontMatter.tags || []" :bordered="false" type="info" size="small">
                {{ t }}
              </n-tag>

            </n-space>
          </template>
          {{ item.frontMatter.desp }}
        </n-thing>
      </n-list-item>
    </n-list>
  </n-config-provider>

  </div>


  <!-- <div class="blogList">
    <a class="blog" v-for="item in postsAll" :href="withBase(item.regularPath)">
      <div class="title">{{ item.frontMatter.title }}</div>
      <div class="date">{{ item.frontMatter.birthtime }}</div>
    </a>
  </div> -->
  <!-- <div class="pagination">
    <button class="left" v-if="pageCurrent > 1" @click="go(pageCurrent - 1)">
      Previous page
    </button>
    <div v-if="pagesNum > 1">{{ `${pageCurrent}/${pagesNum}` }}</div>
    <button
      class="right"
      v-if="pageCurrent < pagesNum"
      @click="go(pageCurrent + 1)"
    >
      Next page
    </button>
  </div> -->
</template>
<script lang="ts" setup>
import { ref, watch,onMounted} from "vue";
import * as pkg from 'naive-ui';
const { lightTheme, darkTheme, NConfigProvider, NList, NListItem, NThing, NSpace, NTag } = pkg;
const notSsrRender = ref(false)
// const {NConfigProvider} = pkg
// import ShareCard from "./ShareCard.vue";
// import FireWorksAnimation from "./FireWorksAnimation.vue";
import { useData, withBase } from "vitepress";
interface post {
  regularPath: string;
  frontMatter: object;
}
function routeGo(item:any) {
  window.location.href = withBase(item.regularPath)
}
const { theme, isDark } = useData();
let nTheme = ref(lightTheme);
if (isDark.value) {
  nTheme.value = darkTheme;
}
watch(isDark, (o, n) => {
  if (!n) {
    nTheme.value = darkTheme;
  } else {
    nTheme.value = lightTheme;
  }
});
// get posts
let postsAll = theme.value.posts || [];
console.log(postsAll);
// console.log(theme.value)
// console.log(postsAll)
// get postLength
onMounted(()=>{
  notSsrRender.value = true
})
// timestamp transform
const transDate = (date: string) => {
  const dateArray = date.split("-");
  let year = dateArray[0],
    month = ``,
    day = dateArray[2];
  switch (dateArray[1]) {
    case "1":
    case "01":
      month = `Jan`;
      break;
    case "2":
    case "02":
      month = `Feb`;
      break;
    case "3":
    case "03":
      month = `Mar`;
      break;
    case "4":
    case "04":
      month = `Apr`;
      break;
    case "5":
    case "05":
      month = `May`;
      break;
    case "6":
    case "06":
      month = `Jun`;
      break;
    case "7":
    case "07":
      month = `Jul`;
      break;
    case "8":
    case "08":
      month = `Aug`;
      break;
    case "9":
    case "09":
      month = `Sep`;
      break;
    case "10":
      month = `Oct`;
      break;
    case "11":
      month = `Nov`;
      break;
    case "12":
      month = `Dec`;
      break;
    default:
      month = `Month`;
  }
  return `${month} ${day}, ${year}`;
};
</script>

<style scoped></style>
