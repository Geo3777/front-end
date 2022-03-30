import { createRouter, createWebHistory } from "vue-router";
import Navbar from "../components/Navbar.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Navbar,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
