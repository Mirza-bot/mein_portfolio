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

<style lang="scss" scoped>

// Cover Transition
.cover-enter-from {
  opacity: 0.1;
}

.cover-enter-active {
  transition: all 0.6s ease-in;
}

.cover-leave-to {
  transform: translateY(200vh);
  opacity: 0.1;
}

.cover-leave-active {
  transition: all 0.5s ease-in;
}
</style>
