<template>
  <div>
    <v-img class="mx-auto my-6" max-width="200" src="@/assets/logo.png"></v-img>

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="530" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis"></div>

      <v-text-field v-model="email" density="compact" prepend-inner-icon="mdi-email-outline" variant="outlined"
        label="이메일" @keyup.enter="login()"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank"></a>
      </div>

      <v-text-field v-model="userPwd" :type="visible ? 'text' : 'userPwd'" density="compact" label="비밀번호"
        prepend-inner-icon="mdi-lock-outline" variant="outlined" :rules="[() => !!userPwd || '비밀번호를 입력해주세요.']"
        @keyup.enter="login()" required></v-text-field>

      <v-btn @click="sendLogin" block class="text-white mb-8" color="primary" size="large" variant="flat"
        :rules="[() => !!email || '아이디를 입력해주세요.']">
        로그인
      </v-btn>

      <div class="d-flex justify-center">
        <router-link class="navBar" to="/signup">
          회원가입
        </router-link>
        <a class="pr-3 pl-3">
          |
        </a>
        <v-dialog v-model="dialog" activator="parent" width="auto">
          <router-link class="navBar" to="">
            비밀번호 찾기
            <v-card>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-dialog>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAuthStore } from "@/store";

export default {
  data: () => ({
    email: "",
    userPwd: "",
    visible: false,
    dialog: false,
  }),
  computed: {
    ...mapState(useAuthStore, ["token"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["login"]),
    sendLogin() {
      this.login(this.email, this.userPwd).then(() => {
        if (this.token) {
          this.$router.push("/");
        }
      }
      )
    },

  },
  mounted() {
    // 이미 로그인한 유저일경우 메인으로 이동
    // token의 유무로 판단한다.
    // if (this.token) {
    //   this.$router.push("/");
    // }
  }
};
</script>
<style></style>
