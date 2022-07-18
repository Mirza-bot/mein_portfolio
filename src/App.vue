<template>
  <Particles
    id="particles"
    :options="{
      fpsLimit: 144,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 620,
            size: 1.2,
            duration: 9,
            opacity: 0.5,
            speed: 3,
          },
          push: {
            particles_nb: 0.5,
          },
          repulse: {
            distance: 100,
            duration: 5,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: false,
          opacity: 0.7,
          width: 0.5,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'none',
          enable: true,
          outMode: 'bounce',
          random: true,
          speed: 0.5,
          straight: false,
          attract: {
            enable: false,
            rotateX: 100,
            rotateY: 100,
          },
        },
        number: {
          density: {
            enable: true,
            area: 10000,
          },
          value: 800,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: 0.4,
          random: true,
        },
      },
      detectRetina: true,
    }"
  />
  <w-app>
    <main>
      <welcome></welcome>
      <the-header></the-header>
      <router-view></router-view>
    </main>
  </w-app>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import Welcome from "./pages/Welcome.vue";
import StickyNavbar from "./components/layout/StickyNavbar.vue";
import { computed } from "@vue/reactivity";
export default {
  components: { TheHeader, Welcome, StickyNavbar },
  setup() {
    const windowWidth = window.innerWidth;

    const mobileScreen = computed(() => {
      if (windowWidth < 1100) {
        return false;
      } else return true;
    });

    return {
      mobileScreen,
    };
  },
};
</script>

<style lang="scss">
.stop-scrolling {
  height: 100%;
  overflow: hidden;
}

.animate_color_gradient {
  color: transparent;
  background-image: linear-gradient(
    to left,
    #2ecc71,
    #3498db,
    #9b59b6,
    #f38c13
  );
  background-clip: text;
  -webkit-background-clip: text;
  animation: colorswitch 7s linear infinite;
  -webkit-background-size: 500%;
  background-size: 500%;
}

@keyframes colorswitch {
  0% {
    background-position: 0% 100%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
}
</style>
