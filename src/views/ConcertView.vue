<template>
  <div :class="isMobile ? 'd-flex flex-column' : 'd-flex justify-center'">
    <ConcertPoster />
    <ConcertDetail :isMobile="isMobile" />
  </div>
</template>

<script setup>
import ConcertPoster from "@/components/ConcertPoster.vue";
import ConcertDetail from "@/components/ConcertDetail.vue";
</script>

<script>
export default {
  data() {
    return {
      isMobile: false,
    };
  },
  methods: {
    goToSeat() {
      this.$router.push("/seat");
    },
    handleResize() {
      let width = window.innerWidth;
      if (width < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroy() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
<style scoped>
.detail-container {
  position: relative;
  width: 400px;
}

.detail-containe-moblie {
  position: relative;
  width: 400px;
}
</style>
