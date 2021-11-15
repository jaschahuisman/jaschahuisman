import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/pages/Home.vue";

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
      import(/* webpackChunkName: "projects" */ "@/pages/Projects.vue"),
  },
  {
    path: "/projects/:projectId",
    name: "Project",
    component: () => import("@/pages/Project.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
