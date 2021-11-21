import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";

import SectionWrapper from "@/components/views/SectionWrapper.vue";

createApp(App)
  .use(router)
  .component("section-wrapper", SectionWrapper)
  .mount("#app");
