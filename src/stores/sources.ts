import myAxios from '@/composables/useAxios';
import { defineStore } from 'pinia';

// ref()s > state properties
// computed()s > getters
// function()s > actions

export const useSourcesStore = defineStore('sources', () => {

    // do a published at para and then load on scroll down
    const fetchSources = async() => {
        const headlines = await myAxios
            .get(`${import.meta.env.VITE_SPACENEWS_API_URL}/info`)
            .then((response) => {
                console.log(response.data.newsSites);
                return response.data.newsSites || null;
            })
            .catch((error) => {
                console.log(error.message);
            });
        return headlines;
    };

    return { fetchSources };
});
