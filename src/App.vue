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
// Cover Transition
.cover-enter-from {
  opacity: 0.1;
}

.cover-enter-active {
  transition: all 0.1s ease-in;
}

.cover-leave-to {
  transform: translateY(-200vh);
  opacity: 0.1;
}

.cover-leave-active {
  transition: all 0.2s ease-in;
}
</style>
