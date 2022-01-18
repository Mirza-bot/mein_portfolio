<template>
  <div class="bd2 bdrs1 project__container">
    <div class="project__header">
      <span class="headline">{{ $t("projects.project3.title") }}</span>
    </div>
    <w-card bg-color="black" no-border>
      <img
        :src="projectImg3"
        class="mobile__gif sh6"
        alt="lohnrechnerdemo_bild"
      />
      <br />
      <w-flex wrap>
        <div class="md9">
          <span class="title2">{{ $t("projects.description") }}</span
          ><br /><br />
          {{ $t("projects.project3.descriptionContent") }}
          <br />
          <br />
          <span class="description"
            >Responsive: {{ $t("projects.project3.responsive") }}</span
          >
        </div>
        <br />
        <br />
        <div class="md3">
          <span class="title2">Tools:</span>
          <ul class="mx4">
            <li><w-icon>mdi mdi-language-html5</w-icon>HTML5</li>
            <li><w-icon l>mdi mdi-language-css3</w-icon>CSS</li>
            <li><w-icon l>mdi mdi-language-typescript</w-icon>TypeScript</li>
            <li><w-icon l>mdi mdi-vuejs</w-icon>Vue.js</li>
            <li>Vue-Router</li>
            <li>Ionic-Framework</li>
          </ul>
        </div>
      </w-flex>
      <template #actions>
        <w-flex wrap class="text-center">
          <div class="xs12">
            <a
              href="https://github.com/Mirza-bot/Lohn-Rechner"
              rel="noopener"
              target="_blank"
            >
              <w-button class="link__button" bg-color="white" color="black">
                <w-icon class="mr2" color="black">mdi mdi-code-braces</w-icon>
                Code</w-button
              >
            </a>
          </div>
        </w-flex>
      </template>
    </w-card>
  </div>
</template>

<script>
import SalaryCalcImg from "../../images/lohnrechner.webp";
export default {
  data: () => ({
    projectImg3: SalaryCalcImg,
  }),
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles";
ul {
  list-style-type: none;
  @media only screen and (min-width: 2100px) {
    font-size: 1.5rem;
    margin-top: 30px;
  }
  @media only screen and (min-width: 1100px) {
    margin-top: 20px;
  }
    @media only screen and (max-width: 1100px) {
    
      li {
        float: left;
        margin-right: 5px;
        }
    }
}

span.title2 {
  @media only screen and (min-width: 2100px) {
    font-size: 2.5rem;
  }
}
span.headline {
  @media only screen and (min-width: 2100px) {
    font-size: 4rem;
  }
}

.link__button {
  transform: scale(1.5);
  margin-bottom: 15px;
  @media only screen and (min-width: 2100px) {
    transform: scale(3);
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 1100px) {
    transform: scale(1.5);
    margin-bottom: 5px;
  }
}

img.mobile__gif {
  margin: 5% auto 5% 40%;
  max-width: 10vw;
  border: 1px solid black;
  border-radius: 35px;
  @media only screen and (max-width: 900px) {
    margin: auto auto 20px 40%;
    max-width: 20vw;
    border-radius: 15px;
  }
  @media only screen and (min-width: 2100px) {
    margin-left: 40%;
    border-radius: 40px;
    max-width: 230px;
  }
}

div.project__header {
  background-color: rgb(0, 0, 0);
  padding: 15px;
}

div.project__container {
  background-color: rgb(255, 255, 255);
}
</style>
