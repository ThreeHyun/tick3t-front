<template>
  <v-container style="text-align: center">
    <h2 style="padding: 15px">예매 내역</h2>
    <hr style="border: 2px double" />
  </v-container>
  <v-container>
    <div class="flex-container">
      <div class="flex-item1">
        <v-img class="poster" src="@/assets/poster.jpg" />
      </div>
      <div class="flex-item2">
        <h4>예매번호</h4>
        <br />
        <h4>상품명</h4>
        <br />
        <h4>공연장</h4>
        <br />
        <h4>관람 일시</h4>
        <br />
        <h4>좌석</h4>
        <br />
        <h4>수령 방법</h4>
        <br />
        <h4>결제 수단</h4>
        <br /><br />
        <h4>취소 가능 일시</h4>
        <v-btn
          class="check2"
          size="small"
          v-if="ticket.payState === '1' || ticket.payState == '0'"
          @click="goToCancel"
        >
          취소하기
        </v-btn>
      </div>
      <div class="flex-item3">
        <p>{{ ticket.ticketId }}</p>
        <br />
        <p>{{ ticket.title }}</p>
        <br />
        <p>{{ ticket.location }}</p>
        <br />
        <p>{{ ticket.datetime }}</p>
        <br />
        <p>{{ ticket.seat }}</p>
        <br />
        <p>현장 수령</p>
        <br />
        <p>카드 결제</p>
        <div
          style="background-color: lightgray; padding: 10px; margin-right: 40px"
        >
          <p>결제 기한 : {{ ticket.payDtm }}</p>
        </div>
        <hr style="border: 5px" />
        <p>{{ ticket.cancelDate }}</p>
        <br />
      </div>
      <div class="flex-item4">
        <p>총 결제 금액</p>
        <h1 style="color: ff5252">{{ ticket.price }} 원</h1>
        <br />
        <hr />
        <br />
        <v-btn class="check" center size="large" @click="goToMypage"
          >마이페이지</v-btn
        ><br /><br />
        <v-btn
          class="check"
          center
          size="large"
          @click="goToPay"
          v-if="ticket.payState === '0'"
          >결제하기</v-btn
        >
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useOrderStore } from "@/store";
import { useUserStore } from "@/store";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
    ...mapState(useOrderStore, ["ticket"]),
  },
  methods: {
    ...mapActions(useOrderStore, ["detailOrder", "cancel", "payment"]),
    goToMypage() {
      this.$router.push("/mypage");
    },
    goToPay() {
      this.payment(this.ticket.ticketId);
      this.ticket.payState = "1";
    },
    goToCancel() {
      this.cancel(this.ticket.ticketId);
      this.ticket.payState = "3";
    },
  },
  mounted() {
    this.detailOrder(this.$route.params.ticketId);
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
}
.flex-item1 {
  width: 25%;
}
.flex-item2 {
  width: 10%;
  text-align: center;
}
.flex-item3 {
  width: 30%;
  border-right: thin solid darkgray;
}
.flex-item4 {
  width: 20%;
  text-align: center;
}
.clickButton {
  background-color: #ff5252;
  color: white;
}
</style>
