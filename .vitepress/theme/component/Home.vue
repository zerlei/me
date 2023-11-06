<template>
  <div v-if="notSsrRender">
    <n-config-provider :theme="nTheme">
      <n-space justify="center" :item-style="spaceItemStyle">
        <!-- <div >
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
            的个人学习网站，它表达我的价值观和行为、思想风格；还有一些学习笔记。
          </p>
          <p>我是一个程序员。我对这些领域感兴趣：</p>

          <ol>
            <li>1. c++</li>
            <li>2. qt</li>
            <li>3. 存储、db</li>
            <li>4. zig</li>
          </ol>
          <p>我也在这些方面工作：</p>
          <ol>
            <li>1. js/ts vue</li>
            <li>2. .net c#</li>
            <li>3. python</li>
          </ol>
          

        </div> -->
        <div>
          <n-space justify="center">
            <img
              style="border-radius: 20px; width: 100%; max-width: 350px"
              :src="tcai"
            />
          </n-space>
          <!-- <p style="text-align: center">《此图为腾讯混元大模型生成》</p> -->
        </div>
        <n-input placeholder="filter" v-model:value="filter"></n-input>
        <n-tabs type="line" animated>
          <n-tab-pane v-for="group in groupTabs" :name="getTabsName(group)">
            <n-scrollbar class="scrollArea">
              <n-list hoverable clickable>
                <n-list-item
                  v-for="(item, index) in filterGroupChild(group.Children)"
                  v-on:click="routeGo(item)"
                >
                  <n-thing
                    :title="item.frontMatter.title"
                    content-style="margin-top: 10px;"
                  >
                    <template #description>
                      <n-space size="small" style="margin-top: 4px">
                        <n-tag
                          v-for="t in item.frontMatter.tags || []"
                          :bordered="false"
                          type="info"
                          size="small"
                        >
                          {{ t }}
                        </n-tag>
                        <n-tag
                          v-for="t in item.frontMatter.keys || []"
                          :bordered="false"
                          type="info"
                          size="small"
                          round
                        >
                          {{ t }}
                        </n-tag>
                      </n-space>
                    </template>
                    <p>
                      {{ item.frontMatter.desp }}
                    </p>
                    <n-space
                      justify="space-between"
                      size="small"
                      style="margin-top: 4px; font-size: small"
                    >
                      <div>Created:{{ item.frontMatter.birthtime }}</div>
                      <div>Last Update:{{ item.frontMatter.mtime }}</div>
                    </n-space>
                  </n-thing>
                </n-list-item>
              </n-list>
            </n-scrollbar>
          </n-tab-pane>
        </n-tabs>
      </n-space>
    </n-config-provider>
  </div>
  <a
    id="footer"
    style="
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      text-align: center;
      /* font-size: large; */
      line-height: 35px;
      cursor: pointer;
      z-index: 999;
    "
    href="https://beian.miit.gov.cn/"
  >
    豫ICP备2023028578号
  </a>
</template>
<script setup>
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
  NInput,
} = pkg;
//naive-ui 默认不支持 ssr 渲染，而vitepress 是ssr 渲染，这里使naive-ui组件跳过ssr
const notSsrRender = ref(false);
const { theme, isDark } = useData();
const filter = ref("");
let postsAll = theme.value.posts || [];
const spaceItemStyle = ref({
  width: "1376px",
});
const groupTabs = ref([
  {
    tag: "all",
    Children: postsAll,
  },
]);
let nTheme = ref(lightTheme);
if (isDark.value) {
  nTheme.value = darkTheme;
}
function handleWindowSizeChange() {
  let width = window.innerWidth;
  if (width > 1376) {
    spaceItemStyle.value.width = "1376px";
  } else {
    spaceItemStyle.value.width = "100%";
  }
}
function tagsOrKeysIncludes(tags, str) {
  if (tags) {
    for (let i = 0; i < tags.length; ++i) {
      if (tags[i].includes(str)) {
        return true;
      }
    }
  }
  return false;
}
function filterGroupChild(Children) {
  return Children.filter((e) => {
    return (
      e.frontMatter.title.includes(filter.value) ||
      tagsOrKeysIncludes(e.frontMatter.tags, filter.value) ||
      tagsOrKeysIncludes(e.frontMatter.keys, filter.value) ||
      e.frontMatter.desp.includes(filter.value)
    );
  });
}
// 监听 resize 事件

watch(isDark, (o, n) => {
  if (!n) {
    nTheme.value = darkTheme;
  } else {
    nTheme.value = lightTheme;
  }
});
function routeGo(item) {
  window.location.href = withBase(item.regularPath);
}

function setGroupPosts() {
  const insertGroupTab = (et, e) => {
    let it = groupTabs.value.find((e1) => {
      return e1.tag == et;
    });
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
  window.addEventListener("resize", handleWindowSizeChange);
  spaceItemStyle.value = {
    width: window.innerWidth > 1376 ? "1376px" : "100%",
  };
});
</script>

<style>
/* .scrollArea {
  max-height: calc(80vh);
 
} */
#footer {
  background-color: var(--vp-c-bg);
  border-top: 1px solid;
  border-color: var(--vp-input-border-color);
}
</style>
