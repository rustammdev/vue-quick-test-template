import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import DashboardView from "../views/DashboardView.vue";
import NotFonundView from "../views/NotFoundView.vue";
import VerifySend from "../views/VerifySend.vue";
import VerifyEmail from "../views/VerifyEmail.vue";
import Events from "../views/Events.vue";
import DashboardEvents from "../components/events/DashboardEvents.vue";
import SendQuestions from "../components/events/SendQuestion.vue";
import DashboardSettings from "../components/Settings.vue";

const auth = async (to, from, next) => {
  if (to.name === "Dashboard") {
    const res = await fetch("http://localhost:7000/api/auth/check", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.authenticated) {
          localStorage.setItem("isAuthenticated", "true");
          next();
        } else {
          localStorage.removeItem("isAuthenticated");
          next({ name: "login" });
        }
      })
      .catch(() => {
        next({ name: "login" });
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
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardView,
    beforeEnter: auth,
    children: [
      {
        path: "/dashboard/events",
        name: "DashboardEvents",
        component: DashboardEvents,
      },
      // {
      //   path: "/d/q",
      //   name: "DashboardQuestions",
      //   component: EventQuestions,
      // },
      {
        path: "/dashboard/settings",
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
    path: "/events",
    name: "Events",
    component: Events,
  },
  {
    path: "/events/:id",
    name: "SendQuestion",
    component: SendQuestions,
  },

  // mavjud bo'lmagan route
  { path: "/:pathMatch(.*)*", component: NotFonundView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
