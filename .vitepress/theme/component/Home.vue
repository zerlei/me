<template>
  <div v-if="notSsrRender" id="home">
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
        <div v-if="imgShowTop">
          <img
            style="
              border-radius: 20px; /* width: 100%; */
              max-width: 350px;
              margin: 0 auto;
              /* float: right; */
            "
            :src="imgsrc"
          />
        </div>
        <div style="display: block">
          <n-scrollbar :style="pinScrollStyle">
            <p>
              优秀的人完成困难的事情。或者完成简单的事情，但是干净、利落和艺术。
            </p>
            <p>
              爱上睡觉，平和入睡，是人生的大成就。
            </p>
            <p style="text-align: right;">
                - 赵宥涯(me😊)
            </p>
            <div id="pincontainer">
              <!-- <n-gradient-text>
                <p
                  style="
                    /* text-align: center; */
                    font-size: 34px;
                    font-weight: bolder;
                    font-style: italic;
                  "
                >
                  Hi~
                </p>
                My name is zhao lei(赵磊). you can contact me by
                WeChat:zhao_you_ya(always online) or email:1445089819@qq.com or DisCard:ZhaoYouYa#5917
              </n-gradient-text> -->
              <div
                style="
                  line-height: 30px;
                  background-color: rgba(150, 150, 150, 0.4);
                  border-top-left-radius: 10px;
                  border-top-right-radius: 10px;
                  /* color: red; */
                  font-weight: bolder;
                  font-size: larger;
                  padding-left: 10px;
                "
              >
                <n-gradient-text type="danger"> 📌 </n-gradient-text>
              </div>
              <n-thing
                class="pin"
                v-for="item in getPinGroup()"
                :title="item.frontMatter.title"
                content-style="margin-top: 10px;"
                v-on:click="routeGo(item)"
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
                </n-space>
              </n-thing>
            </div>
          </n-scrollbar>
          <div v-if="!imgShowTop">
            <img
              style="
                border-radius: 20px; /* width: 100%; */
                max-width: 350px;
                margin: 0 auto;
                /* float: right; */
              "
              :src="imgsrc"
            />
          </div>
        </div>
        <n-input
          placeholder="filter title&keywords&brief "
          v-model:value="filter"
        ></n-input>
        <n-space>
          <n-tag
            style="cursor: pointer"
            @mouseenter="itemMouseEnter(group.tag)"
            @mouseleave="itemMouseLeave"
            @click="itemClick(group.tag)"
            v-for="group in groupTabs"
            :type="isItemHoverOrChoice(group.tag)"
            round
            :bordered="false"
          >
            <span style="user-select: none">
              {{ getTabsName(group) }}
            </span>
          </n-tag>
        </n-space>

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
      </n-space>
    </n-config-provider>

    <div
      id="footer"
      style="
        bottom: 0;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 13px;
        line-height: 22px;
        /* background-color: rgba(150, 150, 150, 0.4); */
        /* border-top: 1px dashed rgba(150, 150, 150, 0.4); */
        /* line-height: 30px; */
        cursor: pointer;
        z-index: 999;
      "
    >
      <span style="position: relative">
        <img
          style="width: 15px; position: absolute; left: 0px; top: 1px"
          src="https://wap.miit.gov.cn/cms_files/filemanager/picture/20201/565bcb03cea442e1a40b4814ca839c20.png"
        />
        <a style="margin-left: 20px" href="https://beian.miit.gov.cn/"
          >豫ICP备2023028578号
        </a>
      </span>
      |
      <span style="position: relative">
        <img
          src="https://beian.mps.gov.cn/web/assets/logo01.6189a29f.png"
          style="width: 15px; position: absolute; left: 0; top: 1px"
        />
        <a
          style="margin-left: 20px"
          href="https://beian.mps.gov.cn/#/query/webSearch?code=41061102000409"
          >豫公网安备41061102000409号</a
        >
      </span>
    </div>
  </div>
</template>
<script setup>
import { ref, watch, onMounted, computed } from "vue";
//commonJs 报错？ 错误信息推荐使用这种导入。
import * as pkg from "naive-ui";
// import tcai from "../../../asserts/gc.png";
import imgsrc from "../../../asserts/head.png";
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
  NInput,
  NGradientText,
} = pkg;
//naive-ui 默认不支持 ssr 渲染，而vitepress 是ssr 渲染，这里使naive-ui组件跳过ssr
const notSsrRender = ref(false);
const imgShowTop = ref(false);
const { theme, isDark } = useData();
const filter = ref("");
const group = computed(() => {
  const ar = groupTabs.value.filter((e) => {
    return e.tag == choiceGroupItem.value;
  });
  if (ar.length == 0) {
    return groupTabs.value[0];
  }
  return ar[0];
});
const hoverGroupItem = ref("");
const choiceGroupItem = ref("all");

function isItemHoverOrChoice(groupName) {
  if (groupName == choiceGroupItem.value) {
    return "error";
  } else if (groupName == hoverGroupItem.value) {
    return "error";
  }
  return "";
}
function itemMouseEnter(groupName) {
  hoverGroupItem.value = groupName;
}
function itemMouseLeave() {
  hoverGroupItem.value = "";
}
function itemClick(groupName) {
  choiceGroupItem.value = groupName;
}

let postsAll = theme.value.posts || [];
// console.log(postsAll)
const spaceItemStyle = ref({
  width: "1376px",
});
const pinScrollStyle = ref({
  maxHeight: "350px",
  maxWidth: "auto",
  float: "left",
  padding: "5px",
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
    imgShowTop.value = false;
    spaceItemStyle.value.width = "1376px";
    pinScrollStyle.value.maxWidth = "1000px";
  } else {
    imgShowTop.value = true;
    spaceItemStyle.value.width = "100%";
    pinScrollStyle.value.maxWidth = `${width}px`;
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
function getPinGroup() {
  return postsAll.filter((e) => {
    return e.frontMatter.pin != undefined;
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
  return `${group.tag}(${filterGroupChild(group.Children).length})`;
}
onMounted(() => {
  notSsrRender.value = true;
  setGroupPosts();
  window.addEventListener("resize", handleWindowSizeChange);

  spaceItemStyle.value = {
    width: window.innerWidth > 1376 ? "1376px" : "100%",
  };
  pinScrollStyle.value = {
    maxHeight: "350px",
    maxWidth: window.innerWidth > 1376 ? "1000px" : "auto",
    float: "left",
    padding: "5px",
  };
  if (window.innerWidth > 1376) {
    imgShowTop.value = false;
  } else {
    imgShowTop.value = true;
  }
});
</script>

<style>
.scrollArea {
  height: calc(60vh);
  padding-bottom: 25px;
  /* min-height: 30vh; */
}
#footer {
  background-color: var(--vp-c-bg);

  border-color: var(--vp-input-border-color);
}
#pincontainer {
  border-color: var(--vp-input-border-color);
  /* border: 1px dashed; */
  border-radius: 10px;
  /* padding: 0px 0; */
}

a:hover {
  color: #266fe8;
  text-decoration: underline;
}
.pin {
  cursor: pointer;
  /* border: 1px solid gray; */
  padding: 10px;
  /* width: 200px; */
  /* height: 200px; */
}
.pin:hover {
  background-color: rgba(180, 180, 180, 0.2);
  border-radius: 5px;
}
.VPHome {
  padding-bottom: 0px !important;
}
#home {
  position: relative;
  min-height: calc(100vh - 70px);
}
</style>
