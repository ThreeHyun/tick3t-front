<template>
  <v-container>
    <div class="text1 d-flex justify-center">회원 정보 조회</div>
    <hr class="line" />
  </v-container>
  <v-container class="d-flex justify-center">
    <v-list class="mr-10" lines="two">
      <v-list-item v-for="n in 7" :key="n" :title="'Item ' + n"></v-list-item>
    </v-list>
    <v-list class="ml-10" lines="two">
      <v-list-item v-for="n in 7" :key="n" :title="'Item ' + n"></v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "이메일",
          calories: "zhzheldeld00@gmail.com",
        },
        {
          name: "이름",
          calories: "박정현",
        },
        {
          name: "생년월일",
          calories: "97.05.11",
        },
        {
          name: "팬클럽 회원 번호",
          calories: 305,
        },
        {
          name: "팬덤 코드",
          calories: 305,
        },
        {
          name: "가입일",
          calories: "23.08.02",
        },
        {
          name: "회원 상태",
          calories: "로그인",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-container {
  max-width: 500px;
}
.text1 {
  color: #ff5252;
}
.line {
  border-color: #ff5252;
}
.table {
  font-size: 20px;
}
</style>
