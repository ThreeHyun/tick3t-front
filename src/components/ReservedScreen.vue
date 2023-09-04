<template>
  <v-container style="text-align: center">
    <h2 style="padding: 15px">예매 내역</h2>
    <hr style="border: 2px double" />
  </v-container>
  <v-container v-if="resultCode !== '0000'" style="text-align: center">
    <h1>{{ message }}</h1>
  </v-container>
  <v-container v-else>
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
        <v-btn class="check2" size="small" v-if="ticket.payState === '1' || ticket.payState == '0'"
          @click="confirmCancel">
          취소하기
        </v-btn>
        <br />
        <h4>예매 상태</h4>
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
        <div style="background-color: lightgray; padding: 10px; margin-right: 40px">
          <p style="padding-bottom: 5px">결제 기한 : {{ ticket.payDtm }}</p>
        </div>
        <hr style="border: 5px" />
        <p>{{ ticket.cancelDate }}</p>
        <br />
        <p v-if="ticket.payState === '0'">결제대기</p>
        <p v-if="ticket.payState === '1'">예매완료</p>
        <p v-if="ticket.payState === '2'">예매취소</p>
        <p v-if="ticket.payState === '3'">결제취소</p>
      </div>
      <div class="flex-item4">
        <p>총 결제 금액</p>
        <h1 style="color: #ff5252">{{ ticket.price }} 원</h1>
        <br />
        <hr />
        <br />
        <v-btn class="check" center size="large" @click="goToMypage">마이페이지</v-btn><br /><br />
        <v-btn class="check" center size="large" @click="openPaymentDialog" v-if="ticket.payState === '0'">
          결제하기
        </v-btn>
        <v-dialog v-model="paymentDialog" max-width="600px">
          <v-card>
            <v-card-title>TICK3T pay</v-card-title>
            <v-card-text>
              <br />
              <h4 style="display: flex; justify-content: space-between">
                <span>결제 내용 확인</span>
                <span>결제 금액 : {{ ticket.price }} 원</span>
              </h4>
              <br />
              <hr />
              <br />
              <table style="border-collapse: separate; border-spacing: 0 10px">
                <tr style="margin-bottom: 10px">
                  <td class="text-left" width="20%">결제 카드</td>
                  <td class="text-left" width="80%">우리카드</td>
                </tr>
                <tr>
                  <td class="text-left" width="20%">할부 개월</td>
                  <td class="text-left" width="80%">일시불</td>
                </tr>
                <tr>
                  <td class="text-left" width="20%">카드 번호</td>
                  <td class="text-center" width="80%">
                    <div style="display: flex; justify-content: left">
                      <input style="width: 10%; border: 1px solid" maxlength="4" type="text" />-
                      <input style="width: 10%; border: 1px solid" maxlength="4" type="text" />-
                      <input style="width: 10%; border: 1px solid" maxlength="4" type="text" />-
                      <input style="width: 10%; border: 1px solid" maxlength="4" type="text" />
                    </div>
                  </td>
                </tr>
              </table>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closePaymentDialog">
                  취소
                </v-btn>
                <v-btn color="blue darken-1" @click="goToPay"> 확인 </v-btn>
              </v-card-actions>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useTicketStore } from "@/store";
import { useUserStore } from "@/store";
export default {
  data() {
    return {
      paymentDialog: false,
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
    ...mapState(useTicketStore, ["ticket"]),
    ...mapState(useTicketStore, ["resultCode"]),
    ...mapState(useTicketStore, ["message"]),
  },
  methods: {
    ...mapActions(useTicketStore, ["detailOrder", "cancel", "payment"]),
    goToMypage() {
      this.$router.push("/mypage");
    },
    confirmCancel() {
      if (confirm("예매를 취소하시겠습니까?")) {
        this.goToCancel();
      }
    },
    openPaymentDialog() {
      this.paymentDialog = true;
    },

    closePaymentDialog() {
      this.paymentDialog = false;
    },
    goToPay() {
      this.payment(this.ticket.ticketId);
      this.ticket.payState = "1";
      this.paymentDialog = false;
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