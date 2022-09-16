<script setup lang='ts'>
import { useHelpers } from '@/composables/useHelpers.js';
import { useArticlesStore } from '@/stores/articles';
import { defineAsyncComponent, onBeforeMount, ref } from 'vue';
const ArticleCard = defineAsyncComponent(() => import('@/components/ArticleCard.vue'));
const AppSpinner = defineAsyncComponent(() => import('@/components/AppSpinner.vue'));

const store = useArticlesStore();
const articleList = ref([]);
const storyStack = ref([]);
const isLoading = ref(true);

const {
    getArticlesPerDay,
} = useHelpers();

onBeforeMount(async() => {
    articleList.value = await store.fetchArticles();
    storyStack.value = getArticlesPerDay(articleList.value).reverse();
    isLoading.value = false;
});

</script>
<template>
    <v-timeline align="start" class="mt-8">
        <v-timeline-item
            v-for="(day, index) in storyStack"
            :key="`timeline-item-${index}`"
            class="mb-8"
        >
            <v-alert
                v-if="index == 0"
                border="start"
                density="default"
                type="warning"
                class="mb-6 d-none d-md-flex"
            >
                <span class="flash-text">BREAKING NEWS</span>
            </v-alert>
            <template v-slot:icon>
                🚀
            </template>
            <template v-slot:opposite>
                <h3 class="text-xs-h6 text-md-h5 text-lg-h3 text-wrap font-weight-bold" v-html="$hivebeta.formatDate(day[index]?.publishedAt)"></h3>
            </template>
            <ArticleCard
                v-for="(article, i) in storyStack[index]"
                :key="`timeline-article-${i}`"
                :article="article"
                :show-date="false"
            />
            <h3 v-if="!day.length" class="text-uppercase mb-16">no articles</h3>
        </v-timeline-item>
    </v-timeline>
    <AppSpinner v-if="isLoading"/>
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
