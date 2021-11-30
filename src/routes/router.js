import { createRouter, createWebHistory } from "vue-router";

//Pages
import Cover from "../pages/Cover.vue";
import MainPage from "../pages/MainPage.vue";
import AboutMe from "../pages/AboutMe.vue";
import Resumee from "../pages/Resumee.vue";
import ContactMe from "../pages/ContactMe.vue";
import NotFound from "../pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/cover" },
    { path: "/cover", component: Cover },
    { path: "/main", component: MainPage },
    { path: "/contact", component: ContactMe },
    { path: "/aboutme", component: AboutMe },
    { path: "/resumee", component: Resumee },

    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
