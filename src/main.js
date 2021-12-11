import { createApp } from "vue";
import App from "./App.vue";
import WaveUI from "wave-ui";
import router from "./routes/router.js";
import { createI18n } from 'vue-i18n'
import "wave-ui/dist/wave-ui.css";

const i18n = createI18n({
    locale: 'de',
    fallbackLocale: 'en',
    messages: {
        de: {
            header: {
                projects: "Projekte",
                contact: "Kontakt"
            },
            welcome: {
              headline: "Einzigartige UI-Designs",
              headline2: "Herausragende Benutzererfahrung",
              button: "Projekte"
            },
            projects: {
              
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
              button: "Projects"
            }
          }
    }
})

const app = createApp(App);

new WaveUI(app, {});

app.use(router);
app.use(i18n)
app.mount("#app");
