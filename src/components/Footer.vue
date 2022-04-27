<template>
  <footer class="text-center bg-dark text-muted pt-4">
    <section class="">
      <div class="container text-center text-md-start">
        <div class="row">
          <div class="col-md-3 col-lg-4 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">
              Royal
              <i class="fa-solid fa-car mx-2 mb-3"></i>
              Rental
            </h6>
            <p>
              Royal Car Rentals offers you a wide range of rental cars for any
              kind of needs. We pride ourselves in offering the best services in
              the market.
            </p>
          </div>
          <div class="col-md-3 col-lg-2 mx-auto mb-4 hovering">
            <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <router-link :to="{ name: 'home' }" class="muted"
                >Home</router-link
              >
            </p>
            <p>
              <router-link :to="{ name: 'cars' }" class="muted"
                >Cars</router-link
              >
            </p>
            <p>
              <router-link :to="{ name: 'aboutUs' }" class="muted"
                >About Us</router-link
              >
            </p>
            <p>
              <router-link :to="{ name: 'contactUs' }" class="muted"
                >Contact Us</router-link
              >
            </p>
            <p>
              <router-link :to="{ name: 'terms' }" class="muted"
                >Terms And Conditions</router-link
              >
            </p>
          </div>
          <div class="col-md-4 col-lg-3 mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i class="fas fa-home me-3"></i> Brasov, Strada Lebedei 27, RO
            </p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              royalcarrental@gmail.com
            </p>
            <p><i class="fas fa-phone me-3"></i> (+4) 0747923662</p>
            <p><i class="fas fa-print me-3"></i> 0269838561</p>
          </div>
          <div class="col-md-2 col-lg-3 d-flex flex-column hovering">
            <h6 class="text-uppercase fw-bold">Social Media</h6>
            <a href="" class="mt-4 text-muted">
              <i class="fa-brands fa-facebook fa-2xl"></i>
            </a>
            <a href="" class="mt-4 text-muted">
              <i class="fab fa-twitter fa-2xl"></i>
            </a>
            <a href="" class="my-4 text-muted">
              <i class="fab fa-instagram fa-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.7)">
      © 2022 Royal Car Rental, Inc. All Rights Reserved
    </div>
  </footer>
</template>

<script>
import db from "../fb";
import auth from "../auth";
export default {};
</script>

<style scoped>
.hovering i:hover {
  color: #ffa900;
}
.hovering a:hover {
  color: #ffa900;
}
.muted {
  color: #6c757d;
}
</style>
