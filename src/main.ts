import { createApp } from "vue";
import "@/assets/css/reset.css";
import "@/assets/css";
import App from "./App.vue";
import router from "./router";
import { pinia } from "./pinia";

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
