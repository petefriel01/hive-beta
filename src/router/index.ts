import { createRouter, createWebHistory } from 'vue-router';
import DashBoard from '../views/DashBoard.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dash',
            component: DashBoard,
        }
    ],
});

export default router;
