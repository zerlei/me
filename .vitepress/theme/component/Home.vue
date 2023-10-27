<template>
  <div v-if="notSsrRender">
    <n-config-provider :theme="nTheme">
      <n-space justify="center">
        <div class="postsTab" style="position: relative">
          <div
            style="
              font-size: 48px;
              margin-top: 50px;
              margin-bottom: 50px;
              text-align: center;
            "
          >
            Hi!
          </div>
          <p>
            这里是
            <span style="font-weight: bolder">Zerlei</span>
            的个人网站，它表达我的价值观和行为、思想风格,也有一些学习的笔记。
          </p>
          <p>我是一个程序员。我对这些领域感兴趣：</p>

          <ol>
            <li>1. c++</li>
            <li>2. qt</li>
            <li>3. 存储、db</li>
            <li>4. zig</li>
            <li>5. web前端</li>
          </ol>
          <p>(右图为腾讯混元大模型生成)</p>
          <img
            style="
              border-radius: 20px;
              width: 250px;
              position: absolute;
              top: 30px;
              right: 0;
            "
            :src="tcai"
          />
        </div>

        <n-tabs type="line" class="postsTab" animated>
          <n-tab-pane v-for="group in groupTabs" :name="getTabsName(group)">
            <n-scrollbar class="scrollArea">
              <n-list hoverable clickable>
                <n-list-item
                  v-for="(item, index) in group.Children"
                  v-on:click="routeGo(item)"
                >
                  <n-thing
                    :title="item.frontMatter.title"
                    content-style="margin-top: 10px;"
                  >
                    <template #description>
                      <n-space
                        justify="space-between"
                        size="small"
                        style="margin-top: 4px"
                      >
                        <div>Created:{{ item.frontMatter.birthtime }}</div>
                        <div>Last Update:{{ item.frontMatter.mtime }}</div>
                      </n-space>
                      <n-space size="small" style="margin-top: 4px">
                        <n-tag
                          v-for="t in item.frontMatter.tags || []"
                          :bordered="false"
                          type="info"
                          size="small"
                        >
                          {{ t }}
                        </n-tag>
                      </n-space>
                    </template>
                    {{ item.frontMatter.desp }}
                  </n-thing>
                </n-list-item>
              </n-list>
            </n-scrollbar>
          </n-tab-pane>
        </n-tabs>
      </n-space>
    </n-config-provider>
  </div>
  <div
    id="footer"
    style="
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      text-align: center;
      font-size: large;
      line-height: 45px;
      z-index: 999;
    "
  >
    备案号:XXXXXXXXXXX
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, onMounted, watchEffect } from "vue";
import { useRoute } from "vitepress";
//commonJs 报错？ 错误信息推荐使用这种导入。
import * as pkg from "naive-ui";
import tcai from "../../../asserts/tcai.png";
import { useData, withBase } from "vitepress";
const {
  lightTheme,
  darkTheme,
  NConfigProvider,
  NList,
  NListItem,
  NThing,
  NSpace,
  NTag,
  NTabs,
  NTabPane,
  NScrollbar,
} = pkg;
//naive-ui 默认不支持 ssr 渲染，而vitepress 是ssr 渲染，这里使naive-ui组件跳过ssr
const notSsrRender = ref(false);
const { theme, isDark } = useData();


let postsAll = theme.value.posts || [];
const groupTabs = ref([
  {
    tag: "all",
    Children: postsAll,
  },
] as Array<any>);
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
function routeGo(item: any) {
  window.location.href = withBase(item.regularPath);
}

function setGroupPosts() {
  const insertGroupTab = (et: string, e: any) => {
    let it = groupTabs.value.find((e1) => {
      return (e1 as any).tag == et;
    }) as any;
    if (it) {
      it.Children.push(e);
    } else {
      let ob = {
        tag: et,
        Children: [e],
      };
      groupTabs.value.push(ob);
    }
  };
  postsAll.forEach((e) => {
    if (e.frontMatter.tags) {
      e.frontMatter.tags.forEach((et) => {
        insertGroupTab(et, e);
      });
    }
  });
}
function getTabsName(group) {
  return `${group.tag}(${group.Children.length})`;
}
onMounted(() => {
  notSsrRender.value = true;
  setGroupPosts();
});
</script>

<style>
.scrollArea {
  max-height: calc(80vh);
  /* height: 500px; */
  /* background-color: blue; */
}
#footer {
  background-color: var(--vp-c-bg);
  border-top: 1px solid;
  border-color: var(--vp-input-border-color);
}
.postsTab {
  width: calc(var(--vp-layout-max-width));
}
</style>
