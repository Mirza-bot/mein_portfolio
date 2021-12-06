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
        Dies ist eine Web-App welche mittels JavaScript, Vue3, Vue-Router und
        Vuex erstellt wurde. Als Backend wird Firebase mit ihrer
        Realtime-Database genutzt, dies ermöglicht Authentifizierungsfunktionen
        und das Speichern der eigenen "Task-Karten", für jeden Nutzer der sich
        registriert. Mittels der "Drag & Drop"-API können die Karten zwischen
        den einzelnen Kategorien verschoben werden. Das Löschen und Editieren
        der Karten ist ebenfalls möglich.
        <ul class="my5 description">
          <li>Responsive: Nein</li>
          <li>Art: Desktop-Web-Applikation</li>
        </ul>

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
        <template #actions>
          <div class="spacer"></div>
          <w-button class="mx5 mt5" xl bg-color="orange-light2" color="black"
            ><w-icon class="mr2" xl color="black">mdi mdi-desktop-mac</w-icon>
            Demo</w-button
          >
          <w-button class="mx8 mt5" xl bg-color="orange-light2" color="black"
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
        Eine simple Pizzeria-Webseite welche mittels JavaScript, Vue.js,
        Vue-Router und SASS erstellt wurde. Das Design der Hauptseite, sowie der
        Gallerie wurden mit einem CSS-Grid erstellt um ein symetrisches Layout
        zu erzielen.

        <ul class="my5 description">
          <li>Responsive: Ja</li>
          <li>Art: Webseite</li>
        </ul>

        <span class="title2">Tools:</span>
        <ul class="mx5">
          <li><w-icon l>mdi mdi-language-javascript</w-icon>JavaScript</li>
          <li><w-icon>mdi mdi-language-html5</w-icon>HTML5</li>
          <li><w-icon l>mdi mdi-sass</w-icon>Sass</li>
          <li><w-icon l>mdi mdi-vuejs</w-icon>Vue.js</li>
          <li>Vue-Router</li>
        </ul>
        <template #actions>
          <div class="spacer"></div>
          <w-button class="mx5 mt5" xl bg-color="orange-light2" color="black"
            ><w-icon class="mr2" xl color="black">mdi mdi-desktop-mac</w-icon>
            Demo</w-button
          >
          <w-button class="mx8 mt5" xl bg-color="orange-light2" color="black"
            ><w-icon class="mr2" xl color="black">mdi mdi-code-braces</w-icon
            >Code</w-button
          >
        </template>
      </w-card>
      <w-divider color="white" class="my10" />
      <div>
        <span class="headline mb2">Lohnberechnungs-App (Schichtarbeit)</span>
        <w-card :image="`${projectImg2}`" class="mt3" no-border>
          <br />
          <span class="title2">Beschreibung:</span><br /><br />
          Diese Web-App dient dazu den Monatslohn anhand des Stundenlohns, unter
          Berücksichtigung der gearbeiteten Schicht, zu berechnen. Es werden
          Schichtzulagen, Überstunden, Gefahren und Schmutzzulagen, sowie
          Urlaubsstunden und Feiertage zur Berechnung mit einbezogen. Durch
          Einsatz des Ionic-Frameworks und Vue.js wurde eine Webseite erstellt
          die gezielt an Mobile-Endgeräte angepasst sein soll, damit so die
          Berechnung des Monatslohnes einfach und für jeden auch unterwegs
          möglich gemacht wird.

          <ul class="my5 description">
            <li>Responsive: Ja</li>
            <li>Art: Mobile first Web-App</li>
          </ul>

          <span class="title2">Tools:</span>
          <ul class="mx5">
            <li><w-icon>mdi mdi-language-html5</w-icon>HTML5</li>
            <li><w-icon l>mdi mdi-language-css3</w-icon>CSS</li>
            <li><w-icon l>mdi mdi-language-typescript</w-icon>TypeScript</li>
            <li><w-icon l>mdi mdi-vuejs</w-icon>Vue.js</li>
            <li>Vue-Router</li>
            <li>Ionic-Framework + Cordova</li>
          </ul>
          <template #actions>
            <div class="spacer"></div>
            <w-button class="mx5 mt5" xl bg-color="orange-light2" color="black"
              ><w-icon class="mr2" xl color="black">mdi mdi-desktop-mac</w-icon>
              Demo</w-button
            >
            <w-button class="mx8 mt5" xl bg-color="orange-light2" color="black"
              ><w-icon class="mr2" xl color="black">mdi mdi-code-braces</w-icon
              >Code</w-button
            >
          </template>
        </w-card>
      </div>
      <w-divider color="white" class="my10" />
      <div>
        <span class="headline mb2">Portfolio Webseite</span>
        <w-card :image="`${projectImg4}`" class="mt3" no-border>
          <br />
          <span class="title2">Beschreibung:</span><br /><br />
          Die Portfolio-Webseite auf der Sie sich befinden wurde mit JavaScript,
          Vue.js, Vue-Router, Sass und Wave-UI erstellt. Dank des Vue-UI-Frameworks "Wave-UI"
          ist die Umsetzung einer Webseite mit Responsive-Design keine Herausforderung. 
          <ul class="my5 description">
            <li>Responsive: Ja</li>
            <li>Art: Webseite</li>
          </ul>

          <span class="title2">Tools:</span>
          <ul class="mx5">
            <li><w-icon l>mdi mdi-language-javascript</w-icon>JavaScript</li>
          <li><w-icon>mdi mdi-language-html5</w-icon>HTML5</li>
          <li><w-icon l>mdi mdi-sass</w-icon>Sass</li>
          <li><w-icon l>mdi mdi-vuejs</w-icon>Vue.js</li>
          <li>Vue-Router</li>
          <li>Wave-UI</li>
          </ul>
          <template #actions>
            <div class="spacer"></div>
            <w-button class="mx8 mt5" xl bg-color="orange-light2" color="black"
              ><w-icon class="mr2" xl color="black">mdi mdi-code-braces</w-icon
              >Code</w-button
            >
          </template>
        </w-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    projectImg1: `./src/images/kanban.webp`,
    projectImg2: `./src/images/pietros pizzeria.webp`,
    projectImg4: `./src/images/portfolio.webp`
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
    margin: auto auto 5vh auto;
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
