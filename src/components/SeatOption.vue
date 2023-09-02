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
      <v-col cols="4">
        <div class="mt-10 pt-5">
          <v-row class="mb-5">
            <v-radio-group>
              <v-row>
                <v-col cols="2"
                  ><v-radio label="R석" value="1"></v-radio
                ></v-col>
                <v-col cols="1" class="pt-5"><canvas id="canv1"></canvas></v-col
                ><v-col class="pt-5">90,000원</v-col>
              </v-row>
              <v-row>
                <v-col cols="2"
                  ><v-radio label="S석" value="2"></v-radio
                ></v-col>
                <v-col cols="1" class="pt-5"><canvas id="canv2"></canvas></v-col
                ><v-col class="pt-5">150,000원</v-col>
              </v-row>
              <v-row>
                <v-col cols="2"
                  ><v-radio label="A석" value="3"></v-radio
                ></v-col>
                <v-col cols="1" class="pt-5"><canvas id="canv3"></canvas></v-col
                ><v-col class="pt-5">110,000원</v-col>
              </v-row>
            </v-radio-group>
          </v-row>
          <v-row>
            <v-btn class="check" @click="goToReserved"> 예매하기 </v-btn>
          </v-row>
        </div>
      </v-col>
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

<style scoped>
#canv1 {
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #fb5555;
  background: #fb5555;
  display: block;
}
#canv2 {
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #9c7d7d;
  background: #9c7d7d;
  display: block;
}
#canv3 {
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #ecef68;
  background: #ecef68;
  display: block;
}
</style>
