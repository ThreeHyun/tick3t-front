<template>
  <div>
    <v-img class="mx-auto my-6" max-width="150" src="@/assets/logo.png" @click="goToHomePage"
      style="cursor: pointer"></v-img>

    <v-card class="mx-auto pa-12 pb-4" elevation="8" max-width="530" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis"></div>

      <v-text-field v-model="email" density="compact" prepend-inner-icon="mdi-email-outline" variant="outlined"
        placeholder="예) tick3t@tick-3t.com" label="이메일" type="email" required @input="emailValid"
        @keyup.enter="sendSignup"></v-text-field>
      <div class="pb-5" v-if="!emailValidFlag && email !== ''" style="color: red; font-size: 14px">
        올바르지 않은 이메일 형식입니다.
      </div>

      <v-text-field v-model="userPwd" :type="visible ? 'text' : 'password'" density="compact" label="비밀번호"
        prepend-inner-icon="mdi-lock-outline" variant="outlined" maxlength="16" @input="userPwdValid" required
        @keyup.enter="sendSignup"></v-text-field>
      <div class="pb-5" v-if="!userPwdValidFlag && userPwd !== ''" style="color: red; font-size: 14px">
        8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.
      </div>

      <v-text-field v-model="userPwdCheck" :type="visible ? 'text' : 'password'" density="compact"
        prepend-inner-icon="mdi-lock-outline" variant="outlined" label="비밀번호 확인" maxlength="16" @keyup.enter="sendSignup"
        @input="userPwdCheckValid" required></v-text-field>
      <div class="pb-2" v-if="!userPwdCheckFlag" style="color: red; font-size: 14px">
        비밀번호가 동일하지 않습니다.
      </div>

      <div class="text-subtitle-2 text-medium-emphasis"></div>

      <v-text-field class="pt-3" v-model="name" density="compact" prepend-inner-icon="mdi-account-outline"
        variant="outlined" label="이름" required @keyup.enter="sendSignup"></v-text-field>

      <div class="text-subtitle-3 text-medium-emphasis"></div>

      <v-text-field v-model="birth" density="compact" prepend-inner-icon="mdi-calendar-outline" placeholder="YYYY-MM-DD"
        variant="outlined" label="생년월일" required @keyup.enter="sendSignup"></v-text-field>

      <v-autocomplete v-model="fanCd" density="compact" ref="star" prepend-inner-icon="mdi-star-outline" :items="stars"
        label="가수" variant="outlined" required @keyup.enter="sendSignup"></v-autocomplete>

      <v-btn @click="sendSignup" block class="text-white mb-8" color="primary" size="large" variant="flat" :disabled="email && userPwd && userPwdCheck && name && birth && fanCd === ''
        ">
        가입완료
      </v-btn>
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
    name: "",
    birth: "",
    fanCd: "",
    visible: false,
    userPwdValidFlag: true,
    userPwdCheck: "",
    userPwdCheckFlag: true,
    stars: [
      "IU",
      "규현"
    ],
  }),

  computed: {
    ...mapState(useAuthStore, ["token"]),
  },
  methods: {
    goToHomePage() {
      this.$router.push("/");
    },
    emailValid() {
      if (
        /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/.test(
          this.email
        )
      ) {
        this.emailValidFlag = true;
      } else {
        this.emailValidFlag = false;
      }
    },
    userPwdValid() {
      if (
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,16}$/.test(
          this.userPwd
        )
      ) {
        this.userPwdValidFlag = true;
      } else {
        this.userPwdValidFlag = false;
      }
    },
    userPwdCheckValid() {
      if (this.userPwd === this.userPwdCheck) {
        this.userPwdCheckFlag = true;
      } else {
        this.userPwdCheckFlag = false;
      }
    },
    ...mapActions(useAuthStore, ["signup"]),
    sendSignup() {
      this.signup(this.email, this.userPwd, this.name, this.birth, this.fanCd);
    },
  },
  mounted() {
    // 이미 로그인한 유저일경우 메인으로 이동
    // token의 유무로 판단한다.
    console.log(this.token);
  },
};
</script>

<style>
.v-input_details {
  min-height: 0px;
  padding-top: 0px;
}
</style>
