<template>
  <section>
    <div class="image__container">
      <div class="front__font">
        <h1 class="headline">{{ $t("welcome.headline") }}</h1>
        <h2 class="title2">{{ $t("welcome.headline2") }}</h2>
        <h3 class="title2">{{ $t("welcome.headline3") }}</h3>
      </div>
      <div class="guidance__arrow" @click="redirect('main', '#projects')">
        <w-icon color="white">mdi mdi-arrow-down-bold-circle-outline</w-icon>
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
  height: 110vh;
  width: 100vw;
  display: inline-block;
  color: $mainColor;
  z-index: 200;
  position: static;
  text-align: center;
  font-family: "Roboto Condensed";
  background-image: linear-gradient(
      90deg,
      rgb(0, 0, 0) 3%,
      rgba(0, 0, 0, 0.623) 50%,
      rgb(0, 0, 0) 97%
    ),
    url("../images/cover.webp");
  background-position: center;
  background-attachment: fixed;
  filter: saturate(1.8);
  background-size: cover;
  background-color: rgba($color: #000000, $alpha: 1.6);

  @media only screen and (max-width: 1100px) {
    font-size: 1rem;
  }

  div.front__font {
    position: sticky;
    top: 30%;
    margin-left: 10%;
    caret-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    user-select: none;
    -ms-user-select: none;
    text-align: start;
    overflow: hidden;

    h1 {
      color: white;
      animation: fadeDown 1s ease-in-out forwards;
      font-size: 2rem;
      @media only screen and (min-width: 1900px) {
        font-size: 4rem;
      }
      @media only screen and (max-width: 1100px) {
        font-size: 1.8rem;
      }
    }
    h2 {
      font-size: 3rem;
      animation: fadeLeft 0.5s ease-in-out forwards;
      @media only screen and (min-width: 1900px) {
        font-size: 6rem;
      }
      @media only screen and (max-width: 1100px) {
        font-size: 2.5rem;
      }
    }

    h3 {
      color: white;
      font-size: 2rem;
      animation: fadeUp 0.8s ease-in-out forwards;
      @media only screen and (min-width: 1900px) {
        font-size: 4rem;
      }
      @media only screen and (max-width: 1100px) {
        font-size: 1.5rem;
      }
    }
  }

  @keyframes fadeDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
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
    color: #48a8f5;
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
</style>
