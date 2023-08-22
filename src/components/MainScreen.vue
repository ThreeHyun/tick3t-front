<template>
  <v-container>
    <v-row>
      <v-col v-for="n in 3" :key="n" cols="12" md="4">
        <div>
          <v-card class="mx-auto" max-height="800" v-bind="props">
            <v-parallax src="@/assets/poster.jpg" max-height="400"></v-parallax>

            <v-card-text>
              <h3 class="text-h6 mb-3">2023 TESTAR 10th CONCERT</h3>
              <hr />

              <div class="font-weight-light text-h8 mt-2 mb-5">
                <span style="float: left">2023-09-23</span>
                <span style="float: right">잠실 실내체육관</span>
              </div>
            </v-card-text>
          </v-card>

          <v-btn
            class="reserve"
            block
            rounded="lg"
            center
            size="x-large"
            @click="goToPerformance"
            >예매하기</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    goToPerformance() {
      this.$router.push("/concert");
    },
  },
};
</script>

<style></style>
