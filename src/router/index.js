import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LayoutView from "../views/LayoutView.vue";

const routes = [
  {
    path: "/",
    name: "Host",
    component: LayoutView,
    children: [
      {
        path: "/",
        name: "Home",
        component: HomeView,
      },
      {
        path: "/about",
        name: "About",
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
