import myAxios from '@/composables/useAxios';
import { defineStore } from 'pinia';

// ref()s > state properties
// computed()s > getters
// function()s > actions

export const useArticlesStore = defineStore('articles', () => {

    // do a published at para and then load on scroll down
    const fetchArticles = async(publishedAt: string) => {
        const headlines = await myAxios
            .get(`${import.meta.env.VITE_SPACENEWS_API_URL}/articles?_limit=100&publishedAt_gt=2022-09-01T00:00:00.001Z`)
            .then((response) => {
                console.log(response.data);
                return response.data || null;
            })
            .catch((error) => {
                console.log(error.message);
            });
        return headlines;
    };

    return { fetchArticles };
});
