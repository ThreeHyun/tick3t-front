<template>
  <v-window-item :value="2">
    <v-container class="d-flex justify-center mt-8">
      <v-table class="table" style="min-width: 60%">
        <tbody>
          <tr>
            <td class="profile-text">이메일</td>
            <td class="profile-text">
              {{ user.email }}
            </td>
          </tr>
          <tr>
            <td class="profile-text">이름</td>
            <td class="profile-text">
              {{ user.name }}
            </td>
          </tr>
          <tr>
            <td class="profile-text">생년월일</td>
            <td class="profile-text">
              {{ user.birth }}
            </td>
          </tr>
          <tr>
            <td class="profile-text">비밀번호</td>
            <td class="profile-text">
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
                        v-if="PwResultCode === '0000'"
                        class="justify-end"
                        style="color: blue"
                      >
                        {{ PwMessage }}</v-row
                      >
                      <v-row v-else class="justify-end" style="color: red">
                        {{ PwMessage }}</v-row
                      >
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#000000" variant="text" @click="dialogFalse1">
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
            <td class="profile-text">팬클럽 회원번호</td>
            <td class="profile-text">
              {{ user.fanId }}
            </td>
            <td class="profile-text">
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
                        v-if="FanResultCode === '0000'"
                        class="justify-end"
                        style="color: blue"
                      >
                        {{ FanMessage }}</v-row
                      >
                      <v-row v-else class="justify-end" style="color: red">
                        {{ FanMessage }}</v-row
                      >
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#000000" variant="text" @click="dialogFalse2">
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
                          v-model="isChecked"
                        ></v-checkbox>
                      </v-row>
                      <v-row
                        v-if="WDResultCode === '0000'"
                        class="justify-end"
                        style="color: blue"
                      >
                        {{ WDMessage }}</v-row
                      >
                      <v-row v-else class="justify-end" style="color: red">
                        {{ WDMessage }}</v-row
                      >
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#000000" variant="text" @click="dialogFalse3">
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
import { useAuthStore } from "@/store";

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
    isChecked: false,
  }),
  computed: {
    ...mapState(useProfileStore, [
      "user",
      "PwResultCode",
      "PwMessage",
      "FanResultCode",
      "FanMessage",
      "WDResultCode",
      "WDMessage",
    ]),
  },
  methods: {
    ...mapActions(useProfileStore, [
      "fetchUserData",
      "fetchUpdatePwd",
      "fetchAuthFanId",
      "fetchWithdraw",
      "setPwResultCode",
      "setPwMessage",
      "setFanResultCode",
      "setFanMessage",
      "setWDResultCode",
      "setWDMessage",
    ]),
    ...mapActions(useAuthStore, ["logout"]),

    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },

    dialogFalse1() {
      this.oldPassword = "";
      this.newPassword = "";
      this.newPasswordCheck = "";

      this.setPwResultCode(""); // PwResultCode 초기화
      this.setPwMessage(""); //// PwMessage 초기화

      this.dialog1 = false;
    },
    dialogFalse2() {
      this.fanId = "";

      this.setFanResultCode(""); // fanResultCode 초기화
      this.setFanMessage(""); //// fanMessage 초기화

      this.dialog2 = false;
    },
    dialogFalse3() {
      this.password = "";

      this.setWDResultCode("");
      this.setWDMessage("");
      this.isChecked = false;

      this.dialog3 = false;
    },

    pwdCheck() {
      this.fetchUpdatePwd(
        this.oldPassword,
        this.newPassword,
        this.newPasswordCheck
      ).then(() => {
        if (this.PwResultCode === "0000") {
          setTimeout(
            () => this.dialogFalse1(),
            this.logout(),
            this.$router.push("/"),
            700
          );
        }
      });
    },

    FanCheck() {
      this.fetchAuthFanId(this.fanId).then(() => {
        if (this.FanResultCode === "0000") {
          setTimeout(() => this.dialogFalse2(), 700);
        }
      });
    },
    WithDrawCheck() {
      if (this.isChecked === false) {
        this.setWDMessage("확인사항에 동의하셔야 탈퇴하실 수 있습니다.");
      } else {
        this.fetchWithdraw(this.password).then(() => {
          if (this.WDResultCode === "0000" && this.isChecked === true) {
            setTimeout(
              () => this.dialogFalse3(),
              this.logout(),
              this.$router.push("/"),
              700
            );
          }
        });
      }
    },
  },
  mounted() {
    this.fetchUserData(this);
  },
  // async mounted() {
  //   await this.fetchUserData(this);
  // },
};
</script>

<style scoped>
.profile-text {
  border-bottom: none !important;
  text-align: start;
  font-size: 20px;
}
</style>
