import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import IconBase from "@/components/atoms/IconBase.vue";

createApp(App).use(router).component("icon-base", IconBase).mount("#app");
