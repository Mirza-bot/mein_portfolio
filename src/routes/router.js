import { createRouter, createWebHistory } from "vue-router";

//Pages
import MainPage from "../pages/MainPage.vue";
import NotFound from "../pages/NotFound.vue";

// import Welcome from "../pages/Welcome.vue";
import Admin from "../pages/Admin.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/main" },
    {
      path: "/main",
      name: "main",
      component: MainPage,
    },
    { path: "/:notFound(.*)", component: NotFound },
    { path: "/admin_login", component: Admin },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.hash) {
        const element = document.getElementById(to.hash);
        if (element && element.scrollIntoView) {
          window.scrollTo({ top: element.offsetTop -120, behavior: "smooth" });
          return;
        }
        return;
      }
      return;
    }
  },
});

export default router;
