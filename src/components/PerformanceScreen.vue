<template>
  <v-container class="fill-height" padding="60px">
    <v-responsive class="fill-height">
      <v-img class="poster" width="600px" src="@/assets/poster.jpg" />
      <h1 class="title">2023 TESTAR 10th CONCERT</h1>
      <div class="text1">2023-09-23</div>
      <div class="text1">GOCHEOK SKYDOME</div>
    </v-responsive>
    <v-responsive class="fill-height">
      <v-img class="calendar" width="400px" src="@/assets/calendar.png" />
      <div class="text2">2023-09-23 (토)</div>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-btn class="time" block rounded="0" size="small">17:00</v-btn>
        </v-col>
      </v-row>

      <div class="text3" style="display: flex; justify-content: space-between">
        <span>R석 140,000 원 (30석)</span>
        <span>S석 110,000 원 (50석)</span>
      </div>
      <span class="text3">A석 80,000 원 (70석)</span>

      <v-row align="center" justify="center">
        <v-col cols="12" sm="15" md="20">
          <v-btn class="reserve" block rounded="lg" center size="x-large"
            >예매하기</v-btn
          >
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup></script>

<style>
/* @font-face {
  font-family: SpoqaHanSansNeo-light;
  src: url("@/assets/fonts/SpoqaHanSansNeo-light.ttf");
}
@font-face {
  font-family: SpoqaHanSansNeo-Regular;
  src: url("@/assets/fonts/SpoqaHanSansNeo-Regular.ttf");
}
@font-face {
  font-family: SpoqaHanSansNeo-Medium;
  src: url("@/assets/fonts/SpoqaHanSansNeo-Medium.ttf");
}
@font-face {
  font-family: SpoqaHanSansNeo-Bold;
  src: url("@/assets/fonts/SpoqaHanSansNeo-Bold.ttf");
} */
.title {
  font-family: SpoqaHanSansNeo-Bold;
  margin-bottom: 30px;
}
.poster {
  margin-bottom: 20px;
}
.text1 {
  font-family: SpoqaHanSansNeo-Bold;
  font-size: x-large;
  margin-bottom: 10px;
}
.text2 {
  font-family: SpoqaHanSansNeo-Medium;
  font-size: x-large;
  margin-bottom: 10px;
}
.text3 {
  font-family: SpoqaHanSansNeo-light;
  font-size: small;
  font-weight: bold;
  margin-bottom: 15px;
}
.calendar {
  margin-bottom: 30px;
}
.time {
  font-family: SpoqaHanSansNeo-Bold;
  background-color: #ff5252;
  color: white;
  margin-top: 10px;
  margin-bottom: 40px;
}
.reserve {
  font-family: SpoqaHanSansNeo-Regular;
  font-size: x-large;
  background-color: #ff5252;
  color: white;
  margin-top: 10px;
  margin-bottom: 40px;
}
</style>
