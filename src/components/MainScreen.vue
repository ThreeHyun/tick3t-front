<template>
  <v-content>
    <v-container>
      <v-slide-group class="pa-15" center-active show-arrows>
        <v-slide-item v-for="concert in concertList" :key="concert.concertId" class="ma-8">
          <v-card elevation="5" width="400" style="padding: 20px;">
            <v-img :src="concert.imgUrl" height="400px"></v-img>
            <v-card-text>
              <h3 class="text3 mb-3">{{ concert.title }}</h3>
              <hr />
              <div class="font-weight-light text3 mt-2 mb-5">
                <span style="float: left">{{ concert.date }}</span>
                <span style="float: right">{{ concert.hallName }}</span>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn class="reserve2" block rounded="lg" center size="x-large"
                @click="goToConcert(concert.concertId)">상세보기</v-btn>
            </v-card-actions>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>
  </v-content>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useConcertStore } from "@/store";

export default {
  data: () => ({
    model: null,
  }),
  computed: {
    ...mapState(useConcertStore, ["concertList"]),
  },
  methods: {
    ...mapActions(useConcertStore, ["fetchConcertList"]),
    goToConcert(concertId) {
      this.$router.push("/concert/" + concertId);
    },
  },
  mounted() {
    this.fetchConcertList();
  },
};
</script>

<style></style>
