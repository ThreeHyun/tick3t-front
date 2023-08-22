<template>
  <v-container class="" padding="60px">
    <v-responsive class="fill-height">
      <v-row class="justify-center pt-3">
        <v-col cols="2">
          <div class="d-flex align-start">
            <v-autocomplete
              density="compact"
              ref="star"
              v-model="star"
              prepend-inner-icon="mdi-star-outline"
              :items="stars"
              label="가수명"
              variant="outlined"
              required
            ></v-autocomplete>
          </div>
        </v-col>
        <v-col cols="5">
          <v-text-field
            density="compact"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            label="검색"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-btn class="check" block rounded="lg" center size="large"
            >조회하기</v-btn
          >
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
  <v-container>
    <v-table fixed-header height="300px">
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
        <tr v-for="user in userlist" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.fandom }}</td>
          <td>{{ user.connection }}</td>
          <td>{{ user.signup }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>

  <div class="text-center">
    <v-pagination v-model="page" :length="4"></v-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>
