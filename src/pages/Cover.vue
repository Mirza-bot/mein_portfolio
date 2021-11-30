<template>
  <section>
    <div class="image__container">
      <div class="front__font">
        <h1>Malkoc Mirza</h1>
        <h2>Web-Development</h2>
      </div>
      <div class="front__button">
        <w-button
          class="ma1"
          bg-color="warning"
          color="white"
          shadow
          xl
          @click="$router.push('main')"
          >Projekte
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url("../images/james-harrison-vpOeXr5wmR4-unsplash.jpg");
  background-position: center;
  filter: saturate(1.8);
  background-size: cover;
  background-color: rgba($color: #000000, $alpha: 1.6);
  z-index: 100;

  @media only screen and (max-width: 1100px) {
    font-size: 2rem;
  }

  div.front__font {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      font-family: "Bebas Neue", cursive;
    }
    h2 {
      color: white;
      font-family: "Roboto Condensed", sans-serif;
      font-size: 3rem;
      -webkit-text-stroke: 2px black;
      @media only screen and (max-width: 1100px) {
        font-size: 2rem;
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
