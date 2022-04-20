<template>
  <section>
    <div class="image__container">
      <w-icon class="main__icon"> mdi mdi-monitor-cellphone </w-icon>
      <div class="front__font">
        <h1 class="headline">{{ $t("welcome.headline") }}</h1>
        <h2 class="title2 animate_color_gradient">
          {{ $t("welcome.headline2") }}
        </h2>
        <h3 class="title3 mt3">{{ $t("welcome.headline3") }}</h3>
      </div>
      <div class="guidance__arrow" @click="redirect('main', '#projects')">
        <w-icon>mdi mdi-arrow-down-bold-circle-outline</w-icon>
      </div>
    </div>
  </section>
</template>

<script>
import router from "../routes/router";
export default {
  setup() {
    const redirect = (routeName, position) => {
      router.push({ name: routeName, hash: position });
    };

    return {
      redirect,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles";

div.image__container {
  height: 100vh;
  width: 100vw;
  display: inline-block;
  z-index: 100;
  font-family: "Roboto Condensed";
  background-position: center;
  filter: saturate(1.8);
  background-size: cover;

  @media only screen and (max-width: 1100px) {
    font-size: 1rem;
  }
  .main__icon {
    top: 25vh;
    left: 35vw;
    font-size: 5rem;
    animation: fadeRight 1s ease-in-out forwards;
    @media only screen and (min-width: 2100px) {
      top: 13vh;
      left: 21vw;
      font-size: 15rem;
    }
    @media only screen and (max-width: 1100px) {
      display: none;
    }
  }

  div.front__font {
    margin-top: 25vh;
    margin-left: 32vw;
    caret-color: transparent;
    overflow: hidden;
    @media only screen and (max-width: 1100px) {
      margin-top: 25vh;
      margin-left: 5vw;
    }
    @media only screen and (min-width: 2100px) {
      margin-left: 21vw;
    }

    h1 {
      animation: fadeDown 1s ease-in-out forwards;
      font-size: 2rem;
      @media only screen and (min-width: 2100px) {
        font-size: 4rem;
      }
      @media only screen and (max-width: 1100px) {
        font-size: 2rem;
      }
    }
    h2 {
      font-size: 4rem;
      animation: fadeLeft colorswitch 1s ease-in-out forwards;
      @media only screen and (min-width: 2100px) {
        font-size: 6rem;
      }
      @media only screen and (max-width: 1100px) {
        font-size: 3.5rem;
      }
    }

    h3 {
      font-size: 1.5rem;
      animation: fadeUp 1s ease-in-out forwards;
      max-width: 600px;
      @media only screen and (min-width: 2100px) {
        font-size: 4rem;
        max-width: 1600px;
      }
      @media only screen and (max-width: 1100px) {
        font-size: 1.2rem;
        max-width: 340px;
      }
    }
  }

  @keyframes fadeDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
  @keyframes fadeRight {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
  }

  @keyframes fadeLeft {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
  }
}

div.guidance__arrow {
  position: absolute;
  top: 80vh;
  left: 49vw;
  font-size: 3rem;
  animation: levitate 1.5s ease-in-out infinite;
  :hover {
    cursor: pointer;
    animation: pulse 1.5s infinite;
  }
  @media only screen and (max-width: 1100px) {
    left: 43vw;
  }
  @media only screen and (min-width: 2100px) {
    font-size: 6rem;
    left: 48vw;
  }
}

@keyframes levitate {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(168, 0, 190, 0.7);
  }

  60% {
    box-shadow: 0 0 0 10px rgba(255, 123, 0, 0.781);
    transform: scale(0.95);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(192, 0, 251, 0.7);
  }
}
</style>
