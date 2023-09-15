<template>
  <v-window-item :value="1">
    <v-row class="justify-end mt-6">
      <v-col cols="2" class="pb-0 d-flex align-center">
        <v-select
          label="결제상태"
          density="compact"
          :items="[
            '전체 조회',
            '결제 대기',
            '결제 완료',
            '예매 취소',
            '결제 취소',
          ]"
          variant="outlined"
          v-model="category"
        ></v-select>
      </v-col>
      <v-col cols="3" class="pb-6 d-flex align-center">
        <v-text-field
          :loading="loading"
          density="compact"
          variant="solo"
          label="공연명을 입력해주세요"
          single-line
          hide-details
          v-model="word"
        ></v-text-field>
      </v-col>
      <v-col cols="1" class="pb-6 d-flex align-center">
        <v-btn
          @click="handleSearch"
          style="background-color: #ff5252; color: #ffffff"
          >검색</v-btn
        >
      </v-col>
    </v-row>
    <v-container
      class="list mb-10"
      @click="goToReserved(order.ticketId)"
      v-for="order in orderList"
      :key="order.ticketId"
    >
      <v-row class="justify-start">
        <v-col cols="4">
          <v-img :src="order.imgUrl" height="300px"></v-img>
        </v-col>
        <v-col cols="8">
          <v-row class="justify-start mb-8">
            <v-col cols="2">
              <div class="payState">{{ order.payState }}</div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8">
              <h1 style="font-size: 30px" class="concertTitle mb-8">
                {{ order.title }}
              </h1>
            </v-col>
            <v-col cols="4">
              <p class="d-flex justify-end pt-5" style="font-size: 20px">
                예매 번호: {{ order.ticketId }}
              </p>
            </v-col>
          </v-row>
          <v-row class="justify-start">
            <v-col>
              <p style="font-size: 20px" class="concertDate mt-3">
                {{ order.datetime }}
              </p>
              <p style="font-size: 15px">{{ order.hallName }}</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-pagination
      v-model="page"
      :length="totalPage"
      @click="handlePage"
    ></v-pagination>
  </v-window-item>
</template>

<style scoped>
.payState {
  background-color: #ff5252;
  color: white;
  padding: 8px;
  font-size: large;
  text-align: center;
}

.clickButton {
  background-color: #ff5252;
  color: white;
  margin: 10px;
}

.list {
  cursor: pointer;
}
</style>

<script>
import { mapActions, mapState } from "pinia";
import { useOrderStore } from "@/store";

export default {
  data: () => ({
    loaded: false,
    loading: false,
    page: 1,
    word: "",
    category: "",
  }),
  computed: {
    ...mapState(useOrderStore, ["order"]),
    ...mapState(useOrderStore, ["orderList", "totalPage"]),
  },
  methods: {
    ...mapActions(useOrderStore, ["fetchOrderList"]),
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
    handlePage() {
      this.fetchOrderList(this.page, this.category, this.word);
    },
    handleSearch() {
      this.fetchOrderList(this.page, this.category, this.word);
    },

    goToReserved(ticketId) {
      this.$router.push("/reserved/" + ticketId);
    },
  },
  mounted() {
    this.fetchOrderList(this.page);
    this.category = "전체 조회";
  },
};
</script>
