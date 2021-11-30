<template>
  <w-app>
    <the-header></the-header>
    <main>
      <router-view></router-view>
    </main>
  </w-app>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: { TheHeader },
  setup() {

    return {
      
    };
  },

};
</script>

