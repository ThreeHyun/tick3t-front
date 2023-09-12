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
  {
    path: "/",
    component: () => import("@/layouts/admin/AdminLayout.vue"),
    children: [
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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth) {
    if (authStore.isAuthenticated) {
      if (to.meta.role === "ROLE_ADMIN") {
        await authStore.checkAuth().then(() => {
          if (authStore.role === "ROLE_ADMIN") {
            next();
          } else {
            window.alert("어드민 유저가 아니잖아요...");
            next({ path: "/" });
          }
        });
      } else if (to.meta.role === "ROLE_USER") {
        await authStore.checkAuth().then(() => {
          if (authStore.role === "ROLE_USER") {
            next();
          } else {
            window.alert("유저가 아니잖아요...");
            next({ path: "/" });
          }
        });
      }
    } else {
      next("/login");
    }
  } else {
    if (to.path === "/") {
      await authStore.checkAuth().then(() => {
        if (authStore.role === "ROLE_ADMIN") {
          next({ path: "/dashboard" });
        } else {
          next();
        }
      });
    } else {
      next();
    }
  }
});

export default router;
