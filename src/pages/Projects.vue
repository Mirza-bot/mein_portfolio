<template>
  <div class="page__container" id="#projects">
    <div class="page__header">
      <h2>{{ $t("projects.headline") }}</h2>
      <w-divider color="white" class="my3" />
    </div>
    <span class="headline">Kanban-Board-App</span>
    <w-card :image="`${projectImg1}`" class="mt3" no-border>
      <w-flex wrap class="my5">
        <div class="md10 pr5">
          <span class="title2">{{ $t("projects.description") }}</span
          ><br /><br />
          {{ $t("projects.project1.descriptionContent") }}
          <br />
          <br />
          <span class="description"
            >Responsive: {{ $t("projects.project1.responsive") }}</span
          >
        </div>
        <div class="md2">
          <span class="title2">Tools:</span>
          <ul class="mx5">
            <li><w-icon>mdi mdi-language-html5</w-icon>HTML5</li>
            <li><w-icon l>mdi mdi-sass</w-icon>Sass</li>
            <li><w-icon l>mdi mdi-language-javascript</w-icon>JavaScript</li>
            <li><w-icon l>mdi mdi-vuejs</w-icon>Vue.js</li>
            <li>Vue-Router</li>
            <li>Vuex</li>
            <li><w-icon l>mdi mdi-firebase</w-icon>Firebase</li>
          </ul>
        </div>
      </w-flex>
      <template #actions>
        <w-flex wrap class="text-center">
          <div class="xs6">
            <a
              href="https://kanban-board-91d98.web.app/"
              rel="noopener"
              target="_blank"
            >
              <w-button
                class="link__button"
                bg-color="blue-light2"
                color="black"
                ><w-icon class="mr2" color="black">mdi mdi-desktop-mac</w-icon>
                Demo</w-button
              >
            </a>
          </div>
          <div class="xs6">
            <a
              href="https://github.com/Mirza-bot/Kanban-board/tree/main/kanban-board"
              rel="noopener"
              target="_blank"
            >
              <w-button
                class="link__button"
                bg-color="blue-light2"
                color="black"
                ><w-icon class="mr2" color="black">mdi mdi-code-braces</w-icon
                >Code</w-button
              >
            </a>
          </div>
        </w-flex>
      </template>
    </w-card>
    <w-divider color="white" class="mb3"></w-divider>
    <span class="headline mb2">Pietros Pizzeria</span>
    <w-card :image="`${projectImg2}`" class="mt3" no-border>
      <br />
      <w-flex wrap class="my3">
        <div class="md10 pr5">
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
        <div class="md2">
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
              <w-button
                class="link__button"
                bg-color="blue-light2"
                color="black"
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
              <w-button
                class="link__button"
                bg-color="blue-light2"
                color="black"
              >
                <w-icon class="mr2" color="black">mdi mdi-code-braces</w-icon
                >Code
              </w-button>
            </a>
          </div>
        </w-flex>
      </template>
    </w-card>
    <div>
      <w-divider color="white" class="mb3"></w-divider>
      <span class="headline mb2">{{ $t("projects.project3.title") }}</span>
      <w-card class="mt3" no-border>
        <img
          :src="projectImg3"
          class="mobile__gif sh6"
          alt="lohnrechnerdemo_bild"
        />
        <br />
        <w-flex wrap>
          <div class="md10 mb5 pr5">
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
          <div class="md2">
            <span class="title2">Tools:</span>
            <ul class="mx5">
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
          <w-flex wrap class="text-center mt5">
            <div class="xs12">
              <a
                href="https://github.com/Mirza-bot/Lohn-Rechner"
                rel="noopener"
                target="_blank"
              >
                <w-button
                  class="link__button"
                  bg-color="blue-light2"
                  color="black"
                >
                  <w-icon class="mr2" color="black">mdi mdi-code-braces</w-icon>
                  Code</w-button
                >
              </a>
            </div>
          </w-flex>
        </template>
      </w-card>
    </div>
    <div>
      <w-divider color="white" class="mb3"></w-divider>
      <span class="headline mb1">{{ $t("projects.project4.title") }}</span>
      <w-card :image="`${projectImg4}`" class="mt3" no-border color="white">
        <br />
        <w-flex wrap>
          <div class="md10 mb5 pr5">
            <span class="title2"
              >{{ $t("projects.description") }} <br /><br />
            </span>
            {{ $t("projects.project4.descriptionContent") }}
            <br />
            <br />
            <span class="description"
              >Responsive: {{ $t("projects.project4.responsive") }}</span
            >
          </div>
          <div class="md2">
            <span class="title2">Tools:</span>
            <ul class="mx5">
              <li><w-icon l>mdi mdi-language-javascript</w-icon>JavaScript</li>
              <li><w-icon>mdi mdi-language-html5</w-icon>HTML5</li>
              <li><w-icon l>mdi mdi-sass</w-icon>Sass</li>
              <li><w-icon l>mdi mdi-vuejs</w-icon>Vue.js</li>
              <li>Vue-Router</li>
              <li>Wave-UI</li>
            </ul>
          </div>
        </w-flex>
        <template #actions>
          <w-flex wrap class="flex text-center mt5">
            <div class="xs12">
              <a
                href="https://github.com/Mirza-bot/mein_portfolio"
                rel="noopener"
                target="_blank"
              >
                <w-button
                  class="link__button"
                  bg-color="blue-light2"
                  color="black"
                  ><w-icon class="mr2" color="black"
                    >mdi mdi-code-braces</w-icon
                  >
                  Code
                </w-button>
              </a>
            </div>
          </w-flex>
        </template>
      </w-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    projectImg1: `./src/images/kanban.webp`,
    projectImg2: `./src/images/pietros pizzeria.webp`,
    projectImg3: `./src/images/lohnrechner.webp`,
    projectImg4: `./src/images/portfolio.webp`,
  }),
};
</script>

<style lang="scss" scoped>
@import "../assets/styles";
div.page__container {
  font-family: "Roboto Condensed", sans-serif;
  width: 80vw;
  margin: 15vh auto 5vh auto;
  @media only screen and (min-width: 2100px) {
    font-size: 3rem;
  }
  div.page__header {
    display: block;
    margin: auto auto 5vh auto;
    h2 {
      font-size: 3rem;
      text-shadow: -3px 3px 3px black;
      @media only screen and (min-width: 2100px) {
        font-size: 6rem;
      }
    }
    .w-divider {
      margin: 0;
    }
  }
  ul {
    list-style-type: none;
    @media only screen and (min-width: 2100px) {
      font-size: 3rem;
    }
  }
}

div.md5 {
  min-height: 80vh;
}

img.mobile__gif {
  margin: 5vh auto 5vh 35vw;
  max-width: 15vw;
  border: 1px solid black;
  border-radius: 45px;
  @media only screen and (max-width: 900px) {
    margin: auto auto 5vh 10vw;
    max-width: 60vw;
    border-radius: 35px;
  }
  @media only screen and (min-width: 2100px) {
    transform: scale(1.3);
  }
}

span.title2 {
  @media only screen and (min-width: 2100px) {
    font-size: 4rem;
  }
}
span.headline {
  @media only screen and (min-width: 2100px) {
    font-size: 5rem;
  }
}

.link__button {
  margin: 0 0 30px 0;
  transform: scale(2);
  @media only screen and (min-width: 2100px) {
    transform: scale(4);
  }
  @media only screen and (max-width: 1100px) {
    transform: scale(1.5);
  }
}
</style>
