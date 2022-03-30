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
            <a class="nav-link active" aria-current="page" href="FrontPage.html"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="carPage.html">Cars</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="AboutUs.html">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="ContactUs.html">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Terms.html">Terms And Conditions</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="Admin.html">Admin</a>
          </li>
          <li class="nav-item mx-auto">
            <button class="btn btn-warning">Log In</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
.change_color {
  background-color: #2d353f;
}
@media (max-width: 992px) {
  .navbar {
    background-color: #2d353f !important;
  }
}
</style>
