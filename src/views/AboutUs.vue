<template>
  <!-- wallpaper -->
  <section id="showcaseAbout" class="py-5">
    <div class="primary-overlay text-white">
      <div class="home-inner container"></div>
    </div>
  </section>
  <!-- What We Do -->
  <section>
    <div class="container text-secondary">
      <h1 class="display-6 text-center py-5">
        Royal Car Rental offers you a wide range of rental cars for any kind of
        needs. We pride ourselves in offering the best services in the market by
        being:
      </h1>
      <div class="row align-items-center justify-content-around pb-4">
        <div class="card-group p-0">
          <div class="col-lg-4 col-md-12 pb-2 pe-lg-4">
            <div
              class="card w-100 h-100 bg-mistic text-light"
              style="width: 18rem"
            >
              <div class="card-header bg-lmistic">
                <h3 class="card-title text-center text-warning">Effective</h3>
              </div>
              <div class="card-body">
                <p class="card-text text-justify justifyy lead">
                  We are the first car rental business that doesn't requier you
                  to come to our premises in order to rent a car. On top of
                  that, renting your car online and having it delivered at your
                  doorsteps makes the whole process so much easier!
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 ps-lg-2 pe-lg-2 pb-2">
            <div
              class="card w-100 h-100 bg-mistic text-light"
              style="width: 18rem"
            >
              <div class="card-header bg-lmistic">
                <h3 class="card-title text-center text-warning">Trustworthy</h3>
              </div>
              <div class="card-body">
                <p class="card-text text-justify justifyy lead">
                  Are you tired of scams and untrue advertising? You came to the
                  right place! We take pride in always being by your side, no
                  matter the situation! Hundreds of satisfied customers can
                  testify that our services are just like advertised.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 pb-2 ps-lg-4">
            <div
              class="card w-100 h-100 bg-mistic text-light"
              style="width: 18rem"
            >
              <div class="card-header bg-lmistic">
                <h3 class="card-title text-center text-warning">Caring</h3>
              </div>
              <div class="card-body">
                <p class="card-text text-justify justifyy lead">
                  We take royal care of our customers! Before we deliver our
                  cars, we make sure that they are spotless and mechanically
                  checked. On top of that feel free to call our customer service
                  any time, they are really friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Mission, Vision -->
  <section>
    <div class="container bg-mistic mt-4">
      <div class="row d-flex justify-content-center align-items-center">
        <!-- Mission -->
        <div class="col-lg-4 col-md-6 p-3 border-end border-dark">
          <h3 class="text-center text-warning">Our Mission</h3>
          <p class="text-justify justifyy text-light lead">
            Our ambition is to fully re-invent the car rental business. We
            believe that in our day everything happens in a blink of a second,
            and the rent-a-car business has to adapt to the current environment.
            Follow us in this amazing journey!
          </p>
        </div>
        <!-- Img -->
        <div class="col-lg-4 d-none d-lg-block">
          <img src="../assets/ourcompany.jpg" class="aboutUsImg w-100" alt="" />
        </div>
        <!-- Vision -->
        <div class="col-lg-4 col-md-6 p-3 border-start border-dark">
          <h3 class="text-center text-warning">Our Vision</h3>
          <p class="text-justify justifyy text-light lead">
            Royal Car Rental is timeless, meaning that we would never become
            obselete, no matter what time throws at us! We aim to continuously
            upgrade our services and cars in order to keep up with your needs
            and the forever evolving tehnology. This is our path!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#showcaseAbout {
  position: relative;
  background: url(../assets/AboutUsWp1.jpg);
  min-height: 60vh;
  background-size: cover;
  background-position: 50% 40%;
}
#showcaseAbout .primary-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.col-lg-4 {
  padding: 0px;
}
.aboutUsImg {
  object-fit: cover;
  max-width: 600px;
  min-height: 300px;
}
@media (max-width: 992px) {
  #showcaseAbout {
    position: relative;
    background: url(../assets/AboutUsWp1.jpg);
    min-height: 60vh;
    background-size: cover;
    background-position: 50% 0%;
  }
}
</style>
