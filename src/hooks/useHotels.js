import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default function usePosts(limit) {
  let page = ref(1);
  const router = useRouter();
  const serverUrl = ref(
    "https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net"
  );
  const meta = ref("total_count");
  const hotels = ref([]);
  const totalPages = ref(0);
  const isHotelLoading = ref(true);
  const userData = ref(JSON.parse(localStorage.getItem("userData")));
  const fetching = async () => {
    try {
      const allHotels = await axios({
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "get",
        url: `${serverUrl.value}/items/hotels`,
        params: {
          meta: meta.value,
        },
      });

      totalPages.value = Math.ceil(allHotels.data.meta.total_count / limit);
      page.value = totalPages.value;

      const response = await axios.get(
        `${serverUrl.value}/items/hotels?filter={ "user_created": { "email": "${userData.value.email}"} }`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: {
            page: page.value,
            limit: limit,
          },
        }
      );

      hotels.value = await response.data.data.reverse();
    } catch (error) {
      if (error.message == "Request failed with status code 401") {
        alert("Login timed out, please login again");

        await axios.post(
          "https://b876ad7f-dd71-4ed3-829a-b2488d40b627.selcdn.net/auth/logout",
          {
            refresh_token: localStorage.getItem("refresh_token"),
          }
        );
        
        localStorage.clear();

        store.dispatch("post/authFalse");

        router.push("/login");
      }
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
