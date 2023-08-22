<template>
  <v-container class="" padding="60px">
    <v-responsive class="fill-height">
      <v-row class="justify-center pt-3">
        <v-col cols="6">
          <div class="d-flex align-start">
            <span class="text">팬덤</span>
            <v-autocomplete
              density="compact"
              ref="star"
              v-model="star"
              prepend-inner-icon="mdi-star-outline"
              :items="stars"
              label="가수명"
              variant="outlined"
              required
            >
            </v-autocomplete>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-btn class="check" block rounded="lg" center size="large"
            >조회하기</v-btn
          >
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <v-container class="d-flex justify-center">
    <v-table class="table">
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      desserts: [
        {
          name: "가입한 회원 수",
          calories: 159,
        },
        {
          name: "탈퇴한 회원 수",
          calories: 237,
        },
        {
          name: "현재 총 회원 수",
          calories: 262,
        },
        {
          name: "최근 일주일 내에 가입한 회원 수",
          calories: 305,
        },
      ],
    };
  },
};
</script>

<style></style>
