<template>
  <div>
    <projects></projects>
    <about-me></about-me>
    <contact-me></contact-me>
  </div>
</template>

<script>
import Projects from "./Projects.vue";
import AboutMe from "./AboutMe.vue";
import ContactMe from "./ContactMe.vue";
export default {
  components: {Projects, AboutMe, ContactMe },
};
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
