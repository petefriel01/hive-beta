<template>
    🌌👩‍🚀🌟🌑 timeline / search / analytics
    pagination, source filter, autocomplete
    <h1>THIS WEEK</h1>
    <v-timeline>
        <v-timeline-item
            v-for="(day, index) in storyStack"
            :key="`timelineList-article-${index}`"
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
                <h3 class="text-h3">TODAY {{day.length}}</h3>
            </template>
            <ArticleTimelineItemCard
                v-for="(article, i) in storyStack[index]"
                :key="`timelineList-article-${i}`"
                :article="article"
            />
            <h2 v-if="!day.length" class="text-uppercase">no articles</h2>
        </v-timeline-item>
    </v-timeline>
</template>

<script setup lang='ts'>
import { useHelpers } from '@/composables/useHelpers.js';
import { useArticlesStore } from '@/stores/articles';
import { defineAsyncComponent, onBeforeMount, reactive, ref } from 'vue';
// const Header = defineAsyncComponent(() => import('@/components/AppHeader.vue'));
const ArticleTimelineItemCard = defineAsyncComponent(() => import('@/components/ArticleTimelineItemCard.vue'));

const ArticleTimelineItem = defineAsyncComponent(() => import('@/components/ArticleTimelineItem.vue'));

const AppFragment = defineAsyncComponent(() => import('@/components/AppFragment.vue'));

const store = useArticlesStore();
const articleList = ref();
const addTimelineItem = ref(false);
const timelineDay = ref();

const storyStack = reactive([]);

const {
    getDayFromDatetime,
    getFirstDayOfWeek,
} = useHelpers();

// Get previous day to monday
const timelineList = ref(['Monday','Tuesday','Wednesday','Thursday','Friday' ]);

const handleTimelineItem = (date) => {

    console.log(getDayFromDatetime(date)+'-'+timelineDay.value);

    if(timelineDay.value !== getDayFromDatetime(date)){
        timelineDay.value = getDayFromDatetime(date);
        return true;
    }
    timelineDay.value = getDayFromDatetime(date);
    return  false;
};

// watch(() => addTimelineItem.value, (prev, curr) => {
//     console.log(prev, curr);
// });

// const handleIntersect = onIntersect(entries, observer, handleIntersect) {

// }

onBeforeMount(async() => {
    articleList.value = await store.fetchArticles('2022-09-01T08:41:11.000Z');

    //group the articles into days
    //push as arrays on to stack array

    console.log(articleList.value.length);

    // articleList.value.forEach((item) => {
    //     console.log(item);
    // });

    for(let i = 13; i >= 1; i--){
        //countdown from today to 1 push array on to stack
        let hold = articleList.value.filter((item) => {
            return getDayFromDatetime(item.publishedAt) == i;
        });
        storyStack.push(hold);
    }

    console.log(storyStack);

});

</script>
<style scoped >
    .v-timeline >>> .v-timeline-divider__inner-dot{
        background-color: transparent;
    }
</style>
