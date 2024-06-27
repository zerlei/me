<template>
  <div>
    <div v-for="item in data">
      <h2 :id="item.title" tabindex="-1">
        {{ item.title }}
        <a class="header-anchor" :href="`#${item.title}`" aria-hidden="true"></a>
      </h2>
      <div class="m-nav-links">
        <div v-for="anchor in item.children">
          <a class="m-nav-link" :href="anchor[3]" target="_blank" rel="noreferrer">
            <article class="box">
              <div class="box-header">
                <div class="icon" v-if="IsSvg(anchor[1])" v-html="anchor[1]"></div>
                <div v-else class="icon">
                  <img :src="anchor[1]" :alt="anchor[0]" onerror="this.parentElement.style.display='none'" />
                </div>
                <h5  class="title">{{ anchor[0] }}</h5>
              </div>
              <p class="desc">{{ anchor[2] }}</p>
            </article>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
function IsSvg(str) {
  if(str[0] == '<') {
    return true
  }
  return false
}

const data = ref([
  {
    title: 'git 仓库',
    children: [
      [
        'Github',
        '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        '一个面向开源及私有软件项目的托管平台',
        'https://github.com'
      ]
    ]
  },
  {
    title: '视频网站',
    children: [
      ['youtube', 'https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png', '有许多高质量的视频教程', 'https://www.youtube.com'],
      ['B站', 'https://static.hdslb.com/mobile/img/512.png', '娱乐视频，有一些学习视频', 'https://www.bilibili.com']
    ]
  }
]);
</script>

<style lang="scss" scoped>
.m-nav-layout {
  /* 覆盖全局的 vp-layout-max-width（仅当前页面使用） */
  --vp-layout-max-width: 1660px;

  /* layout 样式 */
  .container {
    max-width: var(--vp-layout-max-width) !important;
  }
  .content-container,
  .content {
    max-width: 100% !important;
  }

  /* aside 样式 */
  .aside {
    padding-left: 0;
    max-width: 224px;
  }

  /* custom-block */
  .custom-block {
    .custom-block-title {
      font-size: var(--vp-custom-block-font-size);
    }
    ul {
      margin: 8px 0;
    }
    li {
      margin: 0;
    }
  }

  .vp-doc h2 {
    margin-top: 24px;
  }
}

.m-nav-links {
  --m-nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--m-nav-gap);
  grid-column-gap: var(--m-nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--m-nav-gap);
}

@each $media, $size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
  @media (min-width: $media) {
    .m-nav-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@media (min-width: 960px) {
  .m-nav-links {
    --m-nav-gap: 20px;
  }
}
.m-nav-link {
  --m-nav-icon-box-size: 40px;
  --m-nav-icon-size: 24px;
  --m-nav-box-gap: 12px;

  display: block;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  height: 100%;
  text-decoration: inherit;
  background-color: var(--vp-c-bg-alt);
  transition: all 0.25s;
  &:hover {
    box-shadow: var(--vp-shadow-2);
    border-color: var(--vp-c-brand);
    text-decoration: initial;
    background-color: var(--vp-c-bg);
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: var(--m-nav-box-gap);
    height: 100%;
    color: var(--vp-c-text-1);
    &-header {
      display: flex;
      align-items: center;
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: calc(var(--m-nav-box-gap) - 2px);
    border-radius: 6px;
    width: var(--m-nav-icon-box-size);
    height: var(--m-nav-icon-box-size);
    font-size: var(--m-nav-icon-size);
    background-color: var(--vp-c-default-soft);
    transition: background-color 0.25s;
    :deep(svg) {
      width: var(--m-nav-icon-size);
      fill: currentColor;
    }
    :deep(img) {
      border-radius: 4px;
      width: var(--m-nav-icon-size);
    }
  }

  .title {
    overflow: hidden;
    flex-grow: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: var(--m-nav-icon-box-size);
    font-size: 16px;
    font-weight: 600;
  }

  .desc {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
    margin: calc(var(--m-nav-box-gap) - 2px) 0 0;
    line-height: 1.5;
    font-size: 12px;
    color: var(--vp-c-text-2);
  }
}

@media (max-width: 960px) {
  .m-nav-link {
    --m-nav-icon-box-size: 36px;
    --m-nav-icon-size: 20px;
    --m-nav-box-gap: 8px;

    .title {
      font-size: 14px;
    }
  }
}
</style>
