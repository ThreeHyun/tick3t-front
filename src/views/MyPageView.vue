<template>
  <h1 style="font-size: 30px; text-align: center">마이페이지</h1>
  <v-container style="align-content: center">
    <v-tabs v-model="tab" color="#ff5252" align-tabs="center">
      <v-tab :value="1" style="width: 35%; font-size: 20px">예매 내역</v-tab>
      <v-tab :value="2" style="width: 35%; font-size: 20px"
        >회원 정보 조회</v-tab
      >
    </v-tabs>
    <v-window v-model="tab" style="padding-left: 10%; padding-right: 15%">
      <Myorder />
      <Profile />
    </v-window>
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
=-=
