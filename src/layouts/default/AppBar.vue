<template>
  <div class="NavBar">
    <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
  </div>
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
        color: "#ff5252",
      },
    ],
  }),
};
</script>

<style scoped>
.NavBar {
  font-family: SpoqaHanSansNeo-Regular;
  display: flex;
  justify-content: right;
  align-items: right;
}
</style>
