<template>
  <v-container>
    <v-tabs v-model="tab" color="primary" align-tabs="center">
      <v-tab :value="1">회원 정보 조회</v-tab>
    </v-tabs>
    <v-table height="300px">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
};
</script>
