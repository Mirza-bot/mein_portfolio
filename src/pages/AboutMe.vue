<template>
  <div class="page__container">
    <div class="page__header">
      <h1 class="headline">Erfahrung in</h1>
      <w-divider color="white" class="mb8" />
    </div>
    <w-flex wrap class="text-center">
      <div class="sm4 mxa my5 px6">
        <ul>
          <li>
            <img
              class="skill__image bdrs2"
              src="../images/JavaScript.png"
              alt="Vue.js Icon"
            />
          </li>
          <li class="my2">
            <span class="title1">JavaScript</span>
          </li>
          <li>
            <p>
              Die Programmiersprache der Browser. Dank den Neuerungen die mit
              ES6 dazugekommen sind ist das Schreiben von übersichtlichen und
              gut strukturiertem Code vereinfacht worden.
            </p>
          </li>
        </ul>
      </div>
      <div class="sm4 mxa my5 px6">
        <ul>
          <li>
            <img
              class="skill__image bdrs2"
              src="../images/Vuejs_icon.png"
              alt="Vue.js Icon"
            />
          </li>
          <li class="my2">
            <span class="title1">Vue.js</span>
          </li>
          <li>
            <p>
              Vue.js in seiner dritten Version, ist ein ausgezeichnetes
              JavaScript-Framework das im Zusammenspiel mit Vue-Router, VueX und
              Nuxt.js ein umfangreiches Toolset bietet um die
              Front-End-Entwicklung zu erleichtern.
            </p>
          </li>
        </ul>
      </div>
      <div class="sm4 mxa my5 px6">
        <ul>
          <li>
            <img
              class="skill__image bdrs2"
              src="../images/Sass.png"
              alt="Vue.js Icon"
            />
          </li>
          <li class="my2">
            <span class="title1">Sass</span>
          </li>
          <li>
            <p>
              Ein pre-processor für CSS mit der Möglichkeit JavaScript-Syntax zu
              verwenden (wie z.B. das Nutzen von Variablen). Sass vereinfacht es
              das Design auf der gesamten Benutzeroberfläche einheitlich zu
              gestalten.
            </p>
          </li>
        </ul>
      </div>
      <div class="sm4 mxa my5 px6">
        <ul>
          <li>
            <img
              class="skill__image bdrs2"
              src="../images/Bootstrap.png"
              alt="Vue.js Icon"
            />
          </li>
          <li class="my2">
            <span class="title1">Bootstrap</span>
          </li>
          <li>
            <p>
              Eines der bekanntesten CSS-Frameworks und definitiv das Framework
              mit dem höchsten Wiedererkennungswert.
            </p>
          </li>
        </ul>
      </div>
      <div class="sm4 mxa my5 px6">
        <ul>
          <li>
            <img
              class="skill__image bdrs2"
              src="../images/wave-ui.webp"
              alt="Vue.js Icon"
            />
          </li>
          <li class="my2">
            <span class="title1">Wave UI for Vue</span>
          </li>
          <li>
            <p>
              Ein UI-Framework für Vue.js. Eine gute Wahl für ein Material
              Design, wenn mit Vue.js gearbeitet wird. Die Ergebnisse sprechen
              für sich, wie man an dieser Webseite sehen kann.
            </p>
          </li>
        </ul>
      </div>
      <div class="sm4 mxa my5 px6">
        <ul>
          <li>
            <img
              class="skill__image bdrs2"
              src="../images/SEO.jpg"
              alt="Vue.js Icon"
            />
          </li>
          <li class="my2">
            <span class="title1">Onpage SEO</span>
          </li>
          <li>
            <p>
              Die Suchmaschienen Optimierung während der Entwicklung ist essentieller Bestandteil
              des Aufbaus einer Online-Präsenz.
            </p>
          </li>
        </ul>
      </div>
    </w-flex>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles";
div.page__container {
  margin: 15vh 5vw 5vh 5vw;
  font-family: "Roboto Condensed", sans-serif;
  h1.headline {
    font-size: 3rem;
    font-weight: 900;
    text-shadow: -3px 3px 3px black;
  }
}

img.skill__image {
  width: 100px;
  height: 100px;
}



ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
