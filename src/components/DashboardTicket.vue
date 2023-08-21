<template>
  <v-container class="fill-height" padding="60px">
    <v-responsive class="fill-height">
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <div class="d-flex align-center">
            <span class="text">티켓 판매율</span>
            <v-autocomplete
              density="compact"
              ref="star"
              v-model="star"
              prepend-inner-icon="mdi-star-outline"
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

      <v-container class="d-flex">
        <v-progress-circular
          color="#ff5252"
          model-value="60"
          :size="200"
          :width="30"
        ></v-progress-circular>
        <v-table class="table">
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-container>
    </v-responsive>
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

<style>
.text {
  margin-right: 20px;
  font-size: 35px;
}
.check {
  font-size: large;
  background-color: #ff5252;
  color: white;
}
.table {
  width: 60%;
  font-size: 20px;
  margin-left: 40px;
}
</style>
