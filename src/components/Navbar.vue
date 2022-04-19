<template>
  <nav
    id="mynav"
    class="navbar navbar-expand-lg navbar-dark fixed-top py-2"
    :class="{ change_color: scrollPosition > 1 }"
  >
    <div class="container">
      <a
        class="d-flex navbar-brand text-warning align-items-center mt-2"
        href="#"
      >
        <p class="">Royal</p>
        <i class="fa-solid fa-car mx-2 mb-3"></i>
        <p class="">Rental</p>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul
          class="navbar-nav ms-auto d-flex align-items-center justify-content-center"
        >
          <li class="nav-item">
            <router-link
              :to="{ name: 'home' }"
              class="nav-link"
              active-class="active"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'cars' }"
              class="nav-link"
              active-class="active"
              >Cars</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'aboutUs' }"
              class="nav-link"
              active-class="active"
              >About Us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'contactUs' }"
              class="nav-link"
              active-class="active"
              >Contact Us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'terms' }"
              class="nav-link"
              active-class="active"
              >Terms And Conditions</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'users' }"
              class="nav-link"
              active-class="active"
              >Admin</router-link
            >
          </li>
          <li v-if="isSignedIn" class="nav-item mx-auto">
            <button class="btn btn-warning" @click="signOut">Sign Out</button>
          </li>
          <li v-else class="nav-item mx-auto">
            <router-link
              style="text-decoration: none"
              class="btn btn-warning"
              :to="{ name: 'signIn' }"
              >Sign In</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import db from "../fb";
import auth from "../auth";
export default {
  data() {
    return {
      scrollPosition: null,
      isSignedIn: false,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    signOut() {
      auth.signOut().then(() => {
        console.log("signed out");
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.isSignedIn = true;
        this.$store.state.isSignedIn = true;
        console.log(this.isSignedIn);
        console.log(this.$store.state.isSignedIn);
      } else {
        this.isSignedIn = false;
        this.$store.state.isSignedIn = false;
        console.log(this.isSignedIn);
        console.log(this.$store.state.isSignedIn);
      }
    });
  },
};
</script>

<style scoped>
.change_color {
  background-color: #2d353f;
}
.shadow-down {
  box-shadow: 2px 2px 5px #1b1b1b;
}
@media (max-width: 992px) {
  .navbar {
    background-color: #2d353f !important;
  }
}
</style>
