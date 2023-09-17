<template>
  <v-app>
    <header>
      <v-app-bar flat>
        <img src="@/assets/logo.png" alt="logo" class="logo-img" id="logo" @click="goToDashboard" />
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
          <v-dialog v-model="logoutDialog" max-width="400px">
            <v-card class="text2" style="font-size: large; align-items: center">
              <v-card-title></v-card-title>
              <v-card-text>로그아웃 하시겠습니까?</v-card-text>
              <v-card-actions>
                <v-btn class="pr-15 pl-15" @click="logoutDialog = false">취소</v-btn>
                <v-btn class="pr-15 pl-15" @click="goToLogout" style="color: #ff5252;">확인</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-list>
      </v-navigation-drawer>
    </header>
    <default-view />
  </v-app>
</template>

<script setup>
import DefaultView from "../default/View.vue";
</script>

<script>
import { mapState, mapActions } from "pinia";
import { useAuthStore } from "@/store";

export default {
  data() {
    return {
      drawer: false,
      isMobile: false,
      logoutDialog: false,
      menuItems: [
        { name: "로그인", function: () => { this.$router.push("/login"); }, isMenu: () => !this.token },
        { name: "회원가입", function: () => { this.$router.push("/signup"); }, isMenu: () => !this.token },
        { name: "사용자 조회", function: () => { this.$router.push("/usermgmt"); }, isMenu: () => this.showUsermgmtAndLogout },
        { name: "대시보드", function: () => { this.$router.push("/dashboard"); }, isMenu: () => this.showDashboardAndLogout },
        { name: "로그아웃", function: () => { this.confirmLogout(); }, isMenu: () => !!this.token },
      ]
    };
  },
  computed: {
    ...mapState(useAuthStore, ["token"]),
    showUsermgmtAndLogout() {
      return this.$route.path === "/dashboard";
    },
    showDashboardAndLogout() {
      return this.$route.path === "/usermgmt";
    }
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
    goToDashboard() {
      this.$router.push("/dashboard");
    },
    goToLogout() {
      this.logout();
      this.logoutDialog = false;
      this.$router.push("/");

    },
    confirmLogout() {
      this.logoutDialog = true;
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
}
</script>

<style scoped>
.logo-img {
  width: calc(80px + 5%);
  max-width: 130px;
  padding-bottom: 10px;
  cursor: pointer;

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