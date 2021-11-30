<template>
  <w-app>
    <main>
      <transition>
        <router-view></router-view>
      </transition>
    </main>
  </w-app>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: { TheHeader },
  setup() {
    return {};
  },
};
</script>
