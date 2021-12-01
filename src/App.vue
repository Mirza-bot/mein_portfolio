<template>
  <w-app>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="cover" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </main>
  </w-app>
</template>

<style lang="scss" scoped>
@import "./assets/styles";



// Cover Transition
.cover-enter-from {
  opacity: 0.1;
  transform: scaleY(0.9) translateY(-10vh);
}

.cover-enter-active {
  transition: all 0.1s ease-in;
}

.cover-leave-to {
  transform: translateY(-110vh);
  opacity: 0.3;
}

.cover-leave-active {
  transition: all 0.2s ease-in;
}
</style>

