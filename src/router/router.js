import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import DashboardView from "../views/DashboardView.vue";
import NotFonundView from "../views/NotFoundView.vue";
import VerifyEmail from "../views/VerifyEmail.vue";
import axios from "axios";

// Dashboard auth check
const auth = async (to, from, next) => {
  if (to.name === "Dashboard") {
    await axios
      .get("http://localhost:7000/api/auth/check", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.authenticated) {
          localStorage.setItem("isAuthenticated", "true");
          next();
        } else {
          localStorage.removeItem("isAuthenticated");
          next({ name: "Home" });
        }
      })

      .catch(() => {
        localStorage.removeItem("isAuthenticated");
        next({ name: "Home" });
      });
  } else {
    next();
  }
};

const routes = [
  { path: "/", name: "Home", component: HomeView },
  {
    path: "/auth/login",
    name: "login",
    component: AuthView,
  },
  {
    path: "/auth/register",
    name: "register",
    component: AuthView,
  },
  {
    path: "/d",
    name: "Dashboard",
    component: DashboardView,
    beforeEnter: auth,
  },
  { path: "/verify", name: "Verify", component: VerifyEmail },

  // mavjud bo'lmagan route
  { path: "/:pathMatch(.*)*", component: NotFonundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
