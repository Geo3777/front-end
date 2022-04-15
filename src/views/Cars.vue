<template>
  <!-- wallpaper -->
  <section id="showcaseC" class="py-5">
    <div class="primary-overlay text-white">
      <div class="home-inner container"></div>
    </div>
  </section>
  <!-- main -->
  <div class="container text-light">
    <div class="row mt-5">
      <!-- filters -->
      <div class="col-lg-3 col-md-3 mb-5">
        <div class="sticky-top">
          <h2 class="fw-bold">Advanced Search</h2>
          <div class="line my-3"></div>
          <div
            class="accordion accordion-flush bg-dark"
            id="accordionFlushExample"
          >
            <!-- Price Range -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Price Range
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body bg-mistic">
                  <p>€/Day</p>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-warning"
                        id="inputGroup-sizing-default"
                        >Min</span
                      >
                    </div>
                    <input
                      type="text"
                      class="form-control bg-dmistic text-light"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-warning"
                        id="inputGroup-sizing-default"
                        >Max</span
                      >
                    </div>
                    <input
                      type="text"
                      class="form-control bg-dmistic text-light"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- Vehicle Type -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Vehicle Type
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body bg-mistic">
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="sedan"
                      checked
                    />
                    <label class="form-check-label" for="sedan">Sedan</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="break"
                      checked
                    />
                    <label class="form-check-label" for="break"
                      >Hatchback</label
                    >
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="suv"
                      checked
                    />
                    <label class="form-check-label" for="suv">SUV</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="sport"
                      checked
                    />
                    <label class="form-check-label" for="sport">Sport</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="van"
                      checked
                    />
                    <label class="form-check-label" for="van">Van</label>
                  </div>
                </div>
              </div>
            </div>
            <!-- Fuel Type -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Fuel Type
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body bg-mistic">
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="petrol"
                      checked
                    />
                    <label class="form-check-label" for="petrol">Petrol</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="diesel"
                      checked
                    />
                    <label class="form-check-label" for="diesel">Diesel</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="electric"
                      checked
                    />
                    <label class="form-check-label" for="electric"
                      >Electric</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- Transmision -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Transmission
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body bg-mistic">
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="manual"
                      checked
                    />
                    <label class="form-check-label" for="manual">Manual</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="automatic"
                      checked
                    />
                    <label class="form-check-label" for="automatic"
                      >Automatic</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- Engine Capacity -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSix">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  Engine Capacity
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body bg-mistic">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-warning"
                        id="inputGroup-sizing-default"
                        >Min</span
                      >
                    </div>
                    <input
                      type="text"
                      class="form-control bg-dmistic text-light"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-warning"
                        id="inputGroup-sizing-default"
                        >Max</span
                      >
                    </div>
                    <input
                      type="text"
                      class="form-control bg-dmistic text-light"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- Year -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSeven">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSeven"
                  aria-expanded="false"
                  aria-controls="flush-collapseSeven"
                >
                  Year
                </button>
              </h2>
              <div
                id="flush-collapseSeven"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingSeven"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body bg-mistic">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-warning"
                        id="inputGroup-sizing-default"
                        >Min</span
                      >
                    </div>
                    <input
                      type="text"
                      class="form-control bg-dmistic text-light"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-warning"
                        id="inputGroup-sizing-default"
                        >Max</span
                      >
                    </div>
                    <input
                      type="text"
                      class="form-control bg-dmistic text-light"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- Traction -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingEight">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseEight"
                  aria-expanded="false"
                  aria-controls="flush-collapseEight"
                >
                  Traction
                </button>
              </h2>
              <div
                id="flush-collapseEight"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingEight"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body bg-mistic">
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="FWD"
                      checked
                    />
                    <label class="form-check-label" for="FWD">FWD</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="RWD"
                      checked
                    />
                    <label class="form-check-label" for="RWD">RWD</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="AWD"
                      checked
                    />
                    <label class="form-check-label" for="AWD">AWD</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Reset Filters -->
          <div class="d-grid col-12 mx-auto">
            <button class="btn btn-lg btn-mistic text-warning" type="button">
              Reset Filters
            </button>
          </div>
        </div>
      </div>
      <!-- Sort and Cars -->
      <!-- Sort by -->
      <div class="col-lg-9 col-md-9">
        <div class="row">
          <div class="col">
            <div class="dropdown">
              <button
                class="btn btn-mistic btn-lg dropdown-toggle w-100"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By
              </button>
              <ul
                class="dropdown-menu dropdown-menu-dark w-100"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a class="dropdown-item" href="#">Price Ascending</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Price Descending</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Cars Cards -->
        <div class="row align-items-center justify-content-center">
          <section>
            <div class="container pt-2">
              <div class="row align-items-center justify-content-center">
                <div class="card-group">
                  <!-- car -->
                  <app-single-car></app-single-car>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SingleCar from "../components/SingleCar.vue";

import db from "../fb";
export default {
  data() {
    return {
      cars: [],
      car: {
        id: "",
        CarBrandAndModel: "",
        Price: "",
        CarType: "",
        FuelType: "",
        Transmision: "",
        EngineCapacity: "",
        Year: "",
        Traction: "",
      },
    };
  },
  components: {
    appSingleCar: SingleCar,
  },
  created() {
    db.collection("cars").onSnapshot((snap) => {
      this.cars = [];
      snap.forEach((doc) => {
        this.cars.push(doc.data());
      });
    });
  },
};
</script>

<style scoped>
#showcaseC {
  position: relative;
  background: url(../assets/carsHome.jpg);
  min-height: 60vh;
  background-size: cover;
  background-position: 50% 30%;
}
#showcaseC .primary-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.line {
  width: 260px;
  border-bottom: 5px solid rgb(238, 170, 23);
}
.accordion-button:not(.collapsed) {
  color: inherit;
  background: #2d353f;
}
.accordion-button:not(:not(.collapsed)) {
  color: inherit;
  background: #2d353f;
}
.accordion-button:not(.collapsed)::after {
  filter: brightness(0%) invert(70%);
}
.accordion-button:not(:not(.collapsed))::after {
  filter: brightness(0%) invert(70%);
}
.sticky-top {
  top: 90px;
}
.checkbox-warning-filled [type="checkbox"][class*="filled-in"]:checked {
  border-color: #ff8800;
  background-color: #ff8800;
}
</style>
