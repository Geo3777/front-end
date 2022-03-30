<template>
  <!-- showcase -->
  <section id="showcase" class="py-5">
    <div class="primary-overlay text-white">
      <div class="home-inner container">
        <div class="row align-items-center justify-content-center">
          <!-- promoting -->
          <div
            class="col-lg-8 d-none d-lg-block justify-content-start align-items-center"
          >
            <h1 class="display-4 text-center">
              Rent <strong> reliable cars</strong> for
              <strong>great prices</strong> and have them delivered at your
              <strong>doorstep</strong>. Only in <strong>Brasov</strong>!
            </h1>
          </div>
          <!-- carousel -->
          <div class="col-lg-4 justify-content-center align-items-center">
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../assets/c1.jpg"
                    class="d-block w-100 imgg"
                    alt="..."
                  />
                  <div class="carousel-caption text-warning">
                    <h5>Step 1: Pick Your Car</h5>
                    <p>
                      Choose a car that fits your needs from our great selection
                      range.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/c2.jpg"
                    class="d-block w-100 imgg over"
                    alt="..."
                  />
                  <div class="carousel-caption text-warning">
                    <h5>Step 2: Choose Your Location</h5>
                    <p>
                      Select where we drop your car off and where we pick it up.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/c3.jpg"
                    class="d-block w-100 imgg over over1"
                    alt="..."
                  />
                  <div class="carousel-caption text-warning">
                    <h5>Step 3: Choose The Date</h5>
                    <p>Determine the time we drop off and pick up your car.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/c4.jpg"
                    class="d-block w-100 imgg"
                    alt="..."
                  />
                  <div class="carousel-caption text-warning">
                    <h5>Step 4: Let Us Take Care Of The Rest</h5>
                    <p>
                      After you completed the first 3 steps we will manage the
                      rest.
                    </p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Why Us -->
  <section>
    <div class="container pt-3">
      <div class="text-center text-light">
        <h1 class="display-4 fw-bold text-warning">Why Us?</h1>
      </div>
      <div class="row align-items-center justify-content-center">
        <div class="card-group">
          <div class="col-lg-4 col-md-6 col-sm-12 p-3">
            <div
              class="card cardd2 w-100 h-100 bg-warning"
              style="width: 18rem"
            >
              <img
                src="../assets/reliable.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center">Reliable Cars</h5>
                <p class="card-text text-justify justifyy text-dmistic">
                  Our cars are meticulously checked because we care about your
                  safety. Every month our engineers perfom various tests in
                  order to spot and fix any problems with our vehicles.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-3">
            <div class="card cardd w-100 h-100" style="width: 18rem">
              <img src="../assets/price.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center text-warning">
                  Affordable Prices
                </h5>
                <p class="card-text text-justify justifyy text-dmistic">
                  Even though we offer premium services, our prices are very
                  affordable. We pride ourselves in having the best
                  price-quality ratio in the market!
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-3">
            <div
              class="card cardd2 w-100 h-100 bg-warning"
              style="width: 18rem"
            >
              <img src="../assets/deliver.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">We Deliver Our Cars</h5>
                <p class="card-text text-justify justifyy text-dmistic">
                  We understand that in today's world your time is very valuable
                  and we are glad to help! Get your car delivered to your
                  doorstep as well as picked up once you are done. This service
                  is available inside Brasov!
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-3">
            <div class="card cardd w-100 h-100">
              <img
                src="../assets/insurance.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center text-warning">
                  Tax & Insurance Included
                </h5>
                <p class="card-text text-justify justifyy text-dmistic">
                  The hourly price includes Taxes & Insurance. No hidden
                  charges!
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-3">
            <div
              class="card cardd2 w-100 h-100 bg-warning"
              style="width: 18rem"
            >
              <img src="../assets/tow.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">24/7 Roadside Assistance</h5>
                <p class="card-text text-justify justifyy text-dmistic">
                  You drive to adventures, we get it. We and our roadside
                  assistance partners are available around the clock.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 p-3">
            <div class="card cardd w-100 h-100" style="width: 18rem">
              <img
                src="../assets/costumer.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title text-center text-warning">
                  Friendly Costumer Service
                </h5>
                <p class="card-text text-justify justifyy text-dmistic">
                  Our operators are 27/7 at your disposal and always delighted
                  to help! Your happiness is our happiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Our cars -->
  <section class="mt-4">
    <div class="container-fluid bg-warning">
      <div class="row d-flex align-items-center">
        <div class="col-lg-8">
          <h1 class="display-4 text-dmistic text-center py-1">Our Cars</h1>
          <p class="lead text-dmistic text-justify justifyy px-5">
            We offer a wide range of cars you can choose from. You can go for a
            car that really suits your needs. Do you have a large family? We
            rent vans and SUVs. Do you like opulence? Our company provides top
            of the line luxury vehicles. Are you on a budget? Economic cars are
            on our list too!
          </p>
          <div class="w-100 d-flex justify-content-center my-3">
            <button class="btn btn-mistic btn-lg">See Our Cars!</button>
          </div>
        </div>
        <div class="col-lg-4 d-none d-lg-block">
          <img
            src="../assets/ShowCaseImg.jpg"
            class="img-responsive1"
            alt="Responsive image"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- About Us -->
  <section class="">
    <div class="container-fluid">
      <div class="row d-flex align-items-center">
        <div class="col-lg-4 d-none d-lg-block">
          <img
            src="../assets/ourcompany.jpg"
            class="img-responsive1"
            alt="Responsive image"
          />
        </div>
        <div class="col-lg-8">
          <h1 class="display-4 text-warning text-center py-1">Our Company</h1>
          <p class="lead text-warning text-justify justifyy px-5">
            Royal Car Rental strives to be the best company in the rental
            business, delivering cars to our clients doorsteps without charging
            any extra fee. Our goal is to make renting a car much more customer
            friendly. You will find out that we are very passionate about our
            work, because we love our job.
          </p>
          <div class="w-100 d-flex justify-content-center my-3">
            <button class="btn btn-warning btn-lg">Learn More!</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Contact us -->
  <section class="">
    <div class="container-fluid bg-warning">
      <div class="row d-flex align-items-center">
        <div class="col-lg-8">
          <h1 class="display-4 text-dmistic text-center py-1">Contact Us!</h1>
          <p class="lead text-dmistic text-justify justifyy px-5">
            Have questions about our cars, dates or pricing? Are you in need of
            roadside assistance? We will always be happy to help you! Feel free
            to contact us.
          </p>
          <div class="w-100 d-flex justify-content-center my-3">
            <button class="btn btn-mistic btn-lg">Contact Us!</button>
          </div>
        </div>
        <div class="col-lg-4 d-none d-lg-block">
          <img
            src="../assets/contactUs.jpg"
            class="img-responsive1"
            alt="Responsive image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#showcase {
  position: relative;
  background: url(../assets/ShowCaseImg2.jpg);
  min-height: 600px;
  background-size: cover;
  background-position: 50% 30%;
}
#showcase .primary-overlay {
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 992px) {
  #showcase {
    position: relative;
    background: url(../assets/ShowCaseImg2.jpg);
    min-height: 600px;
    background-size: cover;
    background-position: 50% 30%;
  }
}
@media only screen and (max-width: 995px) and (min-width: 773px) {
  .over1 {
    object-position: 50% 50%;
  }
}

#showcase .home-inner {
  padding-top: 100px;
}
.justifyy {
  margin: 0;
  text-align: justify;
}
.imgg {
  height: 450px;
  object-fit: cover;
}
.over {
  object-position: 50% 100%;
}
.carousel {
  opacity: 0.9;
}
.carousel-indicators .active {
  background-color: #ffa900;
}
.cardd {
  border: #ffa900 2px solid;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
}
.cardd2 {
  border: #ffa900 2px solid;
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
}
.img-responsive1 {
  display: block;
  width: 100%;
  object-fit: cover;
  min-height: 310px;
  max-height: 320px;
}
.col-lg-4 {
  padding: 0px;
}
</style>
