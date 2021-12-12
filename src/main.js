import { createApp } from "vue";
import App from "./App.vue";
import WaveUI from "wave-ui";
import router from "./routes/router.js";
import { createI18n } from "vue-i18n";
import "wave-ui/dist/wave-ui.css";

const i18n = createI18n({
  locale: "de",
  fallbackLocale: "en",
  messages: {
    de: {
      header: {
        projects: "Projekte",
        contact: "Kontakt",
      },
      welcome: {
        headline: "Einzigartige UI-Designs",
        headline2: "Herausragende Benutzererfahrung",
        button: "Projekte",
      },
      projects: {
        headline: "Projekte",
        description: "Beschreibung:",
        project1: {
          descriptionContent:
            'Dies ist eine Web-App welche mittels JavaScript, Vue3, Vue-Router und VueX erstellt wurde. Als Backend wird Firebase mit ihrer Realtime-Database genutzt, dies ermöglicht Authentifizierungsfunktionen und das Speichern der eigenen "Task-Karten", für jeden Nutzer der sich registriert. Mittels der "Drag & Drop"-API können die Karten zwischen den einzelnen Kategorien verschoben werden. Das Löschen und Editieren der Karten ist ebenfalls möglich.',
          responsive: "Nein",
        },
        project2: {
          descriptionContent: "Eine simple Pizzeria-Webseite welche mittels JavaScript, Vue.js, Vue-Router und Sass erstellt wurde. Das Design der Hauptseite, sowie der Gallerie wurden mit einem CSS-Grid erstellt um ein symetrisches Layout zu erzielen.",
          responsive: "Ja"
        },
        project3: {
          title: "Lohnrechner (Schichtarbeit)",
          descriptionContent: "Diese Web-App dient dazu den Monatslohn anhand des Stundenlohns, unter Berücksichtigung der gearbeiteten Schicht, zu berechnen. Es werden Schichtzulagen, Überstunden, Gefahren und Schmutzzulagen, sowie Urlaubsstunden und Feiertage zur Berechnung mit einbezogen. Durch Einsatz des Ionic-Frameworks und Vue.js wurde eine Webseite erstellt die gezielt an Mobile-Endgeräte angepasst sein soll, damit so die Berechnung des Monatslohnes einfach und für jeden auch unterwegs möglich gemacht wird.",
          responsive: "Ja"
        },
        project4: {
          title: "Portfolio Webseite",
          descriptionContent: "Die Portfolio-Webseite auf der Sie sich befinden wurde mit JavaScript, Vue.js, Vue-Router, Sass und Wave-UI erstellt.",
          responsive: "Ja"
        }
      },
      contact: {
        headline: "Kontaktieren Sie mich.",
        textContent1: "Sie können mir direkt über das Online-Formular schreiben oder Sie senden mir eine Nachricht über ",
        textContent2: "Ich werde mich um eine schnelle Antwort bemühen.",
        messageLabel: "Message*",
        submitButton: "Senden"
      }
    },
    en: {
      header: {
        projects: "Projects ",
        contact: "Contact",
      },
      welcome: {
        headline: "Unique UI-Designs",
        headline2: "Outstanding Userexpirience",
        button: "Projects",
      },
      projects: {
        headline: "Projects",
        description: "Description:",
        project1: {
          descriptionContent:
            'This is a web-app which was made with JavaScript ,Vue3, Vue-Router and VueX. It uses Firebase as backend, which enables authentification functions and the saving of "task-cards", for each user that signs up. By means of the "drag & drop"- API, the cards can be moved within the three category rows. Deleting and editing of these cards is also possible.',
          responsive: "No",
        },
        project2: {
          descriptionContent: "A simple pizzeria-website which was made with JavaScript, Vue.js, Vue-Router and Sass. The design of the main page as well as the gallery site was made with a CSS-grid to ensure a symmetrical layout.",
          responsive: "Yes"
        },
        project3: {
          title: "Salary calculator (shift work)",
          descriptionContent: "This web-app serves the purpose to calculate the salary considering the worked shift as well as shift allowances, overtime, hazard allowance, dirt allowance, vacation hours and holidays.",
          responsive: "Yes"
        },
        project4: {
          title: "Portfolio Webseite",
          descriptionContent: "The portfolio-website you are currently on was made with JavaScript, Vue.js, Vue-Router, Sass and Wave-UI.",
          responsive: "Yes"
        }
      },
      contact: {
        headline: "Contact me.",
        textContent1: "You can message me directly from the online-form or you reach out to me from",
        textContent2: "I'll answer as soon as possible.",
        messageLabel: "Message*",
        submitButton: "Send"
      }
    },
  },
});

const app = createApp(App);

new WaveUI(app, {});

app.use(router);
app.use(i18n);
app.mount("#app");
