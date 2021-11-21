import { createApp } from "vue";
import App from "@/application/App.vue";
import router from "@/application/router";

import SectionWrapper from "@/components/views/SectionWrapper.vue";

createApp(App)
  .use(router)
  .component("section-wrapper", SectionWrapper)
  .mount("#app");
