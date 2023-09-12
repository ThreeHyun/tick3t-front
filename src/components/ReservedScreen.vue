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
        <v-img class="poster" :src="ticket.imgUrl" />
      </div>
      <div class="flex-item2">
        <h4>예매번호</h4>

        <br />
        <h4>상품명</h4>
        <br />
        <h4>공연장 주소</h4>
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
        <br />
        <h4>결제 기한</h4>
        <br />
        <h4>예매 상태</h4>
        <br />
        <h4>취소 가능 일시</h4>
        <br />
      </div>
      <div class="flex-item3">
        <p>{{ ticket.ticketId }}</p>
        <br />
        <p>{{ ticket.title }}</p>
        <br />
        <p>{{ ticket.location }}</p>
        <br />
        <p>{{ ticket.hallName }}</p>
        <br />
        <p>{{ ticket.datetime }}</p>
        <br />
        <p>{{ ticket.grade }}구역 {{ ticket.seat }}번</p>
        <br />
        <p>현장 수령</p>
        <br />
        <p>카드 결제</p>
        <br />
        <p>{{ ticket.payDtm }}</p>
        <br />
        <p>{{ paymentStatus }}</p>
        <br />
        <div style="display: flex; align-items: center">
          <p style="margin-right: 1em">{{ ticket.cancelDate }}</p>
          <v-btn
            class="check"
            size="small"
            :disabled="isAfterCancelDtm"
            v-if="ticket.payState === '1' || ticket.payState == '0'"
            @click="confirmCancel"
          >
            취소하기
          </v-btn>
        </div>
        <br />
      </div>
      <div class="flex-item4">
        <p>총 결제 금액</p>
        <h1 style="color: #ff5252">{{ ticket.price }} 원</h1>
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
          :disabled="isAfterPayDtm"
          @click="openPaymentDialog"
          v-if="ticket.payState === '0'"
        >
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
                      <input
                        v-model="firstPart"
                        style="width: 10%; border: 1px solid"
                        maxlength="4"
                        type="text"
                        @keypress="isNumberKey"
                      />-
                      <input
                        v-model="secondPart"
                        style="width: 10%; border: 1px solid"
                        maxlength="4"
                        type="text"
                        @keypress="isNumberKey"
                      />-
                      <input
                        v-model="thirdPart"
                        style="width: 10%; border: 1px solid"
                        maxlength="4"
                        type="text"
                        @keypress="isNumberKey"
                      />-
                      <input
                        v-model="fourthPart"
                        style="width: 10%; border: 1px solid"
                        maxlength="4"
                        type="text"
                        @keypress="isNumberKey"
                      />
                    </div>
                  </td>
                </tr>
              </table>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closePaymentDialog">
                  취소
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  @click="goToPay"
                  :disabled="!isValid"
                >
                  확인
                </v-btn>
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
      firstPart: "",
      secondPart: "",
      thirdPart: "",
      fourthPart: "",
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
    ...mapState(useTicketStore, ["ticket"]),
    ...mapState(useTicketStore, ["resultCode"]),
    ...mapState(useTicketStore, ["payResultCode"]),
    ...mapState(useTicketStore, ["message"]),
    isAfterPayDtm() {
      const currentDateTime = new Date();
      const payDateTime = new Date(this.ticket.payDtm);
      return currentDateTime > payDateTime;
    },
    isAfterCancelDtm() {
      const currentDateTime = new Date();
      const cancelDateTime = new Date(this.ticket.cancelDate);
      return currentDateTime > cancelDateTime;
    },
    paymentStatus() {
      const statuses = {
        0: "결제대기",
        1: "예매완료",
        2: "예매취소",
        3: "결제취소",
      };
      return statuses[this.ticket.payState];
    },
    isValid() {
      return [
        this.firstPart,
        this.secondPart,
        this.thirdPart,
        this.fourthPart,
      ].every((num) => num.length === 4);
    },
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
    async goToPay() {
      await this.payment(this.ticket.ticketId);
      if (this.payResultCode === "0000") {
        alert("결제에 성공하였습니다.");
        this.ticket.payState = "1";
      }
      this.paymentDialog = false;
    },
    goToCancel() {
      this.cancel(this.ticket.ticketId);
      if (this.payResultCode === "0000") {
        alert("취소에 성공하였습니다.");
        this.ticket.payState = "3";
      }
    },
    isNumberKey(evt) {
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      }
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

.check {
  background-color: #ff5252;
  color: white;
}
</style>
