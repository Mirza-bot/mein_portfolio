import { createApp } from "vue";
import App from "./App.vue";
import WaveUI from "wave-ui";
import router from "./routes/router.js";
import "wave-ui/dist/wave-ui.css";
import i18n from "./i18n";

const app = createApp(App);


new WaveUI(app, {});

app.use(router);
app.use(i18n);
app.mount("#app");
