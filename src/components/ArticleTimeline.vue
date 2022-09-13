<script setup lang='ts'>
import { useHelpers } from '@/composables/useHelpers.js';
import { useArticlesStore } from '@/stores/articles';
import { defineAsyncComponent, onBeforeMount, reactive, ref } from 'vue';
const ArticleTimelineItemCard = defineAsyncComponent(() => import('@/components/ArticleTimelineItemCard.vue'));

const store = useArticlesStore();
const articleList = ref();
const storyStack = reactive([]);

const {
    getDayFromDatetime,
} = useHelpers();

const formatArticleList = () => {
    const date = new Date();
    let today = getDayFromDatetime(date);
    for(var i = 0; i < today; i++){
        storyStack.unshift(articleList.value.filter((item) => {
            return getDayFromDatetime(item.publishedAt) == i;
        }));
    }
};

onBeforeMount(async() => {
    articleList.value = await store.fetchArticles('2022-09-01T08:41:11.000Z');
    formatArticleList();
});

</script>

<template>
    🌌👩‍🚀🌟🌑 timeline / search / analytics
    pagination, source filter, autocomplete
    <h1>month # week # day</h1>
    <v-timeline align="start">
        <v-timeline-item
            v-for="(day, index) in storyStack"
            :key="`timeline-item-${index}`"
            size="large">
            <v-alert
                v-if="index == 0"
                border="start"
                density="default"
                type="warning"
                class="mb-6"
            >
                LATEST NEWS
            </v-alert>
            <template v-slot:icon>
                🚀
            </template>
            <template v-slot:opposite>
                <h3 class="text-h3" v-html="$hivebeta.formatDate(day[index].publishedAt)"></h3>
            </template>
            <ArticleTimelineItemCard
                v-for="(article, i) in storyStack[index]"
                :key="`timeline-article-${i}`"
                :article="article"
            />
            <h2 v-if="!day.length" class="text-uppercase">no articles</h2>
        </v-timeline-item>
    </v-timeline>
</template>

<style scoped >
    .v-timeline >>> .v-timeline-divider__inner-dot{
        background-color: transparent;
    }
</style>
