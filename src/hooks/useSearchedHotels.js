import { ref, computed } from "vue";

export default function useSortedPost(sortedHotels) {
  const searchQuery = ref("");
  const searchedHotels = computed(() => {
    return sortedHotels.value.filter((hotel) =>
      hotel.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return {
    searchQuery,
    searchedHotels,
  };
}
