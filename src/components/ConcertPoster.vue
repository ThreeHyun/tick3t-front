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
import { concertStore } from "@/store";

export default {
  data() {},
  computed: {
    ...mapState(concertStore, ["concert"]),
    // ...mapState(concertStore, ["resultCode"]),
    // ...mapState(concertStore, ["message"]),
  },
  methods: {
    ...mapActions(concertStore, ["detailConcert"]),
  },
  mounted() {
    this.detailConcert(this.$route.params.concertId);
  },
};
</script>

<style scoped></style>
