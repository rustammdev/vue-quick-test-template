import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import DashboardView from "../views/DashboardView.vue";
import NotFonundView from "../views/NotFoundView.vue";
import VerifySend from "../views/VerifySend.vue";
import VerifyEmail from "../views/VerifyEmail.vue";
import Events from "../views/Events.vue";
import DashboardEvents from "../components/DashboardEvents.vue";
import EventQuestions from "../components/EventQuestions.vue";
import DashboardSettings from "../components/Settings.vue";
import axios from "axios";

// Dashboard auth check
// const auth = async (to, from, next) => {
//   if (to.name === "Dashboard") {
//     await axios
//       .get("http://localhost:7000/api/auth/check", {
//         withCredentials: true,
//       })
//       .then((response) => {
//         if (response.data.authenticated) {
//           localStorage.setItem("isAuthenticated", "true");
//           next();
//         } else {
//           localStorage.removeItem("isAuthenticated");
//           next({ name: "login" });
//         }
//       })

//       .catch(() => {
//         next({ name: "login" });
//       });
//   } else {
//     next();
//   }
// };

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
    children: [
      {
        path: "/d/e",
        name: "DashboardEvents",
        component: DashboardEvents,
      },
      {
        path: "/d/q",
        name: "DashboardQuestions",
        component: EventQuestions,
      },
      {
        path: "/d/s",
        name: "DashboardSettings",
        component: DashboardSettings,
      },
    ],
  },
  {
    path: "/verify/:token",
    name: "VerifyEmail",
    component: VerifyEmail,
    props: true,
  },
  {
    path: "/verify",
    name: "Verify",
    component: VerifySend,
    props: true,
  },
  {
    path: "/e",
    name: "Events",
    component: Events,
  },

  // mavjud bo'lmagan route
  { path: "/:pathMatch(.*)*", component: NotFonundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
