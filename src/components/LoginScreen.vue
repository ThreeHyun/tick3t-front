<template>
  <div>
    <v-img class="mx-auto my-6" max-width="228" src="@/assets/logo.png"></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis"></div>

      <v-text-field
        density="compact"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        label="이메일"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        ></a>
      </div>

      <v-text-field
        :type="visible ? 'text' : 'password'"
        density="compact"
        label="비밀번호"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <!-- <v-card class="mb-12" color="surface-variant" variant="tonal">
          <v-card-text class="text-medium-emphasis text-caption">
            Warning: After 3 consecutive failed login attempts, you account will
            be temporarily locked for three hours. If you must login now, you can
            also click "Forgot login password?" below to reset the login password.
          </v-card-text>
        </v-card> -->

      <v-btn
        block
        class="text-white mb-8"
        color="primary"
        size="large"
        variant="flat"
      >
        로그인
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-black text-decoration-none"
          href="/signup"
          rel="noopener noreferrer"
          target="_blank"
        >
          회원가입 <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: false,
  }),
};
</script>
<style></style>
