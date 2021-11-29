import { createRouter, createWebHistory } from "vue-router";

//Pages
import Cover from '../pages/Cover.vue'
import MainPage from '../pages/MainPage.vue'
import AboutMe from '../pages/AboutMe.vue'
import Resumee from '../pages/Resumee.vue'
import Projects from '../pages/Projects.vue'
import NotFound from '../pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/cover" },
    { path: "/main", component: MainPage },
    { path: "/cover", component: Cover },
    { path: "/projects", component: Projects },
    { path: "/aboutme", component: AboutMe },
    { path: "/resumee", component: Resumee },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
