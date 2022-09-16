
<script setup lang='ts'>
import { defineAsyncComponent, onBeforeMount, ref } from 'vue';

import { useArticlesStore } from '@/stores/articles';

const ArticleCard = defineAsyncComponent(() => import('@/components/ArticleCard.vue'));
const SearchWidget = defineAsyncComponent(() => import('@/components/SearchWidget.vue'));
const AppSpinner = defineAsyncComponent(() => import('@/components/AppSpinner.vue'));

const storeArticles = useArticlesStore();

const articleList = ref([]);
const sourceList = ref([]);
const searchText = ref('');
const isSource = ref(false);
const page = ref(1);
const pageSize = ref(5);
const pageTotal = ref(0);
const isLoading = ref(true);

const handleSearch = (value: string = '') => {
    searchText.value = value;
    const searchType = (!isSource.value) ? 'title' : 'newsSite';
    const articles = storeArticles.articles.filter((item) => {
        return item[searchType].toLowerCase().indexOf(searchText.value) > -1;
    });
    paginate(articles);
};

const handleNext = (pageNumber: number = 100) => {
    articleList.value = storeArticles.articles.slice((pageNumber - 1) * pageSize.value, pageNumber * pageSize.value);
};

const resetFilter = () => {
    console.log('reset filter');
    paginate(storeArticles.articles);
};

const filterBySource = async (source: string = '') => {
    const articles =  storeArticles.articles.filter(item => item.newsSite === source);
    paginate(articles);
};

const paginate = (articles: any[]) => {
    articleList.value =  articles.slice((page.value - 1) * pageSize.value, page.value * pageSize.value);
    pageTotal.value = Math.round(articles.length / pageSize.value);
    sourceList.value =  [...new Set( articleList.value.map((item) => item.newsSite))]; // Return array with sources only available from articleList
    console.log(sourceList.value );
    isLoading.value = false;
};

onBeforeMount(async ()=> {
    const articles = await storeArticles.fetchArticles();
    paginate(storeArticles.articles);
});

</script>
<template>
    <v-row class="d-flex align-center">
        <v-col cols="12" xs="12" lg="2" class="d-none d-lg-flex">
            <h2 class="text-h4">Headlines</h2>
        </v-col>
        <v-col cols="12" xs="12" lg="8" class="pt-8">
            <v-row>
                <v-col cols="12" xs="12" lg="2">
                    <v-checkbox
                        v-model="isSource"
                        label="News Source"
                        color="orange"
                        class="float-right"
                    ></v-checkbox>
                </v-col>
                <v-col cols="12" xs="12" lg="8">
                    <SearchWidget @update:model-value="handleSearch" :titles="(isSource) ? sourceList : []"/>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" xs="12" lg="2" class="d-flex justify-end">
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn
                        :disabled="isSource"
                        v-bind="props"
                    >
                        Filter
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                        v-for="(source, index) in sourceList"
                        :key="index"
                        :value="source"
                        @click="filterBySource(source)"
                    >
                        <v-list-item-title>{{ source }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn
                variant="text"
                :disabled="isSource"
                @click="resetFilter()"
            >
                Clear
            </v-btn>
        </v-col>
    </v-row>
    <v-row>
        <v-col v-if="articleList">
            <ArticleCard
                v-for="(article, index) in articleList"
                :key="`article-${index}`"
                :article="article"
                :is-timeline="false"
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
                :length="pageTotal"
                @update:model-value="handleNext"
            ></v-pagination>
        </v-card>
    </v-footer>
    <AppSpinner v-if="isLoading"/>
</template>
<style>
    .dev{
        border: solid 1px red;
    }
</style>