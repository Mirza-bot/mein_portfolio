<template>
  <div class="page__container">
    <div>
      <h1 class="headline">Erfahrung in</h1>
      <w-divider color="white" class="mb8" />
    </div>
    <w-flex wrap class="text-center">
      <div class="md3 mxa my5 px6" v-for="badge in badges" :key="badge.name">
        <ul>
          <li>
            <img
              class="skill__image bdrs2"
              :src="`${badge.img}`"
              alt="Vue.js Icon"
            />
          </li>
          <li class="my2">
            <span>{{ badge.name }}</span>
          </li>
        </ul>
      </div>
    </w-flex>
    <div class="mt10">
      <h1 class="headline">Zur Person</h1>
      <w-divider color="white" class="mb8" />
    </div>
    <div class="person__details">
      <img class="person__image bdrsm" src="../images/Mirza.webp" alt="Portfolio Picture">
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const badges = [
      { name: "JavaScript", img: "./src/images/JavaScript.png" },
      { name: "Vue.js", img: "./src/images/Vuejs_icon.png" },
      { name: "Sass", img: "./src/images/Sass.png" },
      { name: "Bootstrap", img: "./src/images/Bootstrap.png" },
      { name: "WaveUI(Vue.js)", img: "./src/images/wave-ui.webp" },
      { name: "Onpage SEO", img: "./src/images/SEO.jpg" },
      { name: "Git", img: "./src/images/Git-Icon.png" },
      { name: "Responsive Designs", img: "./src/images/Responsive.png" },
    ];
    return {
      badges,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles";
div.page__container {
  margin: 15vh 10vw 5vh 10vw;
  font-family: "Roboto Condensed", sans-serif;
  h1.headline {
    font-size: 3rem;
    font-weight: 900;
    text-shadow: -3px 3px 3px black;
    @media only screen and (min-width: 2100px) {
      font-size: 5rem;
    }
  }
}

img.person__image {
  width: 15vw;
  @media only screen and (max-width: 1100px) {
      width: 30vw;
    }
}

img.skill__image {
  width: 5vw;
  height: 5vw;
  min-height: 80px;
  min-width: 80px;
  max-height: 200px;
  max-width: 200px;
}

span {
  font-size: 1.5rem;
  @media only screen and (max-width: 1100px) {
    font-size: 1rem;
    display: inline-block;
    max-width: 80px;
  }
  @media only screen and (min-width: 2100px) {
    font-size: 3rem;
  }
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
