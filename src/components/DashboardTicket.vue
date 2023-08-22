<template>
  <v-container class="" padding="60px">
    <v-responsive class="fill-height">
      <v-row class="justify-center pt-3">
        <v-col cols="8">
          <div class="d-flex align-start">
            <span class="text">티켓 판매율</span>
            <v-autocomplete
              density="compact"
              ref="star"
              v-model="star"
              prepend-inner-icon="mdi-ticket-outline"
              :items="stars"
              label="공연명"
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
    <v-progress-circular
      color="primary"
      model-value="60"
      :size="200"
      :width="30"
    ></v-progress-circular>
    <div class="space-between"></div>
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
          name: "전체 좌석 수",
          calories: 159,
        },
        {
          name: "판매된 좌석 수",
          calories: 237,
        },
        {
          name: "잔여석",
          calories: 262,
        },
      ],
    };
  },
};
</script>
