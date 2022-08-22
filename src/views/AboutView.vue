<template>
  <div class="about">
    <h1>{{this.hotels.name}}</h1>
    <img style="max-width: 500px;" :src="`http://localhost/assets/${this.hotels.logo}`" alt="">
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        hotels: {
          name: '',
          logo: '',
          adress: '',
        }
      }
    },
    methods: {
      async fetchHotel() {
        try {
          const response = await axios.get('https://localhost/items/hotels')
          
          this.hotels = response.data.data[0]
        } catch (error) {
          
        }
      }
    },
    mounted() {
      this.fetchHotel()
    },
  }
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
