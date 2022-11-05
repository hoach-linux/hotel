import Main from "@/pages/MainPage";
import HotelPage from "@/pages/HotelPage";
import HotelIdPage from "@/pages/HotelIdPage";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import { createRouter, createWebHistory } from "vue-router";
import Cookies from "js-cookie"

const routes = [
  {
    path: "/",
    meta: { auth: true },
    component: Main,
  },
  {
    path: "/hotels",
    component: HotelPage,
    meta: { auth: true },
    name: "hotels",
  },
  {
    path: "/hotels/:id",
    component: HotelIdPage,
  },
  {
    path: "/register",
    component: Register,
    name: 'register',
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

router.beforeEach((to, from, next) => {
  let token = Cookies.get("token")

  const requireAuth = to.matched.some(page => page.meta.auth)

  if(!token && requireAuth) {
    next('/register')
  } else {
    next()
  }
})

export default router;
