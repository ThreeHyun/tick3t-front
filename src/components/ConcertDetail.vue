<template>
  <div :class="isMobile ? 'detail-container-moblie' : 'detail-container'">
    <div :class="!isMobile && 'fill-height'">
      <div class="startTime">
        <b>예매 시작 : {{ concert.startDate }} </b>
      </div>
      <v-img class="calendar" width="400px" src="@/assets/calendar.png" />
      <div
        class="textdate"
        style="
          display: flex;
          justify-content: space-between;
          margin-bottom: 60px;
        "
      >
        <p>공연 날짜</p>
        <p>{{ concert.date }}</p>
        <v-btn class="time" rounded="0" size="small">17:00</v-btn>
      </div>
      <div class="text2 mb-3">잔여석</div>
      <div class="text3" v-for="seat in seats" :key="seat.grade">
        <span class="pr-5">{{ seat.grade }}석</span>
        <span class="pr-5">{{ seat.price }}원</span>
        <span>({{ seat.remainSeat }}/{{ seat.totalSeat }})석</span>
      </div>
      <v-row justify="center">
        <v-col cols="12" sm="15" md="20">
          <v-btn
            class="reserve"
            block
            rounded="lg"
            center
            size="x-large"
            @click="orderCheck"
            >예매하기</v-btn
          >
          <v-dialog
            v-model="orderDialog"
            width="30%"
            height="60%"
            v-if="orderResultCode !== '0000'"
          >
            <v-card>
              <v-toolbar color="primary" title="Error"></v-toolbar>
              <v-card-text>
                <div class="pa-11" style="font-size: 30px">
                  {{ orderMessage }}
                </div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn variant="text" @click="closeDialog">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.fill-height {
  position: fixed;
}
.startTime {
  background-color: #ff5252;
  color: white;
  padding: 5px;

  font-size: large;
  text-align: center;
}
.textdate {
  font-family: SpoqaHanSansNeo-Medium;
  font-size: x-large;
}
</style>

<script>
import { mapActions, mapState } from "pinia";
import { useConcertStore } from "@/store";
import { useAuthStore } from "@/store";

export default {
  data: () => ({
    orderDialog: false,
  }),
  computed: {
    ...mapState(useConcertStore, ["concert"]),
    ...mapState(useConcertStore, ["seats"]),
    ...mapState(useConcertStore, ["orderResultCode"]),
    ...mapState(useConcertStore, ["orderMessage"]),
    ...mapState(useConcertStore, ["detailResultCode"]),
    ...mapState(useConcertStore, ["detailMessage"]),
  },
  mounted() {
    this.detailConcert(this.$route.params.concertId);
    //this.fetchOrderCheck(this.$route.params.concertId);
  },
  props: {
    isMobile: Boolean,
  },

  methods: {
    ...mapActions(useConcertStore, ["detailConcert"]),
    ...mapActions(useConcertStore, ["fetchOrderCheck"]),

    orderCheck() {
      const authStore = useAuthStore();
      if (authStore.isAuthenticated) {
        this.fetchOrderCheck(this.concert.concertId);
        if (this.orderResultCode === "0000") {
          this.$router.push("/seat/" + this.concert.concertId);
        } else if (this.orderResultCode === "8888") {
          alert("로그인이 필요합니다.");
          this.$router.push("/login");
        } else {
          this.orderDialog = true;
          console.log(this.orderMessage);
        }
      } else {
        alert("로그인이 필요합니다.");
        this.$router.push("/login");
      }
    },
    closeDialog() {
      this.orderDialog = false;
    },
  },
};
</script>
