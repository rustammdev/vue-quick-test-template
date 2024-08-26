import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";
import NotFonundView from "../views/NotFoundView.vue";
import axios from "axios";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/login", name: "Login", component: LoginView },
  { path: "/register", name: "Register", component: RegisterView },
  { path: "/d", name: "Dashboard", component: DashboardView },

  // mavjud bo'lmagan route
  { path: "/:pathMatch(.*)*", component: NotFonundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Barcha routelarda ishlaydi
router.beforeEach((to, from, next) => {
  if (to.name === "Dashboard") {
    axios
      .get("http://localhost:7000/api/auth/check", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.authenticated) {
          localStorage.setItem("isAuthenticated", "true");
          next(); // Agar autentifikatsiya muvaffaqiyatli bo'lsa
        } else {
          localStorage.removeItem("isAuthenticated");
          next({ name: "Home" }); // Autentifikatsiya muvaffaqiyatsiz bo'lsa, Login sahifasiga yo'naltirish
        }
      })
      .catch(() => {
        localStorage.removeItem("isAuthenticated");
        next({ name: "Home" }); // Server xatosi yoki boshqa holatlarda ham Login sahifasiga yo'naltirish
      });
  } else {
    next();
  }
  // else {
  //   axios
  //     .get("http://localhost:7000/api/auth/check", {
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       if (response.data.authenticated) {
  //         localStorage.setItem("isAuthenticated", "true");
  //         next();
  //       } else {
  //         localStorage.removeItem("isAuthenticated");
  //         next();
  //       }
  //     })
  //     .catch(() => {
  //       localStorage.removeItem("isAuthenticated");
  //       next();
  //     });
  // }
});

export default router;
