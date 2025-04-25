<template>
  <div id="home">
    <div style="position: relative; max-width: 1376px; margin: auto">
      <div :style="filterContainerStyle">
        <!-- ctrl+ 点击 切换是否 导出 export全部文章  -->
        <input placeholder="filter title||keywords||brief " v-model="filter" style="width: 100%" @click.ctrl="switchBlogs" />
        <div style="display: flex; justify-content: flex-start; flex-wrap: wrap">
          <Tags
            v-for="g in currentTags"
            @click="setChoiceGroupItem(g.tag)"
            :title="g.tag"
            :count="filterGroupChildCount(g.Children)"
            :focus="isItemChoice(g.tag)"
            :show-count="true"
            :radius="true"
          >
          </Tags>
        </div>
      </div>

      <!-- <div id="blogItemsContainer" class="scrollArea"> -->
      <DynamicScroller class="scrollArea" :items="filterGroupChild(currentGroup.Children)" :min-item-size="140" ref="scroller" :emit-update="true" @update="onScrollUpdate">
        <template v-slot="{item, index, active}">
          <DynamicScrollerItem :item="item" :active="active" :data-index="index">
            <BlogItems :item="item" v-on:click="routeGo(item)"> </BlogItems>
          </DynamicScrollerItem>
        </template>
      </DynamicScroller>
      <!-- <BlogItems :item="item" v-for="(item, _) in filterGroupChild(group.Children)" v-on:click="routeGo(item)"> </BlogItems> -->
      <!-- </div> -->
      <ProfileMe :-is-show-img="true" :style="profileMeStyle"></ProfileMe>
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
import {ref, watch, onMounted, computed, onBeforeMount, nextTick} from 'vue';
import Tags from './Tags.vue';
import ProfileMe from './ProfileMe.vue';
import BlogItems from './BlogItems.vue';
//commonJs 报错？ 错误信息推荐使用这种导入。
import {useData, withBase} from 'vitepress';
import {DynamicScroller, DynamicScrollerItem} from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
const blogExport = ref(true);
function switchBlogs() {
  blogExport.value = !blogExport.value;
  if (!blogExport.value) {
    alert('一定是特别的缘分~');
  }
}
const scroller = ref({});
let isMounted = false;
function onScrollUpdate(viewStartIndex, viewEndIndex, visibleStartIndex, visibleEndIndex) {
  if (isMounted) {
    localStorage.setItem('ScrollVisibleStartIndex', visibleStartIndex);
  }
}
const {theme} = useData();
const filter = ref('');

watch(filter, () => {
  if (filter.value == '@sw') {
    switchBlogs();
    filter.value = '';
  }
});
const choiceGroupItem = ref('all');
function setChoiceGroupItem(tag) {
  choiceGroupItem.value = tag;
  localStorage.setItem('choiceGroupItem', choiceGroupItem.value);
}

function isItemChoice(groupName) {
  if (groupName == choiceGroupItem.value) {
    return true;
  }
  return false;
}

//#region 是否导出全部blogs
const exportPostsAll = theme.value.posts.filter((e) => {
  return e.frontMatter.export;
});
const currentPosts = ref(exportPostsAll);
watch(blogExport, () => {
  localStorage.setItem('blogExport', blogExport.value);
  setCurrentPosts();
});
function setCurrentPosts() {
  if (blogExport.value) {
    currentPosts.value = exportPostsAll;
  } else {
    currentPosts.value = theme.value.posts;
  }
  setGroupTags();
}
//#endregion

//#region tags 变化

const currentTags = ref([]);
function setGroupTags() {
  const groupTags = [
    {
      tag: 'all',
      Children: currentPosts.value
    }
  ];
  const insertGroupTab = (et, e) => {
    let it = groupTags.find((e1) => {
      return e1.tag == et;
    });
    if (it) {
      it.Children.push(e);
    } else {
      let ob = {
        tag: et,
        Children: [e]
      };
      groupTags.push(ob);
    }
  };
  currentPosts.value.forEach((e) => {
    if (e.frontMatter.tags) {
      e.frontMatter.tags.forEach((et) => {
        insertGroupTab(et, e);
      });
    }
  });
  currentTags.value = groupTags;
}
setGroupTags();

//#endregion

//#region  当前列表

const currentGroup = computed(() => {
  const ar = currentTags.value.filter((e) => {
    return e.tag == choiceGroupItem.value;
  });
  if (ar.length == 0) {
    return currentTags.value[0];
  }
  return ar[0];
});
//#endregion

function tagsorKeysIncludes(tags, str) {
  if (tags) {
    for (let i = 0; i < tags.length; ++i) {
      if (tags[i].includes(str)) {
        return true;
      }
    }
  }
  return false;
}

// 当写完这个，过了很长一段时间，大概有两年把，我搞不懂了这个函数是从哪里调用的
//对于vue 来说，这是个函数的动态绑定，只要这个页面有v-model的值被改变，所有类似的动态绑定的以函数返回的值都会被调用，所以这个调用过程对于用户是“部分隐藏的”
// 也就是说，我在我写的代码里面找不到`事件与这个函数的关系`
// 当时我是怎么知道这个知识点的呢？ 我咋一点印象都没有？:)
function filterGroupChild(Children) {
  return Children.filter((e) => {
    return (
      e.frontMatter.title.includes(filter.value) ||
      tagsorKeysIncludes(e.frontMatter.tags, filter.value) ||
      tagsorKeysIncludes(e.frontMatter.keys, filter.value) ||
      e.frontMatter.desp.includes(filter.value)
    );
  });
}
function filterGroupChildCount(Children) {
  let count = 0;
  Children.forEach((e) => {
    if (
      e.frontMatter.title.includes(filter.value) ||
      tagsorKeysIncludes(e.frontMatter.tags, filter.value) ||
      tagsorKeysIncludes(e.frontMatter.keys, filter.value) ||
      e.frontMatter.desp.includes(filter.value)
    ) {
      count++;
    }
  });
  return count;
}

function routeGo(item) {
  window.location.href = withBase(item.regularPath);
}

const filterContainerStyle = ref({});
const profileMeStyle = ref({});
function onScreenWidthChanged() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (screenWidth > 1376 + 400) {
    filterContainerStyle.value = {
      width: '200px',
      position: 'absolute',
      left: '-200px',
      zIndex: '999'
    };
    profileMeStyle.value = {
      width: '200px',
      top: '0px',
      position: 'absolute',
      right: '-210px',
      zIndex: '999'
    };
  } else {
    filterContainerStyle.value = {
      width: '100%',
      padding: '2px 5px 2px 5px'
    };
    profileMeStyle.value = {
      width: '100%',
      padding: '2px 5px 2px 5px'
    };
  }
}
onMounted(() => {
  window.addEventListener('resize', onScreenWidthChanged);
  onScreenWidthChanged();
  nextTick(() => {
    const indexStr = localStorage.getItem('ScrollVisibleStartIndex');
    if (indexStr) {
      let index = parseInt(indexStr);
      if (index > filterGroupChild(currentGroup.value.Children).length) {
        index = 0;
      }
      //WARNING  BUG  index maybe 大于 count  从而导致错误,这出现在文章减少的情况下
      scroller.value.scrollToItem(index);
    }
    isMounted = true;
  });
});
onBeforeMount(() => {
  choiceGroupItem.value = localStorage.getItem('choiceGroupItem') || 'all';
  if (localStorage.getItem('blogExport') == 'false') {
    blogExport.value = false;
  } else {
    blogExport.value = true;
  }
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
  width: 5px;
  /*高宽分别对应横竖滚动条的尺寸*/
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
