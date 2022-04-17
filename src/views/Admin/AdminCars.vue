<template>
  <div class="col-lg-4 text-light p-0 m-0">
    <h1 class="text-warning text-center py-2 bg-dmistic px-0 mx-0">
      {{ message }}
    </h1>
    <form
      action="javascript:void(0)"
      class="px-4"
      ref="carForm"
      @submit="formSubmit"
    >
      <div class="form-group">
        <label class="lead">Car Brand And Model</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="Audi A6"
          v-model="car.CarBrandAndModel"
        />
      </div>
      <div class="form-group">
        <label class="lead">Price</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="120"
          v-model="car.Price"
        />
      </div>
      <div class="form-group">
        <label class="lead">Car Type</label>
        <input
          placeholder="Sedan"
          type="text"
          class="form-control bg-dmistic text-light"
          v-model="car.CarType"
        />
      </div>
      <div class="form-group">
        <label class="lead">Fuel Type</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="Diesel"
          v-model="car.FuelType"
        />
      </div>
      <div class="form-group">
        <label class="lead">Transmision</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="Automatic"
          v-model="car.Transmision"
        />
      </div>
      <div class="form-group">
        <label class="lead">Engine Capacity</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="2000"
          v-model="car.EngineCapacity"
        />
      </div>
      <div class="form-group">
        <label class="lead">Year</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="2022"
          v-model="car.Year"
        />
      </div>
      <div class="form-group">
        <label class="lead">Traction</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="AWD"
          v-model="car.Traction"
        />
      </div>
      <div class="">
        <label class="form-label lead">Upload A Picture</label>
        <input
          class="form-control bg-dmistic text-light input"
          type="file"
          id="image"
          @change="encodeImageFileAsURL()"
        />
      </div>
      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-warning my-2 py-1">Submit</button>
      </div>
    </form>
  </div>
  <div class="col-lg-8 p-0 m-0">
    <div class="table-responsive">
      <table class="table table-hover table-dark">
        <thead style="min-height: 220px">
          <tr style="min-height: 220px">
            <th scope="col" class="">#</th>
            <th scope="col" class="">Brand And Model</th>
            <th scope="col" class="">Price</th>
            <th scope="col" class="">Vehicle Type</th>
            <th scope="col" class="">Fuel Type</th>
            <th scope="col" class="">Transmision</th>
            <th scope="col" class="">Engine Capacity</th>
            <th scope="col" class="">Year</th>
            <th scope="col" class="">Traction</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(car, index) in cars" v-bind:key="index">
            <td>{{ car.id }}</td>
            <td>{{ car.CarBrandAndModel }}</td>
            <td>{{ car.Price }}</td>
            <td>{{ car.CarType }}</td>
            <td>{{ car.FuelType }}</td>
            <td>{{ car.Transmision }}</td>
            <td>{{ car.EngineCapacity }}</td>
            <td>{{ car.Year }}</td>
            <td>{{ car.Traction }}</td>
            <td>
              <button class="btn btn-danger" @click="deleteCar(car.id)">
                Delete
              </button>
            </td>
            <td>
              <button class="btn btn-primary" @click="updateCar(car)">
                Update
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import db from "../../fb";
function getRandomId() {
  var min = 0;
  var max = 100000;
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
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
      message: "Add A Car",
    };
  },
  methods: {
    encodeImageFileAsURL() {
      const file = document.querySelector("input[type=file]").files[0];
      const reader = new FileReader();
      var that = this;
      reader.addEventListener(
        "load",
        function () {
          that.car.Photo = reader.result;
        },
        false
      );
      if (file) {
        reader.readAsDataURL(file);
      }
    },
    formSubmit() {
      const newId = getRandomId();
      //Daca nu are ID creem o masina
      if (this.car.id == "") {
        db.collection("cars")
          .doc(`${newId}`)
          .set({
            CarBrandAndModel: this.car.CarBrandAndModel,
            CarType: this.car.CarType,
            EngineCapacity: parseInt(this.car.EngineCapacity, 10),
            FuelType: this.car.FuelType,
            Photo: this.car.Photo,
            Price: parseInt(this.car.Price, 10),
            Traction: this.car.Traction,
            Transmision: this.car.Transmision,
            Year: parseInt(this.car.Year, 10),
            id: newId,
          })
          .then(
            (this.car.id = ""),
            (this.car.CarBrandAndModel = ""),
            (this.car.Price = ""),
            (this.car.CarType = " "),
            (this.car.FuelType = ""),
            (this.car.Transmision = ""),
            (this.car.EngineCapacity = ""),
            (this.car.Year = ""),
            (this.car.Traction = ""),
            this.$refs.carForm.reset()
          );
        //Daca are ID atunci inseamna ca modificam masina
      } else {
        db.collection("cars")
          .doc(`${this.car.id}`)
          .set({
            CarBrandAndModel: this.car.CarBrandAndModel,
            CarType: this.car.CarType,
            EngineCapacity: parseInt(this.car.EngineCapacity, 10),
            FuelType: this.car.FuelType,
            Photo: this.car.Photo,
            Price: parseInt(this.car.Price, 10),
            Traction: this.car.Traction,
            Transmision: this.car.Transmision,
            Year: parseInt(this.car.Year, 10),
            id: this.car.id,
          })
          .then(
            (this.car.id = ""),
            (this.car.CarBrandAndModel = ""),
            (this.car.Price = ""),
            (this.car.CarType = " "),
            (this.car.FuelType = ""),
            (this.car.Transmision = ""),
            (this.car.EngineCapacity = ""),
            (this.car.Year = ""),
            (this.car.Traction = ""),
            this.$refs.carForm.reset(),
            (this.message = "Add A Car")
          );
      }
    },
    deleteCar(id) {
      db.collection("cars").doc(`${id}`).delete();
    },
    updateCar(car) {
      this.car = car;
      this.message = "Edit A Car";
    },
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
.table-responsive {
  max-height: 600px;
}
div::-webkit-scrollbar {
  width: 6px;
}
div::-webkit-scrollbar-track {
  border-radius: 10px;
}
div::-webkit-scrollbar-thumb {
  background-color: #ffa900;
}
</style>
