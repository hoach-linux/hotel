<template>
  <div class="post-id-page container">
    <div class="app__btns" v-if="auth">
      <my-button @click="showDialog" class="create-post flex-1 md:flex-auto m-0"
        >Create Menu</my-button
      >
    </div>
    <teleport to="body">
      <transition name="modal-show">
        <my-dialog v-model:show="dialogVisible" style="will-change: transform">
          <menu-form @create="createMenu" />
        </my-dialog>
      </transition>
    </teleport>
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
        <div class="main-menu md:mt-0 md:ml-5 ml-0 flex-1">
          <div class="post-main title mb-8 mt-4">{{ menu.title }}</div>
          <blockquote class="post-main">
            {{ menu.description }}
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import hotelItem from "@/components/hotelItem.vue";
import menuForm from "@/components/menuForm.vue";
import { ref } from "@vue/runtime-core";

export default {
  components: { hotelItem, menuForm },
  data() {
    return {
      menus: [],
      dialogVisible: false,
    };
  },
  setup() {
    const auth = ref(localStorage.getItem("token"));

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
      try {
        const response = await axios.get(
          `${this.$store.state.post.serverUrl}/items/menu`
        );

        this.menus = response.data.data;
      } catch (error) {}
    },
    createMenu(menu, file) {
      this.dialogVisible = false;
      this.pushMenuImage(file);

      setTimeout(() => {
        const response = axios
          .get(`${this.$store.state.post.serverUrl}/files?sort=uploaded_on`, {
            params: {
              limit: 1000,
            },
          })
          .then((response) => {
            let responseData = response.data.data;

            return axios({
              method: "post",
              url: `${this.$store.state.post.serverUrl}/items/menu`,
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
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
  },
  mounted() {
    this.fetchMenu();
  },
};
</script>

<style scoped>
.post-id-page .post {
  margin: 10px 0;
  margin-bottom: 80px !important;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  z-index: 1;
  color: var(--main-text-color);
  max-width: 900px;
  background: var(--white-color);
  min-height: 250px;
}
.menu {
  min-height: 50%;
}
.post-main {
  min-width: 100%;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
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

.title {
  font-size: 25px;
  font-weight: 600;
}
</style>
