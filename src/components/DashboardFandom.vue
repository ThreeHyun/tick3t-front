<template>
  <v-container class="" padding="60px">
    <v-responsive class="fill-height">
      <v-row class="justify-center pt-3">
        <v-col cols="6">
          <div class="d-flex align-start">
            <span class="text">팬덤</span>
            <v-autocomplete density="compact" v-model="searchCategory" prepend-inner-icon="mdi-star-outline"
              :items="categorieList" label="가수명" variant="outlined" required>
            </v-autocomplete>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-btn class="check" block rounded="lg" center size="large" @click="handleSearch">조회하기</v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <v-container class="d-flex justify-center">
    <v-table class="fan-table">
      <tbody>
        <tr class="text-center">
          <td class="text-center">가입한 회원 수</td>
          <td>{{ dashboard.joinUser }}</td>
        </tr>
        <tr class="text-center">
          <td class="text-center">탈퇴한 회원 수</td>
          <td>{{ dashboard.withdrawUser }}</td>
        </tr>
        <tr class="text-center">
          <td class="text-center">현재 총 회원 수</td>
          <td>{{ dashboard.nowUser }}</td>
        </tr>
        <tr class="text-center">
          <td class="text-center">최근 일주일 내 가입한 회원 수</td>
          <td>{{ dashboard.weekUser }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useDashboardStore } from "@/store";

export default {
  data() {
    return {
      searchCategory: "",
      categorieList: [
        { title: "IU", value: "IU" },
        { title: "규현", value: "규현" },
        { title: "김래빈", value: "김래빈" },
        { title: "남예준", value: "남예준" },
        { title: "도은호", value: "도은호" },
        { title: "류청우", value: "류청우" },
        { title: "박문대", value: "박문대" },
        { title: "배세진", value: "배세진" },
        { title: "선아현", value: "선아현" },
        { title: "유하민", value: "유하민" },
        { title: "이세진", value: "이세진" },
        { title: "차유진", value: "차유진" },
        { title: "채봉구", value: "채봉구" },
        { title: "한노아", value: "한노아" },
      ]
    };
  },
  computed: {
    ...mapState(useDashboardStore, ["dashboard"])
  },
  methods: {
    ...mapActions(useDashboardStore, ["fetchFanTable"]),
    handleSearch() {
      this.fetchFanTable(this.searchCategory);
    }
  },
  mounted() {
    this.fanCd = "IU"
    this.fetchFanTable(this.fanCd);
  },
};
</script>

<style></style>
