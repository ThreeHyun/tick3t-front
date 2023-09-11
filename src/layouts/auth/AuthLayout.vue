<template>
  <v-app>
    <default-view />
  </v-app>
</template>
  
<script setup>
import DefaultView from "../default/View.vue";
</script>


<script>
import { mapState } from "pinia";
import { useAuthStore } from "@/store";

export default {
  computed: {
    ...mapState(useAuthStore, ["token"]),
  },
  mounted() {
    if (this.token) {
      this.$router.push("/");
    }
  },
  methods: {
    goToHomePage() {
      this.$router.push("/");
    },
  }
}
</script>