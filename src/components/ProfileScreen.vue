<template>
  <v-window-item :value="2">
    <v-container class="d-flex justify-center ma-10">
      <v-table class="table ma-10" style="text-align: start; width: 60%">
        <tbody>
          <tr>
            <td style="border-bottom: none; text-align: start; font-size: 30px">
              이메일
            </td>
            <td style="border-bottom: none; text-align: start; font-size: 30px">
              {{ user.email }}
            </td>
          </tr>
          <tr>
            <td style="border-bottom: none; text-align: start; font-size: 30px">
              이름
            </td>
            <td style="border-bottom: none; text-align: start; font-size: 30px">
              {{ user.name }}
            </td>
          </tr>
          <tr>
            <td style="border-bottom: none; text-align: start; font-size: 30px">
              생년월일
            </td>
            <td style="border-bottom: none; text-align: start; font-size: 30px">
              {{ user.birth }}
            </td>
          </tr>
          <tr>
            <td style="border-bottom: none; text-align: start; font-size: 30px">
              비밀번호
            </td>
            <td style="border-bottom: none; text-align: start; font-size: 30px">
              <v-dialog v-model="dialog1" persistent width="1024">
                <template v-slot:activator="{ props }">
                  <v-btn class="clickButton" v-bind="props"> 변경하기 </v-btn>
                </template>
                <v-card>
                  <v-card-title class="ma-5">
                    <span class="text-h5">비밀번호 재설정</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col class="pt-5" cols="4"> 기존 비밀번호 </v-col>
                        <v-col cols="8">
                          <v-text-field
                            label="Password"
                            variant="outlined"
                            type="password"
                            v-model="oldPassword"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="pt-5" cols="4"> 새 비밀번호 </v-col>
                        <v-col cols="8">
                          <v-text-field
                            label="Password"
                            variant="outlined"
                            type="password"
                            v-model="newPassword"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="pt-5" cols="4"> 새 비밀번호 확인 </v-col>
                        <v-col cols="8">
                          <v-text-field
                            label="Password"
                            variant="outlined"
                            type="password"
                            v-model="newPasswordCheck"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row
                        v-if="user.resultCode === '0000'"
                        class="justify-end"
                        style="color: blue"
                      >
                        {{ user.message }}</v-row
                      >
                      <v-row v-else class="justify-end" style="color: red">
                        {{ user.message }}</v-row
                      >
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
                    <v-btn color="#ff5252" variant="text" @click="pwdCheck">
                      변경
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </td>
          </tr>
          <tr>
            <td style="border-bottom: none; text-align: start; font-size: 30px">
              팬클럽 회원번호
            </td>
            <td style="border-bottom: none; text-align: start; font-size: 30px">
              {{ user.fanId }}
            </td>
            <td style="border-bottom: none; text-align: start; font-size: 30px">
              <v-dialog v-model="dialog2" persistent width="1024">
                <template v-slot:activator="{ props }">
                  <v-btn class="clickButton" v-bind="props"> 인증하기 </v-btn>
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
                            v-model="fanId"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row
                        v-if="user.resultCode === '0000'"
                        class="justify-end"
                        style="color: blue"
                      >
                        {{ user.message }}</v-row
                      >
                      <v-row v-else class="justify-end" style="color: red">
                        {{ user.message }}</v-row
                      >
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
                    <v-btn color="#ff5252" variant="text" @click="FanCheck">
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
                  <v-btn class="clickButton" v-bind="props"> 탈퇴하기 </v-btn>
                </template>
                <v-card>
                  <v-card-title class="ma-5">
                    <span class="text-h5">탈퇴 안내</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="4" class="pt-5">비밀번호 확인</v-col>
                        <v-col cols="8">
                          <v-text-field
                            variant="outlined"
                            label="Password"
                            type="password"
                            v-model="password"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row
                        ><v-col style="font-weight: bolder"
                          >사용하고 계신 이메일은 탈퇴할 경우 재사용 및 복구가
                          불가능합니다.</v-col
                        ></v-row
                      >
                      <v-row
                        ><v-col style="font-weight: bolder"
                          >탈퇴 후 회원정보 및 개인형 서비스 이용기록은 모두
                          삭제됩니다.</v-col
                        ></v-row
                      >
                      <v-row
                        ><v-checkbox
                          style="color: red; margin-top: 5px"
                          label="안내 사항을 모두 확인하였으며, 정말 탈퇴하시겠습니까?"
                        ></v-checkbox>
                      </v-row>
                      <v-row
                        v-if="user.resultCode === '0000'"
                        class="justify-end"
                        style="color: blue"
                      >
                        {{ user.message }}</v-row
                      >
                      <v-row v-else class="justify-end" style="color: red">
                        {{ user.message }}</v-row
                      >
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
                      @click="WithDrawCheck"
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
</template>
<style scoped>
.clickButton {
  background-color: #ff5252;
  color: white;
  margin: 10px;
}
</style>
<script>
import { mapActions, mapState } from "pinia";
import { useProfileStore } from "@/store";

export default {
  data: () => ({
    // tab: null,
    loaded: false,
    loading: false,
    dialog1: false,
    dialog2: false,
    dialog3: false,
    oldPassword: "",
    newPassword: "",
    newPasswordCheck: "",
    fanId: "",
    password: "",
    page: 1,
  }),
  computed: {
    ...mapState(useProfileStore, ["user"]),
  },
  methods: {
    ...mapActions(useProfileStore, [
      "fetchUserData",
      "fetchUpdatePwd",
      "fetchAuthFanId",
      "fetchWithdraw",
    ]),

    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },

    pwdCheck() {
      this.fetchUpdatePwd(
        this.oldPassword,
        this.newPassword,
        this.newPasswordCheck
      );
    },
    FanCheck() {
      this.fetchAuthFanId(this.fanId);
    },
    WithDrawCheck() {
      this.fetchWithdraw(this.password);
    },
  },
  mounted() {
    this.fetchUserData(this);
  },
};
</script>
