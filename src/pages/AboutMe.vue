<template>
  <div class="page__container" id="#aboutme">
    <div>
      <h1 class="headline">{{ $t("aboutMe.headline") }}</h1>
    </div>
    <w-flex wrap class="text-center aboutme_background">
      <div class="person__container mxa py12">
        <img
          class="person__image bdrsm bd6 sh5"
          src="../images/Mirza.webp"
          alt="Portfolio Picture"
        />
        <br />
        <ul class="name_plate mb10">
          <li>
            <span class="text-bold name_plate">Mirza MALKOC</span>
          </li>
          <li>{{ $t("aboutMe.age") }}</li>
          <li>{{ $t("aboutMe.livingIn") }}</li>
        </ul>
      </div>
      <div class="about_me_text mxa">
        <p class="personal__text">
          {{ $t("aboutMe.personalText") }}
        </p>
      </div>
    </w-flex>
    <div class="mt10">
      <h1 class="headline">{{ $t("aboutMe.headline2") }}</h1>
      <w-divider color="white" />
    </div>
    <w-flex wrap class="text-center">
      <div class="md3 mxa my5 px6" v-for="badge in badges" :key="badge.name">
        <ul>
          <li>
            <img
              class="skill__image bdrs2"
              :src="badge.img"
              alt="Vue.js Icon"
            />
          </li>
          <li class="my2">
            <span>{{ badge.name }}</span>
          </li>
        </ul>
      </div>
    </w-flex>
  </div>
</template>

<script>
import JavaScriptImg from "../images/JavaScript.png";
import BootstrapImg from "../images/Bootstrap.png";
import VueImg from "../images/Vuejs_icon.png";
import SassImg from "../images/Sass.png";
import WaveImg from "../images/wave-ui.webp";
import SEOImg from "../images/SEO.jpg";
import GitImg from "../images/Git-Icon.png";
import RespImg from "../images/Responsive.png";
export default {
  setup() {
    const badges = [
      { name: "JavaScript", img: JavaScriptImg },
      { name: "Vue.js", img: VueImg },
      { name: "Sass", img: SassImg },
      { name: "Bootstrap", img: BootstrapImg },
      { name: "WaveUI (Vue.js)", img: WaveImg },
      { name: "Onpage SEO", img: SEOImg },
      { name: "Git", img: GitImg },
      { name: "Responsive Designs", img: RespImg },
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
  width: 60vw;
  margin: 0 auto;
  font-family: "Roboto Condensed", sans-serif;
  @media only screen and (max-width: 1100px) {
    width: 90vw;
    margin: 0 auto;
  }
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
  color: white;
  font-size: 2rem;
  margin: 40px auto 0 37%;
  @media only screen and (min-width: 2100px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 1100px) {
    margin: auto;
  }
}

img.person__image {
  width: 15vw;
  @media only screen and (max-width: 1100px) {
    width: 50vw;
  }
}

div.about_me_skills {
  font-size: 1.5rem;
  @media only screen and (min-width: 2100px) {
    font-size: 3rem;
  }
}

span.name_plate {
  font-size: 2.5rem;
  white-space: nowrap;
  @media only screen and (min-width: 2100px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 1100px) {
    font-size: 2rem;
  }
}

ul.name_plate {
  text-align: start;
  font-size: 1.5rem;
}

.aboutme_background {
  background: radial-gradient(circle, rgba(0,0,0,0.7) 50%, rgba(0,0,0,1) 63%),
    url("../images/Vienna.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2%;
}

div.about_me_text {
  background-color: rgba(0, 0, 0, 0.609);
}

p.personal__text {
  font-size: 1.5rem;
  border: 2px solid white;
  padding: 20px;
  @media only screen and (min-width: 2100px) {
    font-size: 3rem;
  }
}
</style>
