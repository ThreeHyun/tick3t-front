// Composables
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/store";

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
        path: "/concert/:concertId",
        name: "concertdetails",
        component: () => import("@/views/ConcertView.vue"),
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/DashboardView.vue"),
        meta: { requiresAuth: true, role: "ROLE_ADMIN" },
      },
      {
        path: "/usermgmt",
        name: "usermgmt",
        component: () => import("@/views/UserManagementView.vue"),
        meta: { requiresAuth: true, role: "ROLE_ADMIN" },
      },
      {
        path: "/usermgmt/:userId",
        name: "userdetails",
        component: () => import("@/views/UserDetailsView.vue"),
        meta: { requiresAuth: true, role: "ROLE_ADMIN" },
      },
      {
        path: "/mypage",
        name: "mypage",
        component: () => import("@/views/MyPageView.vue"),
        meta: { requiresAuth: true, role: "ROLE_USER" },
        props: true,
      },
      {
        path: "/reserved/:ticketId",
        name: "reserved",
        component: () => import("@/views/ReservedView.vue"),
        meta: { requiresAuth: true, role: "ROLE_USER" },
      },
      {
        path: "/seat/:concertId",
        name: "seat",
        component: () => import("@/views/SeatView.vue"),
        meta: { requiresAuth: true, role: "ROLE_USER" },
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/auth/AuthLayout.vue"),
    children: [
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore(); // useAuthStore를 사용
  if (to.name === "main" && authStore.role === "ROLE_ADMIN") {
    return next({ path: "/dashboard" });
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    // 로그인이 필요한 페이지인지 확인
    return next({ path: "/login" }); // 로그인 페이지로 리다이렉트
  }

  if (to.meta.role && authStore.role !== to.meta.role) {
    // 특정 역할이 필요한 경우
    return next({ path: "/" }); // 권한이 없으면 unauthorized 페이지로 이동
  }

  next();
});

export default router;
