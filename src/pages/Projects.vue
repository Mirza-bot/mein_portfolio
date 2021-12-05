<template>
  <div class="page">
    <div class="page__header">
      <h2>Projekte</h2>
      <w-divider color="white" class="my5" />
    </div>
    <div>
      <span class="headline">Kanban-Board-App</span>
      <w-card :image="`${projectImg1}`" class="mt3" no-border>
        <br />
        <span class="title2">Beschreibung:</span><br /><br />
        Dies ist eine Web-App welche mittels Vue3, Vue-Router und Vuex erstellt
        wurde. Als Backend wird Firebase mit ihrer Realtime-Database genutzt,
        dies ermöglicht Authentifizierungsfunktionen und das Speichern der
        eigenen "Task-Karten", für jeden Nutzer der sich registriert. Mittels
        der "Drag & Drop"-API können die Karten zwischen den einzelnen
        Kategorien verschoben werden. Das Löschen und Editieren der Karten ist
        ebenfalls möglich.
        <ul class="my5 description">
          <li>Responsive: Nein</li>
          <li>Art: Desktop-Web-Applikation</li>
        </ul>

        <span class="title3">Technologien:</span>
        <ul class="mx8">
          <li><w-icon l>mdi mdi-language-javascript</w-icon>JavaScript</li>
          <li><w-icon l>mdi mdi-vuejs</w-icon>Vue.js</li>
          <li>Vue-Router</li>
          <li>Vuex</li>
          <li><w-icon l>mdi mdi-sass</w-icon>Sass</li>
          <li><w-icon l>mdi mdi-firebase</w-icon>Firebase</li>
        </ul>
        <template #actions>
          <div class="spacer"></div>
          <w-button class="mx3" xl bg-color="orange-light2" color="black"
            ><w-icon class="mr2" xl color="black">mdi mdi-desktop-mac</w-icon>
            Demo</w-button
          >
          <w-button class="mx3" xl bg-color="orange-light2" color="black"
            ><w-icon class="mr2" xl color="black">mdi mdi-code-braces</w-icon
            >Code</w-button
          >
        </template>
      </w-card>
    </div>
    <w-divider color="white" class="my10" />
    <div>
      <span class="headline mb2">Pietros Pizzeria</span>
      <w-card :image="`${projectImg2}`" class="mt3" no-border>
        <br />
        <span class="title2">Beschreibung:</span><br /><br />
        Eines meiner ersten Projekte. Eine simple Pizzeria-Webseite welche
        mittels Vue.js, Vue-Router, SASS erstellt wurde. Als Designvorlage
        dienten verschiedenste Restaurant-Webseiten aus der Umgebung.

        <ul class="my5 description">
          <li>Responsive: Ja</li>
          <li>Art: Webseite</li>
        </ul>

        <span class="title3">Technologien:</span>
        <ul class="mx8">
          <li><w-icon l>mdi mdi-language-javascript</w-icon>JavaScript</li>
          <li><w-icon l>mdi mdi-vuejs</w-icon>Vue.js</li>
          <li>Vue-Router</li>
          <li><w-icon l>mdi mdi-sass</w-icon>Sass</li>
        </ul>
        <template #actions>
          <div class="spacer"></div>
          <w-button class="mx3" xl bg-color="orange-light2" color="black"
            ><w-icon class="mr2" xl color="black">mdi mdi-desktop-mac</w-icon>
            Demo</w-button
          >
          <w-button class="mx3" xl bg-color="orange-light2" color="black"
            ><w-icon class="mr2" xl color="black">mdi mdi-code-braces</w-icon
            >Code</w-button
          >
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
  }),
};
</script>

<style lang="scss" scoped>
@import "../assets/styles";
div.page {
  font-family: "Roboto Condensed", sans-serif;
  width: 90vw;
  margin: 15vh auto 0 auto;
  div.page__header {
    display: block;
    margin: auto auto 10vh auto;
    h2 {
      font-size: 3rem;
      text-shadow: -3px 3px 3px black;
    }
    .w-divider {
      margin: 0;
    }
  }
  ul.description {
    list-style-type: none;
  }
}
</style>
