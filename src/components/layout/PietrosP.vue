<template>
  <div class="bd2 bdrs1 project__container">
    <div class="project__header">
      <span class="headline">Pietros Pizzeria</span>
    </div>
    <w-card
      :image="`${projectImg2}`"
      bg-color="black"
      no-border
    >
      <br />
      <w-flex wrap class="my3">
        <div class="md9">
          <span class="title2">{{ $t("projects.description") }}</span
          ><br /><br />
          {{ $t("projects.project2.descriptionContent") }}
          <br />
          <br />
          <span class="description"
            >Responsive: {{ $t("projects.project2.responsive") }}</span
          >
          <br />
          <br />
        </div>
        <div class="md3">
          <span class="title2">Tools:</span>
          <ul class="mx5">
            <li><w-icon l>mdi mdi-language-javascript</w-icon>JavaScript</li>
            <li><w-icon>mdi mdi-language-html5</w-icon>HTML5</li>
            <li><w-icon l>mdi mdi-sass</w-icon>Sass</li>
            <li><w-icon l>mdi mdi-vuejs</w-icon>Vue.js</li>
            <li>Vue-Router</li>
          </ul>
        </div>
      </w-flex>
      <template #actions>
        <w-flex wrap class="text-center">
          <div class="xs6">
            <a
              href="https://pietro-s-pizzeria.web.app/main"
              rel="noopener"
              target="_blank"
            >
              <w-button class="link__button" bg-color="white" color="black"
                ><w-icon class="mr2" color="black">mdi mdi-desktop-mac</w-icon>
                Demo</w-button
              >
            </a>
          </div>
          <div class="xs6">
            <a
              href="https://github.com/Mirza-bot/pietro_pizzeria"
              rel="noopener"
              target="_blank"
            >
              <w-button class="link__button" bg-color="white" color="black">
                <w-icon class="mr2" color="black">mdi mdi-code-braces</w-icon
                >Code
              </w-button>
            </a>
          </div>
        </w-flex>
      </template>
    </w-card>
  </div>
</template>

<script>
import PizzeriaImg from "../../images/pietros_pizzeria.webp";
export default {
  data: () => ({
    projectImg2: PizzeriaImg,
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
  margin-bottom: 2rem;
  @media only screen and (min-width: 2100px) {
    transform: scale(3);
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 1100px) {
    transform: scale(1.5);
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
