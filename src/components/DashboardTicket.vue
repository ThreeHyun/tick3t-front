<template>
  <v-container class="" padding="60px">
    <v-responsive class="fill-height">
      <v-row class="justify-center pt-3">
        <v-col cols="6">
          <div class="d-flex align-start">
            <span class="text">티켓 판매율</span>
            <v-select v-model="concertId" :items="concerts" item-title="title" item-value="concertId" density="compact"
              prepend-inner-icon="mdi-ticket-outline" variant="outlined" required>
            </v-select>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-btn class="check" block rounded="lg" center size="large" @click="handleTicketClick">조회하기</v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <v-container class="d-flex justify-center">
    <v-progress-circular color="primary" model-value="60" :size="200" :width="30"></v-progress-circular>
    <div class="space-between"></div>
    <v-table class="ticket-table">
      <tbody>
        <tr class="text-center">
          <td class="text-center">전체 좌석 수</td>
          <td>{{ dashboard.totalSeat }}</td>
        </tr>
        <tr class="text-center">
          <td class="text-center">판매된 좌석 수</td>
          <td>{{ dashboard.soldSeat }}</td>
        </tr>
        <tr class="text-center">
          <td class="text-center">잔여석 수</td>
          <td>{{ dashboard.remainSeat }}</td>
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
      concertId: ""
    };
  },
  computed: {
    ...mapState(useDashboardStore, ["dashboard", "concerts"])
  },
  methods: {
    ...mapActions(useDashboardStore, ["fetchTicketList", "fetchTicketTable"]),
    handleTicketClick() {
      this.fetchTicketTable(this.concertId)
    }
  },
  mounted() {
    this.fetchTicketList();
  },
};
</script>
