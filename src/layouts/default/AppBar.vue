<template>
  <header>
    <div id="logo">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="logo" class="logo-img" />
      </router-link>
    </div>
    <v-breadcrumbs class="NavBar" :items="items" divider="-"> </v-breadcrumbs>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    items: [
      {
        title: "로그인",
        disabled: false,
        href: "/login",
      },
      {
        title: "회원가입",
        disabled: false,
        href: "/signup",
        color: "primary",
      },
    ],
  }),
};
</script>

<style scoped>
.logo-img {
  max-width: 20%;
}
.NavBar {
  font-family: SpoqaHanSansNeo-Regular;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
}
</style>
