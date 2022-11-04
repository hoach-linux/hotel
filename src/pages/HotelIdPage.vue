<template>
  <div class="post-id-page container">
    <div class="app__btns" v-if="auth">
      <my-button @click="showDialog" class="create-post flex-1 md:flex-auto m-0"
        >Create Menu</my-button
      >
    </div>
    <my-header :header="'Today\'s menu'" class="header" />
    <teleport to="body">
      <transition name="modal-show">
        <my-dialog v-model:show="dialogVisible" style="will-change: transform">
          <menu-form @create="createMenu" />
        </my-dialog>
      </transition>
    </teleport>
    <transition mode="out-in">
      <div class="menus">
        <div
          v-for="menu in menus"
          :menu="menu"
          :key="menu.id"
          style="will-change: transform"
          class="post min-w-full flex-col md:flex-row"
        >
          <div class="img-wrapper min-h-full min-w-full md:min-w-0">
            <img
              :src="`https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/assets/${menu.logo}`"
              alt=""
              class="img"
            />
          </div>
          <div class="main-menu md:mt-0 md:ml-5 ml-0 mt-5 flex-1">
            <div class="post-main title mb-2">{{ menu.title }}</div>
            <blockquote class="post-main mb-10">
              {{ menu.description }}
            </blockquote>
            <my-button
              v-if="auth"
              @click="removeMenu(menu)"
              class="button-remove content-between min-w-full"
              >Remove</my-button
            >
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import hotelItem from "@/components/hotelItem.vue";
import menuForm from "@/components/menuForm.vue";
import { ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import Cookies from "js-cookie"

export default {
  components: { hotelItem, menuForm },
  data() {
    return {
      menus: [],
      dialogVisible: false,
      userData: JSON.parse(localStorage.getItem("userData")),
    };
  },
  setup() {
    const store = useStore();
    const auth = ref(Cookies.get("token"));

    if (auth.value) {
      store.dispatch("post/authTrue");
    }

    return {
      auth,
    };
  },
  methods: {
    filterMenu() {
      this.menus = this.menus.filter((p) => p.id == this.$route.params.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchMenu() {
      let response;
      try {
        if (this.auth) {
          response = await axios.get(
            `${this.$store.state.post.serverUrl}/items/menu?filter={ "user_created": { "email": "${this.userData.email}" }}`
          );

          this.menus = response.data.data;
        } else {
          response = await axios.get(
            `${this.$store.state.post.serverUrl}/items/menu?filter={ "user_created": { "email": "${this.$route.params.email}" }}`
          );

          this.menus = response.data.data;
        }
      } catch (error) {}
    },
    createMenu(menu, file) {
      this.dialogVisible = false;
      this.pushMenuImage(file);

      setTimeout(() => {
        const response = axios
          .get(`${this.$store.state.post.serverUrl}/files?sort=uploaded_on`, {
            params: {
              limit: 1000000,
            },
          })
          .then((response) => {
            let responseData = response.data.data;

            return axios({
              method: "post",
              url: `${this.$store.state.post.serverUrl}/items/menu`,
              headers: {
                Authorization: `Bearer ${this.auth}`,
              },
              data: {
                title: menu.title,
                logo: responseData[responseData.length - 1].id,
                description: menu.description,
              },
            })
              .then(() => this.menus.unshift(menu))
              .then(() => {
                document.location.reload(true);
              });
          });
      }, 1000);
    },
    pushMenuImage(file) {
      const formData = new FormData();
      console.log(file);

      formData.append("title", "Image");
      formData.append("file", file.files[0]);

      return axios.post(`${this.$store.state.post.serverUrl}/files`, formData);
    },
    removeMenu(menu) {
      try {
        this.menus = this.menus.filter((m) => m.id !== menu.id);

        return axios.delete(
          `${this.$store.state.post.serverUrl}/items/menu/${menu.id}`,
          {
            headers: {
              Authorization: `Bearer ${this.auth}`,
            },
          }
        );
      } catch (error) {
        alert("You are not registered");
      }
    },
  },
  mounted() {
    this.fetchMenu();
  },
};
</script>

<style scoped>
.post-id-page .post {
  margin: 10px 0;
  margin-bottom: 20px !important;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  z-index: 1;
  color: var(--main-text-color);
  max-width: 900px;
  min-height: 250px;
  background: var(--white-color);
}
.menu {
  min-height: 50%;
}
.menus {
  margin-bottom: 60px;
}
.main-menu {
  display: flex;
  flex-direction: column;
}
.post-main {
  min-width: 100%;
}
.button-remove {
  color: #fff !important;
  background: #c21e56 !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  transition: 0.3s ease-in-out !important;
  border-radius: 10px !important;
  min-width: 100%;
  position: absolute;
  bottom: 15px;
  right: 15px;
  min-width: 60%;
}
.button-remove:hover {
  box-shadow: 0 15px 20px #740127;
  background: #df1659 !important;
  color: #fff !important;
  min-width: 60%;
}
.title {
  font-size: 25px;
  font-weight: 600;
}
.return {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.return:hover {
  color: rgb(26, 92, 255);
  box-shadow: rgba(26, 92, 255, 0.5) 0px 20px 20px -10px;
  transition: 0.2s ease-in-out;
  transform: rotate(-360deg);
  background: white;
  padding: 10px;
  border-radius: 50%;
  min-width: 25px;
  min-height: 25px;
  animation: return 1s ease-in-out;
}
.img-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 35%;
}
.img {
  max-width: 100%;
  min-height: 100%;
  border-radius: 10px;
}
.post-main {
  min-width: 100%;
}

@keyframes return {
  0% {
  }
  50% {
    border-radius: 10px;
  }
  100% {
  }
}
@media (max-width: 768px) {
  .button-remove,
  .button-remove:hover {
    min-width: 100%;
    position: relative;
    right: 0;
  }
}

.title {
  font-size: 25px;
  font-weight: 600;
}
</style>
