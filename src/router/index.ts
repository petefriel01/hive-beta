import { createRouter, createWebHistory } from 'vue-router';
import ArticleSearch from '../views/ArticleSearch.vue';
import DashBoard from '../views/DashBoard.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'DashBoard',
            component: DashBoard,
        },
        {
            path: '/search',
            name: 'ArticleSearch',
            component: ArticleSearch,
        }
    ],
});

export default router;
