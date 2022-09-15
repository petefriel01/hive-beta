<script setup lang='ts'>
import { useHelpers } from '@/composables/useHelpers.js';
import { useArticlesStore } from '@/stores/articles';
import { defineAsyncComponent, onBeforeMount, ref } from 'vue';
const ArticleCard = defineAsyncComponent(() => import('@/components/ArticleCard.vue'));

const store = useArticlesStore();
const articleList = ref([]);
const storyStack = ref([]);

const {
    getArticlesPerDay,
} = useHelpers();

onBeforeMount(async() => {
    articleList.value = await store.fetchArticles();
    storyStack.value = getArticlesPerDay(articleList.value).reverse();
});

</script>

<template>
    <v-timeline align="start" class="mt-8">
        <v-timeline-item
            v-for="(day, index) in storyStack"
            :key="`timeline-item-${index}`"
            size="large"
            class="mb-8"
        >
            <v-alert
                v-if="index == 0"
                border="start"
                density="default"
                type="warning"
                class="mb-6"
            >
                <span class="flash-text">BREAKING NEWS</span>
            </v-alert>
            <template v-slot:icon>
                🚀
            </template>
            <template v-slot:opposite>
                <h3 class="text-h3" v-html="$hivebeta.formatDate(day[index]?.publishedAt)"></h3>
            </template>
            <ArticleCard
                v-for="(article, i) in storyStack[index]"
                :key="`timeline-article-${i}`"
                :article="article"
                :show-date="false"
            />
            <h2 v-if="!day.length" class="text-uppercase mb-16">no articles</h2>
        </v-timeline-item>
    </v-timeline>
</template>

<style scoped type="scss">
    .v-timeline >>> .v-timeline-divider__inner-dot{
        background-color: transparent;
    }
    .flash-text{
        animation: blinker 1.5s linear infinite;
    }
    @keyframes blinker {
        50% {
            opacity: 0;
        }
    }
</style>
