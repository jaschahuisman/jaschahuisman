import { createApp } from "vue";
import App from "@/application/App.vue";
import router from "@/application/router";
import VueGtag from "vue-gtag-next";

import SectionWrapper from "@/components/views/SectionWrapper.vue";

createApp(App)
  .use(VueGtag, { property: { id: "G-P6YLKXNGMM" } })
  .use(router)
  .component("section-wrapper", SectionWrapper)
  .mount("#app");
