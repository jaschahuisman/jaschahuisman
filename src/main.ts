import { createApp } from "vue";
import App from "./application/App.vue";
import router from "@/router";
import ContainerWrapper from "@/components/wrappers/ContainerWrapper.vue";
import SectionWrapper from "@/components/wrappers/SectionWrapper.vue";

createApp(App)
  .use(router)
  .component("container-wrapper", ContainerWrapper)
  .component("section-wrapper", SectionWrapper)
  .mount("#app");
