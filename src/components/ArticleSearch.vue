
<script setup lang='ts'>
import { defineAsyncComponent, onBeforeMount, ref } from 'vue';

import { useArticlesStore } from '@/stores/articles';
import { useSourcesStore } from '@/stores/sources';

const ArticleTimelineItemCard = defineAsyncComponent(() => import('@/components/ArticleTimelineItemCard.vue'));
const SearchWidget = defineAsyncComponent(() => import('@/components/SearchWidget.vue'));

const storeArticles = useArticlesStore();
const storeSources = useSourcesStore();

//commit to store
const articleList = ref([]);
const sourceList = ref([]);
const searchText = ref('');
const sources = ref();
const page = ref(1);
const pageSize = ref(5);

const handleSearch = (value: string = '') => {
    console.log(value);
    searchText.value = value;
};

const handleNext = (pageNumber: number = 100) => {
    console.log(pageNumber);
    console.log(articleList.value.slice((pageNumber - 1) * pageSize.value, pageNumber * pageSize.value));
    articleList.value = storeArticles.articles.slice((pageNumber - 1) * pageSize.value, pageNumber * pageSize.value);
};

const filterBySource = async (source: string = '') => {
    articleList.value = storeArticles.articles.filter((item) => item.newsSite = source);
};

onBeforeMount(async ()=> {
    articleList.value = await storeArticles.fetchArticles('2022-09-01T08:41:11.000Z');
    articleList.value = storeArticles.articles.slice((page.value - 1) * pageSize.value, page.value * pageSize.value);
    // Return unique array with sources only available from articleList
    sourceList.value =  [...new Set( articleList.value.map((item) => item.newsSite))];
});

</script>
<template>
    <v-row class="d-flex align-center">
        <v-col cols="12" xs="12" lg="4">
            <h2 class="text-h4">Headlines</h2>
        </v-col>
        <v-col cols="12" xs="12" lg="4" class="d-flex align-center">
            <v-checkbox
                v-model="sources"
                color="orange"
                label="sources"
            ></v-checkbox>
            <SearchWidget @update:model-value="handleSearch"/>
        </v-col>
        <v-col cols="12" xs="12" lg="4" class="d-flex justify-end">
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn
                        v-bind="props"
                    >
                        Filter
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                        v-for="(source, index) in sourceList"
                        :key="index"
                        :value="source.id"
                        @click="filterBySource(source)"
                    >
                        <v-list-item-title>{{ source }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-col>
    </v-row>
    <v-row>
        <v-col v-if="articleList">
            <ArticleTimelineItemCard
                v-for="(article, index) in articleList"
                :key="`article-${index}`"
                :article="article"
            />
        </v-col>
    </v-row>
    <v-footer app>
        <v-card
            elevation="0"
            rounded="0"
            width="100%"
            class="text-center"
        >
            <v-pagination
                v-model="page"
                :length="10"
                @update:model-value="handleNext"
            ></v-pagination>
        </v-card>
    </v-footer>
</template>