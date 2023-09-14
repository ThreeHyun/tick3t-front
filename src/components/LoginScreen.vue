<template>
  <div>
    <v-img class="mx-auto my-6" max-width="200" src="@/assets/logo.png" @click="goToHomePage"
      style="cursor: pointer;"></v-img>

    <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="530" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis"></div>

      <v-text-field v-model="email" density="compact" prepend-inner-icon="mdi-email-outline" variant="outlined"
        label="이메일" @keyup.enter="login()"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank"></a>
      </div>

      <v-text-field v-model="userPwd" :type="visible ? 'text' : 'password'" density="compact" label="비밀번호"
        prepend-inner-icon="mdi-lock-outline" variant="outlined" required></v-text-field>

      <v-btn @click="sendLogin" block class="text-white mb-8" color="primary" size="large" variant="flat"
        :disabled="email && userPwd === ''">
        로그인
      </v-btn>

      <div class="d-flex justify-center">
        <router-link class="navBar" to="/signup" style="color: black; text-decoration: none;">
          회원가입
        </router-link>
        <a class="pr-3 pl-3">
          |
        </a>
        <v-dialog v-model="dialog1" persistent width="800">
          <template v-slot:activator="{ props }">
            <a v-bind="props" style="cursor: pointer; color: black">
              비밀번호 재발급
            </a>
          </template>
          <v-card>
            <v-card-title class="ma-5">
              <span class="text-h5">비밀번호 재발급</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col class="pt-5" cols="4">
                    이메일
                  </v-col>
                  <v-col cols="8">
                    <v-text-field label="이메일" variant="outlined" v-model="email"></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="pt-5" cols="4">
                    이름
                  </v-col>
                  <v-col cols="8">
                    <v-text-field label="이름" variant="outlined" v-model="name" />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="pt-5" cols="4">
                    생년월일
                  </v-col>
                  <v-col cols="8">
                    <v-text-field label="생년월일" variant="outlined" v-model="birth" placeholder="YYYY-MM-DD"></v-text-field>
                  </v-col>
                </v-row>

              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#000000" variant="text" @click="cancel">
                취소
              </v-btn>
              <v-btn color="#ff5252" variant="text" @click="getPwd">
                재발급
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialog2" width="auto">
          <v-card>
            <v-card-title>
            </v-card-title>
            <v-card-text class="pt-10 pr-10 pl-10 pb-10">
              <v-row v-if="auth.resultCode === '0000'" class="justify-end" style="color: blue">
                {{ auth.message }}</v-row>
              <v-row v-else class="justify-end" style="color: red">
                {{ auth.message }}</v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#000000" variant="text" @click="close">
                닫기
              </v-btn>
            </v-card-actions>
          </v-card>
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
    name: "",
    birth: "",
    userPwd: "",
    visible: false,
    dialog1: false,
    dialog2: false,
  }),
  computed: {
    ...mapState(useAuthStore, ["token", "auth"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["login", "findPwd"]),
    sendLogin() {
      this.login(this.email, this.userPwd).then(() => {
        if (this.token) {
          this.$router.push("/");
        }
      })
    },
    goToHomePage() {
      this.$router.push("/");
    },
    getPwd() {
      this.findPwd(
        this.email,
        this.name,
        this.birth,
      );
      setTimeout(() => {
        this.dialog2 = true;
      }, 1000);
    },
    cancel() {
      this.email = "";
      this.name = "";
      this.birth = "";
      this.dialog1 = false
    },
    close() {
      this.email = "";
      this.name = "";
      this.birth = "";
      this.dialog1 = false;
      this.dialog2 = false;
    }
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
