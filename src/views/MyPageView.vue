<template>
  <v-container>
    <div class="ma-10 pa-10">
      <div class="ma-10">
        <h1 class="hg ma-10" style="font-size: 40px; text-align: center">
          마이페이지
        </h1>
      </div>
      <div class="ma-10">
        <v-tabs v-model="tab" color="#ff5252" align-tabs="center">
          <v-tab :value="1" style="width: 50%; font-size: 20px"
            >예매 내역</v-tab
          >
          <v-tab :value="2" style="width: 50%; font-size: 20px"
            >회원 정보 조회</v-tab
          >
        </v-tabs>
        <v-window v-model="tab">
          <Myorder />
          <Profile />
        </v-window>
      </div>
    </div>
  </v-container>
</template>

<script>
import Myorder from "@/components/MyOrderScreen.vue";
import Profile from "@/components/ProfileScreen.vue";

export default {
  //props: ["pageNo", "category", "word"],
  data: () => ({
    tab: null,
    // loaded: false,
    // loading: false,
  }),

  components: {
    Myorder: Myorder,
    Profile: Profile,
  },
};
</script>
