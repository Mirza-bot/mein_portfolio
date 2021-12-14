import { createRouter, createWebHashHistory } from "vue-router";

//Pages
import MainPage from "../pages/MainPage.vue";
import Welcome from "../pages/Welcome.vue"
import Projects from "../pages/Projects.vue";
import ContactMe from "../pages/ContactMe.vue";
import AboutMe from "../pages/AboutMe.vue"
import NotFound from "../pages/NotFound.vue"

// import Welcome from "../pages/Welcome.vue";
import Admin from "../pages/Admin.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/main" },
    { path: "/welcome", component: Welcome },
    {
      path: "/main",
      name: "main",
      component: MainPage, Projects, ContactMe, AboutMe
    },
    { path: "/:notFound(.*)", component: NotFound },
    { path: "/admin_login", component: Admin },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition){
      return savedPosition
    } else {
      if (to.hash) {
        const element = document.getElementById(to.hash)
        if(element && element.scrollIntoView) {
          window.scrollTo({top: element.offsetTop - 120, behavior: "smooth"})
          return
        }
        return
      }
      return
    }
  },
});

export default router;



