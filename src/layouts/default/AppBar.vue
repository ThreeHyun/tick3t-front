<template>
  <header>
    <div id="logo">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="logo" class="logo-img" />
      </router-link>
    </div>
    <v-breadcrumbs :items="before" divider=" "></v-breadcrumbs>
  </header>
</template>

<script>
import { mapState } from "pinia";
import { useAuthStore } from "@/store";

export default {
  name: "NavBar",
  computed: {
    ...mapState(useAuthStore, ["token"]),
    breadcrumbs() {
      if (this.token) {
        // 로그인한 경우
        return [
          {
            title: "마이페이지",
            disabled: false,
            href: "/mypage",
          },
          {
            title: "로그아웃",
            disabled: false,
            href: "/logout",
          },
        ];
      } else {
        // 로그인하지 않은 경우
        return [
          {
            title: "로그인",
            disabled: false,
            href: "/login",
          },
          {
            title: "회원가입",
            disabled: false,
            href: "/signup",
          },
        ];
      }
    },
  },
};
  // data: () => ({
  //   before: [
  //     {
  //       title: "로그인",
  //       disabled: false,
  //       href: "/login",
  //     },
  //     {
  //       title: "회원가입",
  //       disabled: false,
  //       href: "/signup",

  //     },
  //   ],
  // }),
// };
</script>

<style scoped>
.logo-img {
  max-width: 10%;
  padding-bottom: 40px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
}
</style>
