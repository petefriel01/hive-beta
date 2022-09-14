import myAxios from '@/composables/useAxios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

// ref()s > state properties
// computed()s > getters
// function()s > actions

// /https://api.spaceflightnewsapi.net/v3/articles?_sort=publishedAt&summary_contains=SpaceX

export const useArticlesStore = defineStore('articles', () => {

    const articles = ref([]);
    const articleCount = ref(0);

    const fetchArticles = async(publishedAt: string, limit: number = 10000) => {
        const headlines = await myAxios
            .get(`${import.meta.env.VITE_SPACENEWS_API_URL}/articles?_limit=${limit}&publishedAt_gt=2022-09-11T00:00:00.001Z&publishedAt_lt=2022-09-14T23:59:59.999Z`)
            .then((response) => {
                articles.value = response.data;
                articleCount.value = response.data.length;
                console.log(response.data);
                return response.data || null;
            })
            .catch((error) => {
                console.log(error.message);
            });
        return headlines;
    };

    return {
        articles,
        articleCount,
        fetchArticles
    };
});
