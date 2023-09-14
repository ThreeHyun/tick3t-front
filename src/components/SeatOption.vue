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
          <v-row class="mb-3" v-for="seat in seats" :key="seat.grade">
            <v-col cols="3">
              <p class="pt-2">{{ seat.grade }}석</p>
            </v-col>
            <v-col cols="4">
              <p class="pt-2">{{ seat.price }}원</p>
            </v-col>
            <v-col cols="3"
              ><v-btn
                :key="seat.grade"
                :style="getButtonStyle(seat.grade)"
                @click="seatCheck(seat.gradeId, seat.totalSeat, seat.price)"
              >
                예매하기
              </v-btn></v-col
            >
            <v-dialog
              v-model="seatDialog"
              width="30%"
              height="60%"
              v-if="seatResultCode !== '0000'"
            >
              <v-card>
                <v-toolbar color="primary" title="Error"></v-toolbar>
                <v-card-text>
                  <div class="pa-11" style="font-size: 30px">
                    {{ seatMessage }}
                  </div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn variant="text" @click="closeDialog">Close</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>

          <v-row> </v-row>
        </div>
      </v-col>
      <v-col cols="1"> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useConcertStore } from "@/store";

export default {
  data: () => ({
    seatDialog: false,
  }),
  computed: {
    ...mapState(useConcertStore, ["concert"]),
    ...mapState(useConcertStore, ["seats"]),
    ...mapState(useConcertStore, ["orderResultCode"]),
    ...mapState(useConcertStore, ["orderMessage"]),
    ...mapState(useConcertStore, ["detailResultCode"]),
    ...mapState(useConcertStore, ["detailMessage"]),
    ...mapState(useConcertStore, ["seatResultCode"]),
    ...mapState(useConcertStore, ["seatMessage"]),
  },
  mounted() {
    this.detailConcert(this.$route.params.concertId);
    //this.fetchOrderCheck(this.$route.params.concertId);
  },

  methods: {
    ...mapActions(useConcertStore, ["detailConcert"]),
    ...mapActions(useConcertStore, ["fetchOrderCheck"]),
    ...mapActions(useConcertStore, ["fetchSeatCheck"]),

    async seatCheck(gradeId, totalSeat, price) {
      await this.fetchSeatCheck(
        this.concert.ticketId,
        this.concert.concertId,
        gradeId,
        totalSeat,
        price
      );
      if (this.seatResultCode === "0000") {
        this.$router.push("/reserved/" + this.concert.ticketId);
      } else if (this.seatResultCode === "6421") {
        alert("잔여석이 존재하지 않습니다.");
        this.$router.push("/concert/" + this.concert.concertId);
      } else {
        this.seatDialog = true;
        console.log(this.seatMessage);
      }
    },
    closeDialog() {
      this.seatDialog = false;
    },
    getButtonStyle(grade) {
      // seat.grade에 따라 버튼의 스타일을 동적으로 반환합니다.
      if (grade === "R") {
        return {
          backgroundColor: "#ff5252", // A 등급일 때 버튼 색상
          color: "white",
        };
      } else if (grade === "S") {
        return {
          backgroundColor: "#9C7D7D", // B 등급일 때 버튼 색상
          color: "white",
        };
      } else {
        return {
          backgroundColor: "#ECEF68", // B 등급일 때 버튼 색상
          color: "white",
        }; // 기본 스타일을 사용하거나 추가 등급에 따라 스타일을 추가로 설정할 수 있습니다.
      }
    },
  },
};
</script>

<style scoped></style>
