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

<style lang="scss" scoped>
//route Transitions

.route-enter-from {
  transform: translateX(90vw);
  opacity: 0.3;
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-to {
  transform: translateX(-90vw);
  opacity: 0.3;
}

.route-leave-active {
  transition: all 0.3s ease-out;
}
</style>
