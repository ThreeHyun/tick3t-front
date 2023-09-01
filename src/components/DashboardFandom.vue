<template>
  <v-container class="" padding="60px">
    <v-responsive class="fill-height">
      <v-row class="justify-center pt-3">
        <v-col cols="6">
          <div class="d-flex align-start">
            <span class="text">팬덤</span>
            <v-autocomplete density="compact" ref="star" v-model="star" prepend-inner-icon="mdi-star-outline"
              :items="stars" label="가수명" variant="outlined" required>
            </v-autocomplete>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-btn class="check" block rounded="lg" center size="large">조회하기</v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <v-container class="d-flex justify-center">
    <v-table class="fan-table">
      <tbody>
        <tr class="text-center">
          <td class="text-center">가입한 회원 수</td>
          <td>{{ user.joinUser }}</td>
        </tr>
        <tr class="text-center">
          <td class="text-center">탈퇴한 회원 수</td>
          <td>{{ user.withdrawUser }}</td>
        </tr>
        <tr class="text-center">
          <td class="text-center">현재 총 회원 수</td>
          <td>{{ user.nowUser }}</td>
        </tr>
        <tr class="text-center">
          <td class="text-center">최근 일주일 내 가입한 회원 수</td>
          <td>{{ user.weekUser }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "@/store";

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(useUserStore, ["user"])
  },
  methods: {
    ...mapActions(useUserStore, ["fetchFanTable"])
  },
  mounted() {
    this.fetchFanTable(this.fanCd);
  },
};
</script>

<style></style>
