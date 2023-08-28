<template>
  <v-container>
    <div class="text1 d-flex justify-center">회원 정보 조회</div>
    <hr class="line" />
  </v-container>
  <v-container class="d-flex justify-center">
    <v-table class="user-table">
      <tbody>
        <tr class="text-center">
          <td class="text-center">이메일</td>
          <td>{{ user.email }}</td>
        </tr>
        <tr class="text-center">
          <td class="text-center">이름</td>
          <td>{{ user.name }}</td>
        </tr>
        <tr class="text-center">
          <td class="text-center">생년월일</td>
          <td>{{ user.birth }}</td>
        </tr>
        <tr class="text-center">
          <td class="text-center">팬클럽 회원 번호</td>
          <td>{{ user.fanId }}</td>
        </tr>
        <tr class="text-center">
          <td class="text-center">팬덤 코드</td>
          <td>{{ user.fanCd }}</td>
        </tr>
        <tr class="text-center">
          <td class="text-center">가입일</td>
          <td>{{ user.createDate }}</td>
        </tr>
        <tr class="text-center">
          <td class="text-center">회원상태</td>
          <td>{{ user.statusCd }}</td>
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
    return {};
  },
  computed: {
    ...mapState(useUserStore, ["user"]),
  },
  methods: {
    ...mapActions(useUserStore, ["fetchUserData"]),
  },
  mounted() {
    this.fetchUserData(this.$route.params.userId);
  },
};
</script>

<style scoped>
.v-container {
  max-width: 500px;
}

.text1 {
  color: #ff5252;
}

.line {
  border-color: #ff5252;
}
</style>
