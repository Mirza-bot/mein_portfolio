import { createApp } from "vue";
import App from "./App.vue";
import WaveUI from "wave-ui";
import router from "./routes/router.js";
import "wave-ui/dist/wave-ui.css";

const app = createApp(App);

new WaveUI(app, {
  
});

app.use(router);
app.mount("#app");
