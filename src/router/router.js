import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";
import NotFonundView from "../views/NotFoundView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/login", component: LoginView },
  { path: "/register", component: RegisterView },
  { path: "/d", component: DashboardView },

  // mavjud bo'lmagan route
  { path: "/:pathMatch(.*)*", component: NotFonundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
