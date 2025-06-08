import { createRouter, createWebHistory } from "vue-router";

import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Detail from "../pages/Detail.vue";


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/home",
            name: "home",
            component: Home
        },
        {
            path: "/news/:id/:age/:name",
            name: "news",
            component: News,
            children: [
                {
                    path: "detail",
                    name: "detail",
                    component: Detail
                }

            ]
        },
        {
            path: "/About",
            name: "about",
            component: About
        }
    ]
})