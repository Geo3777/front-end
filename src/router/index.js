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
import Account from "../views/Account/Account.vue";
import SignIn from "../views/Account/SignIn.vue";
import Register from "../views/Account/Register.vue";
import createStore from "../store/index";
import Appointmets from "../views/Appointments.vue";
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
    path: "/appointments",
    name: "appointmentsUser",
    component: Appointmets,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    beforeEnter: (to, from, next) => {
      if (createStore.state.isAdmin == false) {
        next(Home);
      } else {
        next();
      }
    },
    children: [
      {
        path: "/admin/users",
        name: "users",
        component: AdminUsers,
        beforeEnter: (to, from, next) => {
          if (createStore.state.isAdmin == false) {
            next(Home);
          } else {
            next();
          }
        },
      },
      {
        path: "/admin/cars",
        name: "acars",
        component: AdminCars,
        beforeEnter: (to, from, next) => {
          if (createStore.state.isAdmin == false) {
            next(Home);
          } else {
            next();
          }
        },
      },
      {
        path: "/admin/appointments",
        name: "appointments",
        component: AdminAppointments,
        beforeEnter: (to, from, next) => {
          if (createStore.state.isAdmin == false) {
            next(Home);
          } else {
            next();
          }
        },
      },
    ],
  },
  {
    path: "/account",
    name: "account",
    component: Account,
    children: [
      {
        path: "/account/signIn",
        name: "signIn",
        component: SignIn,
      },
      {
        path: "/account/register",
        name: "register",
        component: Register,
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    redirect: "/",
    meta: {
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});

export default router;
