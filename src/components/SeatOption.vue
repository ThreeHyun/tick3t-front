<template>
  <v-container>
    <div class="ma-4">
      <h3 style="font-size: 40px; text-align: center">좌석 선택</h3>
    </div>
  </v-container>
  <v-container>
    <v-row>
      <v-col cols="8">
        <div class="d-flex justify-center align-center">
          <v-img src="@/assets/seat.png" style="max-width: 70%"></v-img>
        </div>
      </v-col>
      <!-- <v-col cols="1"></v-col> -->
      <v-col cols="3">
        <div class="mt-10 pt-5">
          <v-row class="mb-3">
            <v-col cols="3"><p class="pt-2">R석</p></v-col>
            <v-col cols="4"><p class="pt-2">90,000원</p></v-col>
            <v-col cols="3"
              ><v-btn
                :key="R"
                style="background-color: #ff5252; color: white"
                @click="goToReserved()"
              >
                예매하기
              </v-btn></v-col
            >
          </v-row>
          <v-row class="mb-3">
            <v-col cols="3"><p class="pt-2">S석</p></v-col>
            <v-col cols="4"><p class="pt-2">150,000원</p></v-col>
            <v-col cols="3"
              ><v-btn
                :key="S"
                style="background-color: #9c7d7d; color: white"
                @click="goToReserved()"
              >
                예매하기
              </v-btn></v-col
            >
          </v-row>
          <v-row class="mb-3">
            <v-col cols="3"><p class="pt-2">A석</p></v-col>
            <v-col cols="4"><p class="pt-2">110,000원</p></v-col>
            <v-col cols="3"
              ><v-btn
                :key="A"
                style="background-color: #ecef68; color: white"
                @click="goToReserved()"
              >
                예매하기
              </v-btn></v-col
            >
          </v-row>

          <v-row> </v-row>
        </div>
      </v-col>
      <v-col cols="1"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),

  methods: {
    goToReserved() {
      this.$router.push("/reserved");
    },
  },
};
</script>

<style scoped></style>
