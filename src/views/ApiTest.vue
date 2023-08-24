<template>안냥</template>

<script>
import apiBoard from "@/api/board.js";

export default {
  mounted() {
    apiBoard
      .getConcertDetail(3221)
      .then(function (response) {
        console.log("getConcertDetail", response.data);
      })
      .catch(function (e) {
        console.log(e);
      });
  },
};
</script>
