<template>
  <v-container>
    <div class="ma-10 pa-10">
      <div class="ma-10">
        <h1 class="hg ma-10" style="font-size: 40px">마이페이지</h1>
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
          <v-window-item :value="1">
            <v-row class="justify-end mt-6">
              <v-col cols="2" class="pb-0 d-flex align-center">
                <v-select
                  label="결제상태"
                  density="compact"
                  :items="['결제 대기', '결제 완료', '예매 취소', '결제 취소']"
                  variant="outlined"
                ></v-select>
              </v-col>

              <v-col cols="3" class="pb-6 d-flex align-center">
                <v-text-field
                  :loading="loading"
                  density="compact"
                  variant="solo"
                  label="공연명을 입력해주세요"
                  single-line
                  hide-details
                  v-model="search"
                ></v-text-field>
              </v-col>
              <v-col cols="1" class="pb-6 d-flex align-center">
                <v-btn style="background-color: #ff5252; color: #ffffff"
                  >검색</v-btn
                >
              </v-col>
            </v-row>
            <v-container
              class="list mb-10"
              @click="goToReserved"
              v-for="i in 3"
              :key="i"
            >
              <v-row class="justify-start">
                <v-col cols="4">
                  <v-img src="@/assets/poster.png" height="300px"></v-img>
                </v-col>
                <v-col cols="8">
                  <v-row class="justify-start mb-8">
                    <v-col cols="2">
                      <v-btn class="clickButton" block rounded="0" size="large"
                        >결제 대기</v-btn
                      >
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="8">
                      <h1 style="font-size: 40px" class="concertTitle mb-8">
                        2023 TESTAR 10th CONCERT
                      </h1>
                    </v-col>
                    <v-col cols="4">
                      <p
                        class="d-flex justify-end pt-5"
                        style="font-size: 20px"
                      >
                        예매 번호: REP1LFK6
                      </p>
                    </v-col>
                  </v-row>

                  <v-row class="justify-start">
                    <v-col>
                      <p style="font-size: 30px" class="concertDate mt-3">
                        {{ order.datetime }}
                      </p>
                      <p style="font-size: 20px">{{ order.location }}</p>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>

            <v-pagination
              v-model="page"
              :length="3"
              @click="handlePage"
            ></v-pagination>
          </v-window-item>
          <v-window-item :value="2">
            <v-container class="d-flex justify-center ma-10">
              <v-table
                class="table ma-10"
                style="text-align: start; width: 60%"
              >
                <tbody>
                  <tr>
                    <td
                      style="
                        border-bottom: none;
                        text-align: start;
                        font-size: 30px;
                      "
                    >
                      이메일
                    </td>
                    <td
                      style="
                        border-bottom: none;
                        text-align: start;
                        font-size: 30px;
                      "
                    >
                      {{ user.email }}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        border-bottom: none;
                        text-align: start;
                        font-size: 30px;
                      "
                    >
                      이름
                    </td>
                    <td
                      style="
                        border-bottom: none;
                        text-align: start;
                        font-size: 30px;
                      "
                    >
                      {{ user.name }}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        border-bottom: none;
                        text-align: start;
                        font-size: 30px;
                      "
                    >
                      생년월일
                    </td>
                    <td
                      style="
                        border-bottom: none;
                        text-align: start;
                        font-size: 30px;
                      "
                    >
                      {{ user.birth }}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        border-bottom: none;
                        text-align: start;
                        font-size: 30px;
                      "
                    >
                      비밀번호
                    </td>
                    <td
                      style="
                        border-bottom: none;
                        text-align: start;
                        font-size: 30px;
                      "
                    >
                      <v-dialog v-model="dialog1" persistent width="1024">
                        <template v-slot:activator="{ props }">
                          <v-btn class="clickButton" v-bind="props">
                            변경하기
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title class="ma-5">
                            <span class="text-h5">비밀번호 재설정</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col class="pt-5" cols="4">
                                  기존 비밀번호
                                </v-col>
                                <v-col cols="8">
                                  <v-text-field
                                    variant="outlined"
                                    label="Password"
                                    type="password"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col class="pt-5" cols="4">
                                  새 비밀번호
                                </v-col>
                                <v-col cols="8">
                                  <v-text-field
                                    variant="outlined"
                                    label="Password"
                                    type="password"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col class="pt-5" cols="4">
                                  새 비밀번호 확인
                                </v-col>
                                <v-col cols="8">
                                  <v-text-field
                                    variant="outlined"
                                    label="Password"
                                    type="password"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="#000000"
                              variant="text"
                              @click="dialog1 = false"
                            >
                              취소
                            </v-btn>
                            <v-btn
                              color="#ff5252"
                              variant="text"
                              @click="pwdCheck"
                            >
                              변경
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </td>
                  </tr>
                  <tr>
                    <td
                      style="
                        border-bottom: none;
                        text-align: start;
                        font-size: 30px;
                      "
                    >
                      팬클럽 회원번호
                    </td>
                    <td
                      style="
                        border-bottom: none;
                        text-align: start;
                        font-size: 30px;
                      "
                    >
                      {{ user.fanId }}
                    </td>
                    <td
                      style="
                        border-bottom: none;
                        text-align: start;
                        font-size: 30px;
                      "
                    >
                      <v-dialog v-model="dialog2" persistent width="1024">
                        <template v-slot:activator="{ props }">
                          <v-btn class="clickButton" v-bind="props">
                            인증하기
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title class="ma-5">
                            <span class="text-h5">팬클럽 회원 인증</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="4" class="pt-5"> 회원 번호 </v-col>
                                <v-col cols="8">
                                  <v-text-field
                                    variant="outlined"
                                    label="회원번호를 입력해주세요."
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="#000000"
                              variant="text"
                              @click="dialog2 = false"
                            >
                              취소
                            </v-btn>
                            <v-btn
                              color="#ff5252"
                              variant="text"
                              @click="dialog2 = false"
                            >
                              인증
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <v-dialog v-model="dialog3" persistent width="1024">
                        <template v-slot:activator="{ props }">
                          <v-btn class="clickButton" v-bind="props">
                            탈퇴하기
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title class="ma-5">
                            <span class="text-h5">탈퇴 안내</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container>
                              <v-row>
                                <v-col cols="4" class="pt-5"
                                  >비밀번호 확인</v-col
                                >
                                <v-col cols="8">
                                  <v-text-field
                                    variant="outlined"
                                    label="Password"
                                    type="password"
                                  ></v-text-field>
                                </v-col>
                              </v-row>

                              <v-row
                                ><v-col style="font-weight: bolder"
                                  >사용하고 계신 이메일은 탈퇴할 경우 재사용 및
                                  복구가 불가능합니다.</v-col
                                ></v-row
                              >
                              <v-row
                                ><v-col style="font-weight: bolder"
                                  >탈퇴 후 회원정보 및 개인형 서비스 이용기록은
                                  모두 삭제됩니다.</v-col
                                ></v-row
                              >
                              <v-row
                                ><v-checkbox
                                  style="color: red; margin-top: 5px"
                                  label="안내 사항을 모두 확인하였으며, 정말 탈퇴하시겠습니까?"
                                ></v-checkbox>
                              </v-row>
                            </v-container>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="#000000"
                              variant="text"
                              @click="dialog3 = false"
                            >
                              취소
                            </v-btn>
                            <v-btn
                              color="#ff5252"
                              variant="text"
                              @click="dialog3 = false"
                            >
                              탈퇴하기
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-container>
          </v-window-item>
        </v-window>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
.payState {
  background-color: #ff5252;
  color: white;
  padding: 8px;
  font-size: large;
  text-align: center;
}
.clickButton {
  background-color: #ff5252;
  color: white;
  margin: 10px;
}
.hg {
  text-align: center;
}
.list {
  cursor: pointer;
}
</style>

<script>
import { mapActions, mapState } from "pinia";
import { useProfileStore } from "@/store";
import { useOrderStore } from "@/store";

export default {
  data: () => ({
    tab: null,
    loaded: false,
    loading: false,
    dialog1: false,
    dialog2: false,
    dialog3: false,
    page: 1,
  }),
  computed: {
    ...mapState(useProfileStore, ["user"]),
    ...mapState(useOrderStore, ["order"]),
  },
  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
    handlePage() {
      console.log(
        "----------------------" + this.page + "----------------------"
      );
    },

    goToReserved() {
      this.$router.push("/reserved");
    },
    ...mapActions(useProfileStore, ["fetchUserData"]),
  },

  mounted() {
    this.fetchUserData(this);
    this.fetchUpdatePwd();
  },
};
</script>
