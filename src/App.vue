<template>
  <w-app>
    <main>
      <welcome></welcome>
      <sticky-navbar v-show="mobileScreen"></sticky-navbar>
      <the-header></the-header>
      <router-view></router-view>
    </main>
  </w-app>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import Welcome from "./pages/Welcome.vue";
import StickyNavbar from "./components/layout/StickyNavbar.vue";
import { computed } from '@vue/reactivity';
export default {
  components: { TheHeader, Welcome, StickyNavbar },
    setup() {


    const windowWidth = window.innerWidth

    const mobileScreen = computed(() => {
      if (windowWidth < 1100) {
        return false
      } else return true
    })

    return {
      mobileScreen,
    }
  }
};
</script>

<style lang="scss">

.stop-scrolling {
  height: 100%;
  overflow: hidden;
}

.animate_color_gradient {
  color: transparent;
  background-image: linear-gradient(to left, #2ecc71, #3498db, #9b59b6, #f38c13);
  background-clip: text;
  -webkit-background-clip: text;
  animation:  colorswitch 7s linear infinite;
  -webkit-background-size: 500%;
  background-size: 500%;
}

@keyframes colorswitch {
  0% {
    background-position: 0% 100%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
  
}

</style>
