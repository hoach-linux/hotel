<template>
  <div class="home">
    <input v-model="hotels.name" type="text" placeholder="name" required minlength="1"/>
    <input v-model="hotels.adress" type="text" placeholder="adress" required minlength="1"/>
    <input type="file" id="file" />
    <button @click="createHotel">Create</button>
    <div class="hotels" v-for="hotel in hotels">
      <h1>{{ hotel.name }}</h1>
      <img
        style="max-width: 500px"
        :src="`http://localhost:8055/assets/${hotel.image}`"
        alt=""
      />
      <p>{{ hotel.adress }}</p>
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
        image: "",
        adress: "",
      },
    };
  },
  methods: {
    async fetchHotel() {
      try {
        const response = await axios.get("http://localhost:8055/items/hotels");

        this.hotels = response.data.data;
      } catch (error) {}
    },
    createHotel() {
      let file = document.getElementById("file");

      this.pushLogoHotel();

      const response = axios
        .get("http://localhost:8055/files")
        .then((response) => {
          return axios.post("http://localhost:8055/items/hotels", {
            name: this.hotels.name,
            image: response.data.data[0].id,
            adress: this.hotels.adress,
          }).finally(() => {
            document.location.reload(true)
          }) 
        });
    },
    pushLogoHotel() {
      const formData = new FormData();

      formData.append("title", "My First File");
      formData.append("file", file.files[0]);

      return axios.post("http://localhost:8055/files", formData);
    },
  },
  mounted() {
    this.fetchHotel();
  },
};
</script>

