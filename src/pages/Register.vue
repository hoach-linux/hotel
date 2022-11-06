<template>
  <div class="flex justify-center items-center min-h-screen container">
    <form
      class="flex flex-col p-5 rounded-xl w-96 register-form"
      @submit.prevent="submit"
    >
      <h1 class="text-4xl mb-5">Sign in</h1>
      <my-select
        v-model:modelValue="selected"
        class="select flex-1"
        :options="sortOptions"
        @userSelect="userSelect"
      />
      <my-input
        v-model:value="data.firstName"
        type="text"
        placeholder="First Name"
        required
      />
      <my-input
        v-model:value="data.lastName"
        type="text"
        placeholder="Last Name"
        required
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
        @click="$router.push('/login')"
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
        I have an account
      </p>
      <!-- <div class="main-register-offer flex justify-between"></div> -->
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import messages from "@/utils/messages";
import MySelect from "@/components/UI/MySelect.vue";
import { mapState } from "vuex";

export default {
  components: {
    MySelect,
  },
  name: "Register",
  setup() {
    const data = reactive({
      firstName: "",
      lastName: "",
      clientRole: "4e967166-975d-4a12-8fd8-e3fdb9e5be54",
      adminRole: "45facacc-afc6-4e96-9801-610a56153cde",
      ownerRole: "525d769c-b5cb-4476-beb6-c228df5cc30f",
      email: "",
      password: "",
      hotelName: "",
    });
    const router = useRouter();
    const selected = ref("");
    const selectedRole = ref("");

    const submit = async () => {
      try {
        if (selectedRole.value === "client" || selectedRole.value === "") {
          await axios.post(
            "https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/users",
            {
              first_name: data.firstName,
              last_name: data.lastName,
              email: data.email,
              password: data.password,
              role: data.clientRole,
            }
          );

          await router.push("/login?message=registered");
        } else if (selectedRole.value === "admin") {
          await axios.post(
            "https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/users",
            {
              first_name: data.firstName,
              last_name: data.lastName,
              email: data.email,
              password: data.password,
              role: data.adminRole,
            }
          );
          await router.push("/login?message=registered");
        } else if (selectedRole.value === "owner") {
          await axios.post(
            "https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/users",
            {
              first_name: data.firstName,
              last_name: data.lastName,
              email: data.email,
              password: data.password,
              role: data.ownerRole,
            }
          );
          await router.push("/login?message=registered");
        }
      } catch (error) {
        alert(`Error: ${error.message}`)
      }
    };

    const userSelect = (selected) => {
      selectedRole.value = selected;
    };

    return {
      data,
      submit,
      selected,
      userSelect,
      selectedRole,
    };
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
.register-form {
  background: var(--white-color);
}
</style>