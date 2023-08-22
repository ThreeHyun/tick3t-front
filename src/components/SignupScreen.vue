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

      <div
        class="text-subtitle-2 text-medium-emphasis d-flex align-center justify-space-between"
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
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        label="비밀번호 확인"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <div class="text-subtitle-2 text-medium-emphasis"></div>

      <v-text-field
        density="compact"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
        label="이름"
      ></v-text-field>

      <div class="text-subtitle-3 text-medium-emphasis"></div>

      <v-text-field
        density="compact"
        prepend-inner-icon="mdi-calendar-outline"
        placeholder="YYYY-MM-DD"
        variant="outlined"
        label="생년월일"
      ></v-text-field>

      <v-autocomplete
        density="compact"
        ref="star"
        v-model="star"
        prepend-inner-icon="mdi-star-outline"
        :items="stars"
        label="가수"
        variant="outlined"
        required
      ></v-autocomplete>

      <v-btn
        block
        class="text-white mb-8"
        color="primary"
        size="large"
        variant="flat"
        href="@/componr"
      >
        가입완료
      </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    visible: false,
    stars: [
      "규현",
      "김래빈",
      "남예준",
      "도은호",
      "류청우",
      "박문대",
      "배세진",
      "선아현",
      "아이유",
      "유하민",
      "이세진",
      "차유진",
      "채봉구",
      "한노아",
    ],
    data() {
      return {
        checkbox: false,
      };
    },
    errorMessages: "",
    name: null,
    address: null,
    city: null,
    state: null,
    zip: null,
    star: null,
    formHasErrors: false,
  }),
};
</script>
<style></style>
