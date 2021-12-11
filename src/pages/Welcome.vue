<template>
  <section>
    <div class="image__container">
      <div class="front__font">
        <h1 class="headline"> {{ $t("welcome.headline") }} </h1>
        <h2 class="title2"> {{ $t("welcome.headline2") }} </h2>
      </div>
      <div class="front__button">
        <w-button
          class="ma1"
          color="black"
          bg-color="orange-light2"
          shadow
          @click="$router.push('main/projects')"
          ><span> {{ $t("welcome.button") }}</span>
        </w-button>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@import "../assets/styles";
div.image__container {
  height: 100vh;
  width: 100%;
  display: inline-block;
  position: absolute;
  margin-top: 10vh;
  color: $mainColor;
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
  filter: saturate(1.8);
  background-size: cover;
  background-color: rgba($color: #000000, $alpha: 1.6);

  @media only screen and (max-width: 1100px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 2100px) {
    margin-top: 8vh;
  }

  div.front__font {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    caret-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    user-select: none;
    -ms-user-select: none;
    @media only screen and (max-width: 1100px) {
      left: 50%;
    }

    h1 {
      color: white;
      animation: fadeDown 1.5s ease-in-out forwards;
      font-size: 3rem;
      @media only screen and (min-width: 1900px) {
        font-size: 6rem;
      }
    }
    h2 {
      font-size: 2rem;
      animation: fadeUp 1.5s ease-in-out forwards;
      @media only screen and (min-width: 1900px) {
        font-size: 4rem;
      }
    }
  }

  div.front__button {
    position: absolute;
    font-size: 0rem;
    top: 70%;
    left: 50%;
    -webkit-text-stroke: 0.3px white;
    font-family: Bebas Neue, sans-serif;
    transform: translate(-50%, -50%) scale(2);
    @media only screen and (min-width: 2100px) {
      transform: scale(4);
    }
  }

  @keyframes fadeDown {
    from {
      opacity: 0;
      transform: translateY(-100px);
    }
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
  }
}
</style>
