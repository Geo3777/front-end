import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Cars from "../views/Cars.vue";
import AboutUs from "../views/AboutUs.vue";
import ContactUs from "../views/ContactUs.vue";
import Terms from "../views/Terms.vue";
import Admin from "../views/Admin/Admin.vue";
import AdminUsers from "../views/Admin/AdminUsers.vue";
import AdminCars from "../views/Admin/AdminCars.vue";
import AdminAppointments from "../views/Admin/AdminAppointments.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/cars",
    name: "cars",
    component: Cars,
  },
  {
    path: "/about",
    name: "aboutUs",
    component: AboutUs,
  },
  {
    path: "/contact",
    name: "contactUs",
    component: ContactUs,
  },
  {
    path: "/terms",
    name: "terms",
    component: Terms,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    children: [
      {
        path: "/admin/users",
        name: "users",
        component: AdminUsers,
      },
      {
        path: "/admin/cars",
        name: "acars",
        component: AdminCars,
      },
      {
        path: "/admin/appointments",
        name: "appointments",
        component: AdminAppointments,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;