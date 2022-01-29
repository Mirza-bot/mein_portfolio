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

