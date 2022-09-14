import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const DashBoard = defineAsyncComponent(() => import('@/views/DashBoard.vue'));
const ArticleTimeline = defineAsyncComponent(() => import('@/views/ArticleTimeline.vue'));
const ArticleSearch = defineAsyncComponent(() => import('@/views/ArticleSearch.vue'));

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'DashBoard',
            component: DashBoard,
        },
        {
            path: '/timeline',
            name: 'ArticleTimeline',
            component: ArticleTimeline,
        },
        {
            path: '/search',
            name: 'ArticleSearch',
            component: ArticleSearch,
        }
    ],
});

export default router;
