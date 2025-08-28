import { createApp } from "vue"
import App from "./App.vue"
import { pinia } from "./pinia"
import router from "./router"

import "@/assets/css/reset.css"
import "@/assets/css/style.css"
import "@/assets/css/element.scss"

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount("#app")
