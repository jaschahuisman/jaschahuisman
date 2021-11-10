import { createApp } from "vue";
import App from "./application/App.vue";
import router from "@/router";

createApp(App).use(router).mount("#app");
