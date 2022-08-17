import { createWebHistory, createRouter } from "vue-router";

import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Dashboard


        },
        {
            path: '/about',
            component: About


        },
    ]
})

export default router