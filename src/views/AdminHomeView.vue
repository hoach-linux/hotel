<template>
  <div class="home">
    <input v-model="hotels.name" type="text" placeholder="name" required minlength="1" />
    <input v-model="hotels.adress" type="text" placeholder="adress" required minlength="1" />
    <input type="file" id="file" />
    <button @click="createHotel">Create</button>
    <div class="hotels" v-for="hotel in hotels">
      <h1>{{ hotel.name }}</h1>
      <img style="max-width: 500px" :src="`https://localhost/assets/${hotel.logo}`" alt="" />
      <p>{{ hotel.address }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      hotels: {
        name: "",
        logo: "",
        address: "",
      },
    };
  },
  methods: {
    async fetchHotel() {
      try {
        const response = await axios.get("https://localhost/items/hotels");

        this.hotels = response.data.data;
      } catch (error) {
        
      }
    },
    createHotel() {
      let file = document.getElementById("file");

      this.pushLogoHotel();

      setTimeout(() => {
        const response = axios
          .get("https://localhost/files?sort=uploaded_on")
          .then((response) => {
            
            let responseData = response.data.data;

            return axios.post("https://localhost/items/hotels", {
              name: this.hotels.name,
              logo: responseData[responseData.length - 1].id,
              address: this.hotels.adress,
            }).then(() => {
              document.location.reload(true)
            })
          });
      }, 1000)
    },
    pushLogoHotel() {
      const formData = new FormData();

      formData.append("title", "My First File");
      formData.append("file", file.files[0]);

      return axios.post("https://localhost/files", formData);
    },
  },
  mounted() {
    this.fetchHotel();
  },
};
</script>
<style>
</style>