// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "/",
        name: "main",
        component: () => import("@/views/MainView.vue"),
      },
      {
        path: "/concert",
        name: "concert",
        component: () => import("@/views/ConcertView.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("@/views/LoginView.vue"),
      },
      {
        path: "/signup",
        name: "signup",
        component: () => import("@/views/SignupView.vue"),
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/DashboardView.vue"),
      },
      {
        path: "/usermgmt",
        name: "usermgmt",
        component: () => import("@/views/UserManagementView.vue"),
      },
      {
        path: "/usermgmt/:userId",
        name: "userdetails",
        component: () => import("@/views/UserDetailsView.vue"),
      },
      {
        path: "/apitest",
        name: "apitest",
        component: () => import("@/views/ApiTest.vue"),
      },
      {
        path: "/mypage",
        name: "mypage",
        component: () => import("@/views/MyPageView.vue"),
      },
      {
        path: "/reserved",
        name: "reserved",
        component: () => import("@/views/ReservedView.vue"),
      },
      {
        path: "/seat",
        name: "seat",
        component: () => import("@/views/SeatView.vue"),
      },

    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
