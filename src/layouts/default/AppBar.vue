<template>
  <header>
    <v-app-bar flat>
      <img src="@/assets/logo.png" alt="logo" class="logo-img" id="logo" />
      <div>
        <div class="nav-bar-button" v-if="!isMobile">
          <v-btn v-for="menuItem in menuItems.filter(({ isMenu }) => isMenu())" :key="menuItem.name" size="x-large"
            variant="text" @click="menuItem.function">
            {{ menuItem.name }}
          </v-btn>
        </div>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" v-else></v-app-bar-nav-icon>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :v-if="isMobile" location="top"
      style="top: 114px; height: inherit; box-shadow: none" temporary>
      <v-list>
        <v-list-item v-for="menuItem in menuItems.filter(({ isMenu }) => isMenu())" :key="menuItem.name">
          <v-btn size="x-large" variant="text" width="100%">
            {{ menuItem.name }}
          </v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/store";

export default {
  data() {
    return {
      drawer: false,
      isMobile: false,
      menuItems: [
        { name: "로그인", function: () => { this.$router.push("/login"); }, isMenu: () => !this.token },
        { name: "회원가입", function: () => { this.$router.push("/signup"); }, isMenu: () => !this.token },
        { name: "마이페이지", function: () => { this.$router.push("/mypage"); }, isMenu: () => !!this.token },
        { name: "로그아웃", function: () => this.logout(), isMenu: () => !!this.token },
      ]
    };
  },
  computed: {
    ...mapState(useAuthStore, ["token"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["logout"]),
    handleResize() {
      let width = window.innerWidth;
      if (width < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
  mounted() {
    console.log(this.token);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroy() {
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>

<style scoped>
.logo-img {
  width: calc(80px + 5%);
  max-width: 130px;
  padding-bottom: 10px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
}

.nav-bar-button {
  font-family: SpoqaHanSansNeo-Medium;
  font-size: 30px;
  color: black;
}
</style>
