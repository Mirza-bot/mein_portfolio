<template>
  <w-app>
    <main>
      <welcome></welcome>
      <the-header></the-header>
      <router-view v-slot="{ Component }">
        <transition name="cover" mode="in-out">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </main>
  </w-app>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import Welcome from "./pages/Welcome.vue"
export default {
  components: { TheHeader, Welcome },
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
