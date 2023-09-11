<template>
  <v-container class="" padding="60px">
    <v-responsive class="fill-height">
      <v-row class="justify-center pt-3">
        <v-col cols="2">
          <div class="d-flex align-start">
            <v-autocomplete density="compact" v-model="searchCategory" prepend-inner-icon="mdi-star-outline"
              :items="categorieList" label="카테고리" variant="outlined" required></v-autocomplete>
          </div>
        </v-col>
        <v-col cols="5">
          <v-text-field v-model="searchWord" density="compact" prepend-inner-icon="mdi-magnify" variant="outlined"
            label="검색" />
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-btn @click="handleSearch" class="check" block rounded="lg" center size="large">조회하기</v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <v-container>
    <v-table fixed-header height="" hover class="user-list-table">
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th class="text-center">이름</th>
          <th class="text-center">이메일</th>
          <th class="text-center">팬덤 정보</th>
          <th class="text-center">회원 상태</th>
          <th class="text-center">등록일</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-center" @click="moveToUserDetail(user.userId)" v-for="user in userList" :key="user.userId">
          <td>{{ user.userId }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.fanCd }}</td>
          <td>{{ user.statusCd }}</td>
          <td>{{ user.createDate }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>

  <div class="text-center">
    <v-pagination v-model="pageNo" :length="totalPage" @click="handlePage"></v-pagination>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "@/store";

export default {
  data() {
    return {
      pageNo: 1,
      searchWord: "",
      searchCategory: "",
      categorieList: [
        { title: "이름", value: "name" },
        { title: "이메일", value: "email" },
        { title: "팬덤 정보", value: "fanCd" },
      ],
    };
  },
  computed: {
    ...mapState(useUserStore, ["userList", "totalPage"]),
  },
  methods: {
    ...mapActions(useUserStore, ["fetchUserList"]),
    moveToUserDetail(userId) {
      this.$router.push(`/usermgmt/${userId}`);
    },
    handlePage() {
      this.fetchUserList(this.pageNo, this.searchCategory, this.searchWord);
    },
    handleSearch() {
      this.pageNo = 1;
      this.fetchUserList(this.pageNo, this.searchCategory, this.searchWord);
    },
  },
  mounted() {
    this.fetchUserList(this.pageNo);
  },
};
</script>
