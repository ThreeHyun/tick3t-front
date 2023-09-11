<template>
  <div class="px-3 poster-container">
    <v-img class="poster" width="600px" :src="concert.imgUrl" />
    <h1 class="title">{{ concert.title }}</h1>

    <div class="text1">{{ concert.hallName }}</div>
    <div class="text3">{{ concert.location }}</div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useConcertStore } from "@/store";

export default {
  data() { },
  computed: {
    ...mapState(useConcertStore, ["concert"]),
    // ...mapState(useConcertStore, ["resultCode"]),
    // ...mapState(useConcertStore, ["message"]),
  },
  methods: {
    ...mapActions(useConcertStore, ["detailConcert"]),
  },
  mounted() {
    this.detailConcert(this.$route.params.concertId);
  },
};
</script>

<style scoped></style>
