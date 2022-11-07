<template>
  <div class="post-id-page container">
    <div class="app__btns" v-if="auth">
      <my-button
        @click="showDialog"
        class="create-post flex-1 md:flex-auto m-0"
        v-if="userData.userRole !== 'client' && userData.userRole !== ''"
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
            <span class="post-main title mb-2">{{ menu.title }}</span>
            <blockquote class="post-main mb-20">
              {{ menu.description }}
            </blockquote>
            <div class="buttons-menu">
              <my-button class="btn" @click="fetchDish(menu.id)"
                >Dishes</my-button
              >
              <my-button
                v-if="
                  userData.userRole !== 'client' && userData.userRole !== ''
                "
                @click="removeMenu(menu)"
                class="button-remove btn"
                >Remove</my-button
              >
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div
      class="dishes"
      @click.stop
      :class="[isActive ? activeClass : notActiveClass]"
    >
      <font-awesome-icon
        icon="fa-solid fa-arrow-right"
        class="close-dishes-menu"
        @click="closeDishesMenu"
      />
      <div class="dishes-items">
        <div class="dish" v-for="dish in dishes" :key="dish.id">
          <img
            :src="`https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/assets/${dish.image}`"
            alt=""
          />
          <span>{{ dish.title }}</span>
          <my-button class="add-btn">add</my-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import hotelItem from "@/components/hotelItem.vue";
import menuForm from "@/components/menuForm.vue";
import { onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import Cookies from "js-cookie";

export default {
  components: { hotelItem, menuForm },
  data() {
    return {
      menus: [],
      dishes: [],
      dialogVisible: false,
      userData: JSON.parse(localStorage.getItem("userData")),
      isActive: false,
      activeClass: "active",
      notActiveClass: "notActive",
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
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchMenu() {
      let response;
      try {
        response = await axios.get(
          `${this.$store.state.post.serverUrl}/items/menu?filter={ "hotel_name":"${this.$route.params.hotelName}"}`
        );

        this.menus = response.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchDish(menuId) {
      let response;
      try {
        console.log(menuId);
        response = await axios.get(
          `${this.$store.state.post.serverUrl}/items/dish?filter={ "menuId":"${menuId}"}`
        );

        this.dishes = response.data.data;
        this.isActive = true;
        console.log(this.isNotActive, this.isActive);
      } catch (error) {
        console.log(error);
      }
    },
    closeDishesMenu() {
      this.isActive = false;
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
                hotel_name: menu.hotelName,
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
  computed: {
    classObject() {
      return {
        active: this.isActive && !this.isNotActive,
        notActive: !this.isActive && this.isNotActive,
      };
    },
  },
};
</script>

<style scoped>
.dishes {
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  max-width: 660px;
  background: var(--white-color);
  color: #fff;
  z-index: 1000;
  padding: 20px;
  overflow-y: scroll;
  transition: 0.3s ease-in-out;
  transform: translateX(100%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.dishes-items {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
}
.dishes.active {
  transform: translateX(0);
}
.close-dishes-menu {
  position: absolute;
  z-index: 2;
  font-size: 15px;
  font-weight: 100;
  right: 30px;
  min-width: 30px;
  min-height: 30px;
  padding: 5px;
  cursor: pointer;
  transition: .3s ease-in-out;
}
.close-dishes-menu:hover {
  background: #fff;
  color: #000;
  border-radius: 50%;
}
.dish {
  width: 48%;
  margin: 5px;
  border: #383d48 2px solid;
  border-radius: 10px;
  background: #1c1f26;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  max-height: 400px;
  padding: 10px;
}
.dish > img {
  height: 250px;
  width: 100%;
  border-radius: 10px;
}
.dish > span {
  font-size: 25px;
  font-weight: 500;
}
.add-btn {
  min-height: auto;
  min-width: 100%;
  margin: 0 !important;
  border-radius: 10px;
  background: #161617;
}
.add-btn:hover {
  min-width: 100%;
  box-shadow: none;
}
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
  margin-bottom: 70px;
}
.main-menu {
  display: flex;
  flex-direction: column;
  position: relative;
}
.post-main {
  min-width: 100%;
}
.buttons-menu {
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  min-width: 100%;
}
.btn {
  flex: 1;
  margin: 0 5px;
  min-width: auto;
}
.btn:hover {
  flex: 2;
}
.button-remove {
  color: #fff !important;
  background: #c21e56 !important;
  font-size: 15px !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  transition: 0.3s ease-in-out !important;
  border-radius: 10px !important;
}
.button-remove:hover {
  box-shadow: 0 15px 20px #740127;
  background: #df1659 !important;
  color: #fff !important;
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
    position: relative;
    right: 0;
  }
  .dish {
    min-width: 100%;
    margin: 5px 0;
  }
}

.title {
  font-size: 25px;
  font-weight: 600;
}
</style>
