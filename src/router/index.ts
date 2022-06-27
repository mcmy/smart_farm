import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/components/Index.vue')
    },
    {
        path: '/data/show/default',
        name: 'dataShow',
        component: () => import('@/views/show/DefaultData.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
