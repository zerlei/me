<template>
    <Layout>
        <template #doc-before>
            <div v-if="pageType != 'HomePage'">
                <h1 class="title">{{ pageData.title }}</h1>
                <div class="date">🕒 Published at: {{ publishDate }}</div>
            </div>
        </template>
        <template #home-features-after>
            <Home />
        </template>
    </Layout>
</template>

<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import DefaultTheme from "vitepress/theme";
import Home from "./Home.vue"
import { useData, onContentUpdated } from "vitepress";
import { ref } from "vue";

let pageType = ref('HomePage')

const pageData = useData().page;
//ToDO 合并
console.log(useData())
const publishDate = ref("");

const { Layout } = DefaultTheme;
dayjs.extend(relativeTime);
onContentUpdated(() => {
    const { frontmatter } = pageData.value;
    // console.log(frontmatter)
    if (frontmatter.type != "HomePage") {
        publishDate.value = dayjs().to(dayjs(frontmatter.date || Date.now()));
        pageType.value = "GeneralPage"
    } else {
        pageType.value = 'HomePage'
    }

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
    font-family: Dosis, ui-sans-serif, system-ui, -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
        sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji";
}

.date {
    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-bottom: 1em;
    padding-bottom: 1em;
    border-bottom: 1px solid #c7c7c7;
}</style>