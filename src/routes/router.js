import { createRouter, createWebHistory } from "vue-router";

//Pages
import Welcome from "../pages/Welcome.vue";
import MainPage from "../pages/MainPage.vue";
import Projects from "../pages/Projects.vue";
import AboutMe from "../pages/AboutMe.vue";
import ContactMe from "../pages/ContactMe.vue";
import NotFound from "../pages/NotFound.vue";
import Admin from "../pages/Admin.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/welcome" },
    {
      path: "/main",
      component: MainPage,
      children: [
        { path: "/welcome", component: Welcome },
        { path: "/contact", component: ContactMe  },
        { path: "/aboutme", component: AboutMe  },
        { path: "/projects", component: Projects},
      ],
    },

    { path: "/:notFound(.*)", component: NotFound },
    { path: "/admin_login", component: Admin},
  ],
});

export default router;