<template>
  <section>
    <div class="image__container">
      <div class="front__font">
        <h1>Malkoc Mirza</h1>
        <h2>Entwickler-Portfolio</h2>
      </div>
      <div class="front__button">
        <w-button
          class="ma1"
          color="white"
          bg-color="warning-light1"
          shadow
          xl
          @click="$router.push('main/projects')"
          >Portfolio öffnen
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
  color: $mainColor;
  text-align: center;
  font-size: 4rem;
  -webkit-text-stroke: 1px black;
  font-family: "Bebas Neue", cursive;
  background-image: linear-gradient(rgba(0, 0, 0, 0.883), rgba(0, 0, 0, 0.602)),
    url("../images/james-harrison-vpOeXr5wmR4-unsplash.webp");
  background-position: center;
  filter: saturate(1.8);
  background-size: cover;
  background-color: rgba($color: #000000, $alpha: 1.6);

  @media only screen and (max-width: 1100px) {
    font-size: 2rem;
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
    h1 {
      font-family: "Bebas Neue", cursive;
      span {
        font-family: "Roboto Condensed", sans-serif;
        color: white;
        -webkit-text-stroke: 2px black;
        font-size: 4rem;
      }
    }
    h2 {
      color: white;
      font-family: "Roboto Condensed", sans-serif;
      font-size: 4rem;
      -webkit-text-stroke: 2px black;
      @media only screen and (max-width: 1100px) {
        font-size: 3rem;
      }
    }
  }

  div.front__button {
    position: absolute;
    font-size: 0rem;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.8);
    @media only screen and (max-width: 1100px) {
      transform: translate(-50%, -50%) scale(1.5);
    }
  }
}
</style>
