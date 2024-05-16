<template>
  <div id="home">
    <div style="position: relative; width: 1376px; margin: auto">
      <div :style="filterContainerStyle">
        <!-- ctrl+ 点击 切换是否 导出 export全部文章  -->
        <input
          placeholder="filter title||keywords||brief "
          v-model="filter"
          style="width: 100%"
          @click.ctrl="
            () => {
              blogExport = !blogExport;
            }
          "
        />
        <div style="display: flex; justify-content: flex-start; flex-wrap: wrap">
          <Tags
            v-for="group in getGroupTabs()"
            @mouseenter="
              () => {
                hoverGroupItem = group.tag;
              }
            "
            @mouseleave="
              () => {
                hoverGroupItem = '';
              }
            "
            @click="
              () => {
                choiceGroupItem = group.tag;
              }
            "
            :title="group.tag"
            :count="filterGroupChild(group.Children).length"
            :focus="isItemHoverOrChoice(group.tag)"
            :show-count="true"
            :radius="true"
          ></Tags>
        </div>
      </div>
      <div id="blogItemsContainer" class="scrollArea">
        <BlogItems :item="item" v-for="(item, _) in filterGroupChild(group.Children)" v-on:click="routeGo(item)"> </BlogItems>
      </div>
    </div>
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
        <a href="https://beian.miit.gov.cn/">豫ICP备2023028578号 </a>
      </span>
      |
      <span style="position: relative">
        <a href="https://beian.mps.gov.cn/#/query/webSearch?code=41061102000409">豫公网安备41061102000409号</a>
      </span>
    </div>
  </div>
</template>
<script setup>
import {ref, watch, onMounted, computed, nextTick} from 'vue';
import Tags from './Tags.vue';
import BlogItems from './BlogItems.vue';
//commonJs 报错？ 错误信息推荐使用这种导入。
import {useData, withBase} from 'vitepress';
const blogExport = ref(true);

watch(blogExport, () => {
  localStorage.setItem('blogExport', blogExport.value);
});
const {theme} = useData();
const filter = ref('');
const group = computed(() => {
  const ar = getGroupTabs().filter((e) => {
    return e.tag == choiceGroupItem.value;
  });
  if (ar.length == 0) {
    return getGroupTabs()[0];
  }
  return ar[0];
});
const hoverGroupItem = ref('');
const choiceGroupItem = ref('all');

function isItemHoverOrChoice(groupName) {
  if (groupName == choiceGroupItem.value) {
    return true;
  } else if (groupName == hoverGroupItem.value) {
    return true;
  }
  return false;
}
const exportPostAll = theme.value.posts.filter((e) => {
  return e.frontMatter.export;
});

function getPostsAll() {
  if (blogExport.value) {
    return exportPostAll;
  }
  return theme.value.posts;
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

function routeGo(item) {
  window.location.href = withBase(item.regularPath);
}

function getGroupTabs() {
  const groupTabs = [
    {
      tag: 'all',
      Children: getPostsAll()
    }
  ];
  const insertGroupTab = (et, e) => {
    let it = groupTabs.find((e1) => {
      return e1.tag == et;
    });
    if (it) {
      it.Children.push(e);
    } else {
      let ob = {
        tag: et,
        Children: [e]
      };
      groupTabs.push(ob);
    }
  };
  getPostsAll().forEach((e) => {
    if (e.frontMatter.tags) {
      e.frontMatter.tags.forEach((et) => {
        insertGroupTab(et, e);
      });
    }
  });
  return groupTabs;
}

const filterContainerStyle = ref({});

function onScreenWidthChanged() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (screenWidth > 1376 + 220) {
    filterContainerStyle.value = {
      width: '200px',
      position: 'absolute',
      right: '-220px',
      zIndex: '999'
    };
  } else {
    filterContainerStyle.value = {
      width: '100%',
      padding: '2px 5px 2px 5px'
    };
  }
}
let blogItemsContainer = null;
let isScrollTimerStart = false;
function scrollTimerFun() {
  isScrollTimerStart = false;
  localStorage.setItem('scrollTop', blogItemsContainer.scrollTop);
}

onMounted(() => {
  window.addEventListener('resize', onScreenWidthChanged);
  onScreenWidthChanged();
  blogItemsContainer = document.getElementById('blogItemsContainer');
  blogItemsContainer.addEventListener(
    'scroll',
    () => {
      if (!isScrollTimerStart) {
        isScrollTimerStart = true;
        setTimeout(scrollTimerFun, 500);
      }
    },
    true
  );

  if (localStorage.getItem('blogExport') == 'false') {
    blogExport.value = false;
  } else {
    blogExport.value = true;
  }

  nextTick(() => {
    const scrollTop = localStorage.getItem('scrollTop');
    if (scrollTop) {
      blogItemsContainer.scrollTo({top: parseInt(scrollTop)});
    }
  });
});
</script>

<style>
.scrollArea {
  height: calc(100vh - 88px);
  overflow-y: auto;

  /* padding-bottom: 25px; */
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
  /* min-height: calc(100vh - 100px); */
}

.scrollArea::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.scrollArea::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
.scrollArea::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  /* box-shadow : inset 0 0 5px rgba(0, 0, 0, 0.2); */
  border-radius: 10px;
  /* background : #ededed; */
}
</style>
