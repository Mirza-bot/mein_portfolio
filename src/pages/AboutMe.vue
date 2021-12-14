<template>
  <div class="page__container" id="#aboutme">
    <div>
      <h1 class="headline">{{ $t("aboutMe.headline") }}</h1>
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
          <li class="ma4 text-bold">Malkoc Mirza</li>
          <li class="ma4 text-bold">{{ $t("aboutMe.jobTitle") }}</li>
        </ul>
      </div>
      <div class="about_me_skills lg2 mxa text-left">
        <ul class="ml3">
          <li class="my2">{{ $t("aboutMe.age") }}</li>
          <li class="my2">{{ $t("aboutMe.livingIn") }}</li>
        </ul>
        <w-divider color="blue-light1" class="mx2" />
        <ul class="ml3">
          <li class="text-bold my2">
            {{ $t("aboutMe.skills.headline") }}
          </li>
          <li class="my2">{{ $t("aboutMe.skills.skill1") }}</li>
          <li class="my2">{{ $t("aboutMe.skills.skill2") }}</li>
          <li class="my2">{{ $t("aboutMe.skills.skill3") }}</li>
          <li class="my2">{{ $t("aboutMe.skills.skill4") }}</li>
        </ul>
        <w-divider color="blue-light1" class="mx2" />
        <ul class="ml3">
          <li class="text-bold my2">
            {{ $t("aboutMe.hobbies.headline") }}
          </li>
          <li class="my2">{{ $t("aboutMe.hobbies.hobby1") }}</li>
          <li class="my2">{{ $t("aboutMe.hobbies.hobby2") }}</li>
          <li class="my2">{{ $t("aboutMe.hobbies.hobby4") }}</li>
          <li class="my2">{{ $t("aboutMe.hobbies.hobby3") }}</li>
        </ul>
        <w-divider color="blue-light1" class="mx2" />
      </div>
      <div class="about_me_text lg7 px5">
        <p class="personal__text">
          {{ $t("aboutMe.personalText") }}
        </p>
      </div>
    </w-flex>
    <div class="mt10">
      <h1 class="headline">{{ $t("aboutMe.headline2") }}</h1>
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
  font-size: 2rem;
  @media only screen and (min-width: 2100px) {
    font-size: 4rem;
  }
}

img.person__image {
  width: 15vw;
  @media only screen and (max-width: 1100px) {
    width: 30vw;
  }
}

div.about_me_skills {
  font-size: 1.5rem;
  @media only screen and (min-width: 2100px) {
    font-size: 3rem;
  }
}

p.personal__text {
  font-size: 1.5rem;
  border: 2px solid white;
  padding: 10px;
  @media only screen and (min-width: 2100px) {
    font-size: 3rem;
  }
}
</style>
