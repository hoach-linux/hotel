import { ref, computed } from "vue";

export default function useSortedHotels(hotels) {
  const selectedSort = ref("");
  const sortedHotels = computed(() => {
    return [...hotels.value].sort((hotel1, hotel2) =>
      hotel1[selectedSort.value]?.localeCompare(hotel2[selectedSort.value])
    );
  });

  return {
    selectedSort,
    sortedHotels,
  };
}
