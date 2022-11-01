<template>
  <div v-if="this.hotels.length > 0" class="hotels">
    <transition-group name="hotel-list" mode="out-in">
      <hotel-item
        v-for="hotel in hotels"
        :hotel="hotel"
        :key="hotel.id"
        @remove="$emit('remove', hotel)"
        style="will-change: transform"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: #c21e56; text-align: center; display: block" class="text-2xl">
    HOTEL LIST IS EMPTY!
  </h2>
</template>

<script>
import hotelItem from "./hotelItem.vue";

export default {
  components: { hotelItem },
  props: {
    hotels: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.hotel-list-enter-active,
.hotel-list-leave-active {
  transition: .8s ease-in-out;
}

.hotel-list-enter-from,
.hotel-list-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.hotel-list-move {
  transition: transform .8s ease;
}
.hotels {
  margin-bottom: 30px;
}
</style>
