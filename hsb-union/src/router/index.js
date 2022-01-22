import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Glossary from "/src/components/Glossary.vue";
import Rules from "/src/components/Rules.vue";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
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
    {
        path: '/rules',
        name: 'Rules',
        component: Rules,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router