<template>
  <div class="page__container" id="#aboutme">
    <div>
      <h1 class="headline">Zur Person</h1>
      <w-divider color="white" class="mb3" />
    </div>
    <w-flex wrap class="text-center mt10">
      <div class="person__container lg3 bdrs4 bd3 sh6 mxa">
        <img
          class="person__image bdrsm ma5 bd6 sh5"
          src="../images/Mirza.webp"
          alt="Portfolio Picture"
        />
        <ul>
          <li class="ma4 headline text-bold">Malkoc Mirza</li>
          <li class="ma4 title2 text-bold">Frontend-Webentwickler</li>
        </ul>
      </div>
      <div class="lg2 mxa text-left">
        <ul class="ml3">
          <li class="title2 my2">Alter: 26</li>
          <li class="title2 my2">Wohnort: Wien</li>
        </ul>
        <w-divider color="blue-light1" class="mx2" />
        <ul class="ml3">
          <li class="headline text-bold my2">Fähigkeiten:</li>
          <li class="title2 my2">Analytisches Denken</li>
          <li class="title2 my2">Hohe Lernbereitschaft</li>
          <li class="title2 my2">Teamplayer</li>
          <li class="title2 my2">Strukturiertes Arbeiten</li>
        </ul>
        <w-divider color="blue-light1" class="mx2" />
        <ul class="ml3">
          <li class="headline text-bold my2">Interessen:</li>
          <li class="title2 my2">Programmieren</li>
          <li class="title2 my2">Video- u. Bildbearbeitung</li>
          <li class="title2 my2">Lesen</li>
          <li class="title2 my2">Hard- und Software</li>
        </ul>
        <w-divider color="blue-light1" class="mx2" />
      </div>
      <div class="lg7">
        <ul>
          <li class="headline text-bold">Mirza Malkoc</li>
          <li class="title2">Alter: 26</li>
        </ul>
      </div>
    </w-flex>
    <div class="mt10">
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
    <w-divider color="white" class="mb3" />
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
      { name: "WaveUI (Vue.js)", img: "./src/images/wave-ui.webp" },
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
  margin: 5vh 10vw 5vh 10vw;
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

.text-center {
  -webkit-perspective: 500px;
  -moz-perspective: 500px;
  -o-perspective: 500px;
  perspective: 500px;
}
div.person__container {
  background: $mainGradient;
  color: white;
  -webkit-text-stroke: 1px black;
}

img.person__image {
  width: 15vw;
  @media only screen and (max-width: 1100px) {
    width: 30vw;
  }
}
</style>
