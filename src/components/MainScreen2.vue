<template>
  <v-img
    class="calendar"
    width="400"
    height="'400'"
    src="@/assets/calendar.PNG"
  />

  <h5>2023-09-23 (토)</h5>
  <v-container class="text-center">
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-btn class="time" block rounded="0" size="small">17:00</v-btn>
      </v-col>
    </v-row>
  </v-container>
  <div class="text-h5">잔여석</div>
</template>

<style>
.time {
  background-color: #ff5252;
  color: white;
}
.calendar {
  margin-left: auto;
  margin-right: auto;
  margin-top: 300px;
  margin-bottom: 10px;
}
</style>
