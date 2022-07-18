<template>
  <div class="bd2 bdrs1 project__container">
    <div class="project__header bdrst">
      <span class="headline">{{ $t("projects.project5.title") }}</span>
    </div>
    <w-card :image="`${projectImg1}`" bg-color="black" no-border>
      <w-flex wrap class="my5">
        <div class="md9">
          <span class="title2">{{ $t("projects.description") }}</span
          ><br /><br />
          {{ $t("projects.project5.descriptionContent") }}
          <br />
          <br />
        </div>
        <div class="md3">
          <span class="title2">Tools:</span>
          <ul class="mx5">
            <li><w-icon>mdi mdi-language-html5</w-icon>HTML5</li>
            <li><w-icon l>mdi mdi-language-css3</w-icon>Css</li>
            <li><w-icon l>mdi mdi-language-javascript</w-icon>JavaScript</li>
            <li><w-icon l>mdi mdi-firebase</w-icon>Firebase</li>
          </ul>
        </div>
      </w-flex>
      <template #actions>
        <w-flex wrap class="text-center">
          <div class="xs6">
            <a
              href="https://pixelartdrawingboard.web.app/"
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
              href="https://github.com/Mirza-bot/PixelArtDB"
              rel="noopener"
              target="_blank"
            >
              <w-button class="link__button" bg-color="white" color="black"
                ><w-icon class="mr2" color="black">mdi mdi-code-braces</w-icon
                >Code</w-button
              >
            </a>
          </div>
        </w-flex>
      </template>
    </w-card>
  </div>
</template>

<script>
import PixelArtDB from "../../images/PixelArtDB.png";
export default {
  data: () => ({
    projectImg1: PixelArtDB,
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
    margin-bottom: 50px;
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
