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
          <v-btn class="checkFandom" block rounded="lg" center size="large" @click="handleSearch">조회하기</v-btn>
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
      searchCategory: "IU",
      categorieList: [
        { title: "IU", value: "IU" },
        { title: "규현", value: "규현" },
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
