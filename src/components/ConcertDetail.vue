<template>
  <div :class="isMobile ? 'detail-container-moblie' : 'detail-container'">
    <div :class="!isMobile && 'fill-height'">
      <v-img class="calendar" width="400px" src="@/assets/calendar.png" />
      <div class="text2">2023-09-23 (토)</div>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-btn class="time" block rounded="0" size="small">17:00</v-btn>
        </v-col>
      </v-row>

      <div class="text3" style="display: flex; justify-content: space-between">
        <span>R석 140,000 원 (30석)</span>
        <span>S석 110,000 원 (50석)</span>
      </div>
      <span class="text3">A석 80,000 원 (70석)</span>

      <v-row justify="center">
        <v-col cols="12" sm="15" md="20">
          <v-btn
            class="reserve"
            block
            rounded="lg"
            center
            size="x-large"
            @click="goToSeat"
            >예매하기</v-btn
          >
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.fill-height {
  position: fixed;
}
</style>

<script>
export default {
  props: {
    isMobile: Boolean,
  },

  methods: {
    goToSeat() {
      this.$router.push("/seat");
    },
  },
};
</script>
