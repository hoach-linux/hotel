import axios from "axios";
import { ref, onMounted } from "vue";

export default function usePosts(limit) {
  let page = ref(1);
  const serverUrl = ref(
    "http://91.105.198.56"
  );
  const meta = ref("total_count");
  const hotels = ref([]);
  const totalPages = ref(0);
  const isHotelLoading = ref(true);
  const fetching = async () => {
    try {
      const allHotels = await axios.get(`${serverUrl.value}/items/hotels`, {
        params: {
          meta: meta.value,
        },
      });

      totalPages.value = Math.ceil(allHotels.data.meta.total_count / limit);
      page.value = totalPages.value;

      const response = await axios.get(`${serverUrl.value}/items/hotels`, {
        params: {
          page: page.value,
          limit: limit,
        },
      });

      hotels.value = await response.data.data.reverse();
    } catch (error) {
      console.log(error.name, error.message);
    } finally {
      setTimeout(() => (isHotelLoading.value = false), 0);
    }
  };
  const loadMoreHotels = async () => {
    try {
      if (page.value != 1) {
        page.value -= 1;

        const response = await axios.get(`${serverUrl.value}/items/hotels`, {
          params: {
            page: page.value,
            limit: limit,
          },
        });

        hotels.value = await [...hotels.value, ...response.data.data.reverse()];
      }
    } catch (error) {
      document.location.reload(true);
    }
  };
  onMounted(fetching);

  return {
    hotels,
    totalPages,
    isHotelLoading,
    page,
    meta,
    serverUrl,
    loadMoreHotels,
  };
}
