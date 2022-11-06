<template>
  <div class="flex justify-center items-center min-h-screen container">
    <form
      class="flex flex-col bg-gray-900 p-5 rounded-xl w-96 login-form"
      @submit.prevent="submit"
    >
      <h1 class="text-4xl mb-5">Log in</h1>
      <my-select
        v-model:modelValue="selected"
        class="select flex-1"
        :options="sortOptions"
        @userSelect="userSelect"
      />
      <my-input
        v-model:value="data.hotelName"
        type="text"
        placeholder="Hotel Name"
        required
        v-if="selectedRole !== 'owner'"
      />
      <my-input
        v-model:value="data.email"
        type="email"
        placeholder="Email"
        required
      />
      <my-input
        v-model:value="data.password"
        type="password"
        placeholder="Password"
        required
      />
      <my-button
        type="submit"
        class="
          btn-register
          border-solid border-blue-700 border-2
          text-white
          mt-1
        "
        >Continue</my-button
      >
      <p
        @click="$router.push('/register')"
        class="
          text-right
          cursor-pointer
          mt-2
          underline underline-offset-8
          hover:underline-offset-4
          duration-300
          hover:text-blue-400
          ease-out
        "
      >
        Register
      </p>
    </form>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import axios from "axios";
import messages from "@/utils/messages";
import Cookies from "js-cookie";
import MySelect from "@/components/UI/MySelect.vue";
import { mapState } from "vuex";

export default {
  name: "Login",
  components: {
    MySelect,
  },
  setup() {
    const data = reactive({
      email: "",
      password: "",
      hotelName: "",
    });
    const router = useRouter();
    const selected = ref("");
    const selectedRole = ref("")

    const submit = async () => {
      try {
        let response = await axios.post(
          "https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/auth/login",
          {
            email: data.email,
            password: data.password,
          }
        );

        await localStorage.setItem("userData", response.config.data);

        let getUserData = JSON.parse(localStorage.getItem("userData"));
        let userData = {
          email: getUserData.email,
        };
        let userDataJson = JSON.stringify(userData);

        localStorage.setItem("userData", userDataJson);
        console.log(userDataJson);

        Cookies.set("token", `${response.data.data.access_token}`);
        Cookies.set("refresh_token", `${response.data.data.refresh_token}`);

        await router.push("/?message=login");
      } catch (error) {
        alert("Wrong email or password");
      }
    };
    
    const userSelect = (selected) => {
      selectedRole.value = selected
    }


    return {
      data,
      submit,
      selected,
      selectedRole,
      userSelect
    };
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  },
  computed: {
    ...mapState({
      sortOptions: (state) => state.post.sortOptions,
    }),
  },
};
</script>
<style scoped>
.btn-register {
  min-width: 100%;
}
.btn-register:hover {
  min-width: 100%;
}
.login-form {
  background: var(--white-color);
}
</style>