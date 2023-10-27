<template>
  <div v-if="notSsrRender">
    <n-config-provider :theme="nTheme">
      <n-space justify="center">
        <n-scrollbar class="postsTab">
          <div v-for="group in historyPosts.filter((e) => e.Children)">
            <div class="historyYear">
              {{ group.year
              }}<span style="font-size: 45px"
                >({{ group.Children.length }})</span
              >
            </div>
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
          </div>
        </n-scrollbar>
      </n-space>
    </n-config-provider>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vitepress";
//commonJs 报错？ 错误信息推荐使用这种导入。
import * as pkg from "naive-ui";
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
  NScrollbar,
} = pkg;
//naive-ui 默认不支持 ssr 渲染，而vitepress 是ssr 渲染，这里使naive-ui组件跳过ssr
const notSsrRender = ref(false);
const { theme, isDark } = useData();
const historyPosts = ref([
  {
    year: "2019",
  },
  {
    year: "2020",
  },
  {
    year: "2021",
  },
  {
    year: "2022",
  },
  {
    year: "2023",
  },
  {
    year: "2024",
  },
  {
    year: "2025",
  },
  {
    year: "2026",
  },
  {
    year: "2027",
  },
  {
    year: "2028",
  },
  {
    year: "2029",
  },
  {
    year: "2030",
  },
  {
    year: "2031",
  },
  {
    year: "2032",
  },
  {
    year: "2033",
  },
  {
    year: "2034",
  },
  {
    year: "2035",
  },
  {
    year: "2036",
  },
  {
    year: "2037",
  },
  {
    year: "2038",
  },
  {
    year: "2039",
  },
] as Array<any>);


let postsAll = theme.value.posts || [];
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
  postsAll.forEach((e) => {
    if (e.frontMatter.birthtime) {
      const year = e.frontMatter.birthtime.split("/")[0];
      for (var i = 0; i < historyPosts.value.length; ++i) {
        if (historyPosts.value[i].year == year) {
          if (historyPosts.value[i].Children) {
            historyPosts.value[i].Children.push(e);
          } else {
            historyPosts.value[i].Children = [e];
          }
          break;
        }
      }
    }
  });
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
.postsTab {
  width: calc(var(--vp-layout-max-width));
}
.historyYear {
  border-bottom: 5px double;
  border-color: var(--vp-input-border-color);
  text-align: center;
  font-size: 64px;
  line-height: 64px;
  padding-bottom: 20px;
}
</style>
