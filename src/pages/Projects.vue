<template>
  <div class="page__container" id="#projects">
    <div class="page__header">
      <h2>{{ $t("projects.headline") }}</h2>
    </div>
    <div class="page__body bd3 bdrs1">
      <w-button
        class="project__button"
        bg-color="black"
        dark
        @click="showOverlay4 = true"
      >
        {{ $t("projects.project4.title") }}
      </w-button>

      <w-overlay v-model="showOverlay4" bg-color="rgba(0, 0, 0, 0.9)">
        <div class="overlay__container">
          <w-button
            class="close__overlay"
            bg-color="white"
            color="black"
            lg
            dark
            @click="showOverlay4 = false"
          >
            <w-icon>wi-cross</w-icon>
          </w-button>
          <PortfolioP></PortfolioP>
        </div>
      </w-overlay>
      <w-button
        class="project__button"
        bg-color="black"
        dark
        @click="showOverlay3 = true"
      >
        {{ $t("projects.project3.title") }}
      </w-button>

      <w-overlay v-model="showOverlay3" bg-color="rgba(0, 0, 0, 0.9)">
        <div class="overlay__container">
          <w-button
            class="close__overlay"
            bg-color="white"
            color="black"
            lg
            dark
            @click="showOverlay3 = false"
          >
            <w-icon>wi-cross</w-icon>
          </w-button>
          <LohnrechnerP></LohnrechnerP>
        </div>
      </w-overlay>
      <w-button
        class="project__button"
        bg-color="black"
        dark
        @click="showOverlay2 = true"
      >
        Kanbanboard App
      </w-button>

      <w-overlay v-model="showOverlay2" bg-color="rgba(0, 0, 0, 0.9)">
        <div class="overlay__container">
          <w-button
            class="close__overlay"
            bg-color="white"
            color="black"
            lg
            dark
            @click="showOverlay2 = false"
          >
            <w-icon>wi-cross</w-icon>
          </w-button>
          <KanbanPVue></KanbanPVue>
        </div>
      </w-overlay>
      <w-button
        class="project__button"
        bg-color="black"
        dark
        @click="showOverlay1 = true"
      >
        Pietros Pizzeria
      </w-button>

      <w-overlay v-model="showOverlay1" bg-color="rgba(0, 0, 0, 0.9)">
        <div class="overlay__container">
          <w-button
            class="close__overlay"
            bg-color="white"
            color="black"
            lg
            dark
            @click="showOverlay1 = false"
          >
            <w-icon>wi-cross</w-icon>
          </w-button>
          <PietrosP></PietrosP>
        </div>
      </w-overlay>
    </div>
  </div>
</template>

<script>
import KanbanPVue from "../components/layout/KanbanP.vue";
import PietrosP from "../components/layout/PietrosP.vue";
import LohnrechnerP from "../components/layout/LohnrechnerP.vue";
import PortfolioP from "../components/layout/PortfolioP.vue";
export default {
  components: { KanbanPVue, PietrosP, LohnrechnerP, PortfolioP },
  data: () => ({
    showOverlay1: false,
    showOverlay2: false,
    showOverlay3: false,
    showOverlay4: false,
  }),
};
</script>

<style lang="scss" scoped>
@import "../assets/styles";
div.page__container {
  font-family: "Roboto Condensed", sans-serif;
  width: 60vw;
  margin: 10vh auto 5vh auto;
  @media only screen and (min-width: 2100px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 1100px) {
    width: 90vw;
  }
  div.page__header {
    display: block;
    h2 {
      font-size: 3rem;
      text-shadow: -3px 3px 3px black;
      @media only screen and (min-width: 2100px) {
        font-size: 5rem;
      }
    }
    .w-divider {
      margin: 0;
    }
  }
}

div.page__body {
  background-color: white;
}

button.project__button {
  width: 90%;
  height: 50px;
  margin: 20px 5%;
  font-size: 1.5rem;
}

div.overlay__container {
  position: absolute;
  top: 50px;
  left: auto;
  max-width: 50vw;
  height: 60vh;
  @media only screen and (max-width: 1100px) {
    min-width: 99vw;
    top: 2vh;
  }
}

button.close__overlay {
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>
