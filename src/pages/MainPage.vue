<template lang="">
  <div class="container">
    <my-3d-card :greeting="message"/>
    <footer-vue />
  </div>
</template>
<script>
import { onMounted, ref } from "@vue/runtime-core";
import axios from "axios";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import footerVue from "@/components/footer.vue";
import messages from "@/utils/messages";
import Cookies from "js-cookie"

export default {
  components: {
    footerVue,
  },
  name: "MainPage",
  setup() {
    const message = ref("Welcome !");
    const router = useRouter();
    const store = useStore();
    const userData = JSON.parse(localStorage.getItem("userData"));

    onMounted(async () => {
      try {
        let users = await axios.get(
          "https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/users",
          {
            params: {
              limit: 1000,
            },
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        );

        await store.dispatch("post/authTrue");

        const getUserData = users.data.data.filter(
          (user) => userData.email === user.email
        );

        message.value = `Welcome ${getUserData[0].first_name} ${getUserData[0].last_name} !`;
      } catch (error) {
        await axios.post(
          "https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/auth/logout",
          {
            refresh_token: Cookies.get("refresh_token"),
          }
        );
        Cookies.remove("token")

        store.dispatch("post/authFalse");

        router.push("/register");
      }
    });

    return {
      message,
    };
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
};
</script>
<style>
</style>
