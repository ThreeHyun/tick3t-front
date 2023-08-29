<template>
  <v-content>
    <v-container>
      <v-slide-group class="pa-15" center-active show-arrows>
        <v-slide-item v-for="i in 8" :key="i" class="ma-8">
          <v-card elevation="5" width="400">
            <v-img src="@/assets/poster.png" height="400px"></v-img>
            <v-card-text>
              <h3 class="text-h6 mb-3">2023 TESTAR 10th CONCERT</h3>
              <hr />
              <div class="font-weight-light text-h8 mt-2 mb-5">
                <span style="float: left">2023-09-23</span>
                <span style="float: right">잠실 실내체육관</span>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn class="reserve" block rounded="lg" center size="x-large" @click="goToConcert">상세보기</v-btn>
            </v-card-actions>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    model: null,
  }),
  methods: {
    goToConcert() {
      this.$router.push("/concert");
    },
  }
}

</script>

<style></style>