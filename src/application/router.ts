import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { trackRouter } from "vue-gtag-next";
import Home from "@/components/pages/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(
        /* webpackChunkName: "projects" */ "@/components/pages/Projects.vue"
      ),
  },
  {
    path: "/projects/:projectId",
    name: "Project",
    component: () =>
      import(
        /* webpackChunkName: "projects" */
        "@/components/pages/Project.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

trackRouter(router);

export default router;
