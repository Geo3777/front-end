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
                      <span class="input-group-text bg-warning">Min</span>
                    </div>
                    <input
                      type="text"
                      class="form-control bg-dmistic text-light"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      v-model="filters.priceRange.minPrice"
                      @change="database"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text bg-warning">Max</span>
                    </div>
                    <input
                      type="text"
                      class="form-control bg-dmistic text-light"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                      v-model="filters.priceRange.maxPrice"
                      @change="database"
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
                class="accordion-collapse collapse show"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body bg-mistic">
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="sedan"
                      v-model="filters.vehicleType.sedan"
                      @change="database"
                    />
                    <label class="form-check-label" for="sedan">Sedan</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="break"
                      v-model="filters.vehicleType.hatchback"
                      @change="database"
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
                      v-model="filters.vehicleType.suv"
                      @change="database"
                    />
                    <label class="form-check-label" for="suv">SUV</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="sport"
                      v-model="filters.vehicleType.sport"
                      @change="database"
                    />
                    <label class="form-check-label" for="sport">Sport</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="van"
                      v-model="filters.vehicleType.van"
                      @change="database"
                    />
                    <label class="form-check-label" for="van">Van</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Reset Filters -->
          <div class="d-grid col-12 mx-auto">
            <button
              class="btn btn-lg btn-mistic text-warning"
              type="button"
              @click="resetFilters"
            >
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
                  <a class="dropdown-item" href="#" @click="priceAscending"
                    >Price Ascending</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#" @click="priceDescending"
                    >Price Descending</a
                  >
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
                  <div
                    class="col-lg-6 col-md-12 col-sm-12 p-3"
                    v-for="(car, index) in cars"
                    v-bind:key="index"
                  >
                    <app-single-car
                      :carID="car.id"
                      :carCarBrandAndModel="car.CarBrandAndModel"
                      :carPrice="car.Price"
                      :carCarType="car.CarType"
                      :carFuelType="car.FuelType"
                      :carPhoto="car.Photo"
                      :carTransmision="car.Transmision"
                      :carEngineCapacity="car.EngineCapacity"
                      :carYear="car.Year"
                      :carTraction="car.Traction"
                    ></app-single-car>
                  </div>
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
      filters: {
        priceRange: {
          minPrice: 40,
          maxPrice: 300,
        },
        vehicleType: {
          vehicleTypes: [],
          sedan: true,
          hatchback: true,
          suv: true,
          sport: true,
          van: true,
        },
      },
      sorting: "asc",
    };
  },
  components: {
    appSingleCar: SingleCar,
  },
  methods: {
    //resetarea filtrelor la valorile initiale
    resetFilters() {
      this.filters.priceRange.minPrice = 40;
      this.filters.priceRange.maxPrice = 300;
      this.filters.vehicleType.sedan = true;
      this.filters.vehicleType.hatchback = true;
      this.filters.vehicleType.suv = true;
      this.filters.vehicleType.sport = true;
      this.filters.vehicleType.van = true;
      this.database();
    },
    //selectam sa ne arate masinile dupa pret crescator si reapelam functia database
    priceAscending() {
      this.sorting = "asc";
      this.database();
    },
    //selectam sa ne arate masinile dupa pret descrescator si reapelam functia database
    priceDescending() {
      this.sorting = "desc";
      this.database();
    },
    database() {
      //filtrele pentru checkbox-uri
      //fiecare checkbox este legat de o variabila cu true sau false
      //daca un checkbox este bifat(variabila este true) atunci introducem tipul masinii intr-un vector
      //altfel lasam pe pozitia aia un spatiu gol
      //la interogarea bazei de date folosim operatorul de tip "in"
      //asta inseamna ca daca tipul masinii se afla in vectorul creat de noi, o afisam
      //din pacate putem folosi interogari de tip "in" doar pe un field(limitare firebase)
      //de aceea am asa putine filtre
      if (this.filters.vehicleType.sedan == true) {
        this.filters.vehicleType.vehicleTypes[0] = "Sedan";
      } else {
        this.filters.vehicleType.vehicleTypes[0] = "";
      }
      if (this.filters.vehicleType.hatchback == true) {
        this.filters.vehicleType.vehicleTypes[1] = "Hatchback";
      } else {
        this.filters.vehicleType.vehicleTypes[1] = "";
      }
      if (this.filters.vehicleType.suv == true) {
        this.filters.vehicleType.vehicleTypes[2] = "SUV";
      } else {
        this.filters.vehicleType.vehicleTypes[2] = "";
      }
      if (this.filters.vehicleType.sport == true) {
        this.filters.vehicleType.vehicleTypes[3] = "Sport";
      } else {
        this.filters.vehicleType.vehicleTypes[3] = "";
      }
      if (this.filters.vehicleType.van == true) {
        this.filters.vehicleType.vehicleTypes[4] = "Van";
      } else {
        this.filters.vehicleType.vehicleTypes[4] = "";
      }

      //interogare baza de date dupa filtre si sorting
      db.collection("cars")
        .where("Price", ">=", parseInt(this.filters.priceRange.minPrice, 10))
        .where("Price", "<=", parseInt(this.filters.priceRange.maxPrice, 10))
        .where("CarType", "in", this.filters.vehicleType.vehicleTypes)
        .orderBy("Price", this.sorting)
        .onSnapshot((snap) => {
          this.cars = [];
          snap.forEach((doc) => {
            this.cars.push(doc.data());
          });
        });
    },
  },
  created() {
    //functie care afiseaza din baza de date masini cu filtre si sorting si asculta dupa modificari
    this.database();
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
.accordion {
}
</style>
