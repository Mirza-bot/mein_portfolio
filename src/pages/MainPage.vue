<template>
  <div>
    <the-header></the-header>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from "../components/layout/TheHeader.vue"
export default {
    components: { TheHeader }
}

</script>

<style lang="scss" scoped>
//route Transitions

.route-enter-from {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.3s ease-in-out;
}

.route-leave-to {
  opacity: 0;
}

.route-leave-active {
  transition: all 0.2s ease-in-out;
}
</style>
