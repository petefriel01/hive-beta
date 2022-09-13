import myAxios from '@/composables/useAxios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

// ref()s > state properties
// computed()s > getters
// function()s > actions

// /https://api.spaceflightnewsapi.net/v3/articles?_sort=publishedAt&summary_contains=SpaceX

export const useArticlesStore = defineStore('articles', () => {

    const articles = ref([]);

    const fetchArticles = async(publishedAt: string, limit: number = 100) => {
        const headlines = await myAxios
            .get(`${import.meta.env.VITE_SPACENEWS_API_URL}/articles?_limit=${limit}&publishedAt_gt=2022-09-01T00:00:00.001Z`)
            .then((response) => {
                console.log(response.data);
                articles.value = response.data;
                return response.data || null;
            })
            .catch((error) => {
                console.log(error.message);
            });
        return headlines;
    };

    return {
        articles,
        fetchArticles
    };
});
