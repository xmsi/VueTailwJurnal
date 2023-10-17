import { createRouter, createWebHistory } from "vue-router";
import TableView from "../views/TableView.vue"
import BiblView from "../views/BiblView.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: TableView
        },
        {
            path: '/bibl',
            name: 'bibl',
            component: BiblView
        }
    ]
})


export default router;