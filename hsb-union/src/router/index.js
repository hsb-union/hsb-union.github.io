import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Glossary from "../components/Glossary.vue";

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/glossary',
        name: 'Glossary',
        component: Glossary,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router