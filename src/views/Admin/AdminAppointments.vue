<template>
  <div class="col-lg-4 text-light p-0 m-0">
    <h1 class="text-warning text-center py-2 bg-dmistic px-0 mx-0">
      {{ message }}
    </h1>
    <form
      class="px-4"
      action="javascript:void(0)"
      ref="aForm"
      @submit="formSubmit"
    >
      <div class="form-group">
        <label class="lead">Car ID</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="122435"
          v-model="appointment.carId"
        />
      </div>
      <div class="form-group">
        <label class="lead">User ID</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="122435"
          v-model="appointment.userId"
        />
      </div>
      <div class="form-group">
        <label class="lead">User Name</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="George Otgon"
          v-model="appointment.userName"
        />
      </div>
      <div class="form-group">
        <label class="lead">Car Delivery Address(Only In Brasov)</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="Street and Number"
          v-model="appointment.deliveryAddress"
        />
      </div>
      <div class="form-group">
        <label class="lead">Car Pick-Up Address(Only In Brasov)</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="Street and Number"
          v-model="appointment.pickupAddress"
        />
      </div>
      <div class="form-group">
        <label class="lead">Car Delivery Time</label>
        <Datepicker
          v-model="appointment.deliveryTime"
          :minDate="new Date()"
          dark
        ></Datepicker>
      </div>
      <div class="form-group">
        <label class="lead">Car Pick-Up Time</label>
        <Datepicker
          v-model="appointment.pickupTime"
          :minDate="new Date()"
          dark
        ></Datepicker>
      </div>

      <div class="form-group">
        <label class="lead">Payment Method</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="cash"
          v-model="appointment.paymentMethod"
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
            <th scope="col" class="">Car ID</th>
            <th scope="col" class="">User ID</th>
            <th scope="col" class="">User Name</th>
            <th scope="col" class="">Delivery Address</th>
            <th scope="col" class="">Pick-Up Address</th>
            <th scope="col" class="">Delivery Time</th>
            <th scope="col" class="">Pick-Up Time</th>
            <th scope="col" class="">Payment Method</th>
            <th scope="col" class="">Total Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(appointment, index) in appointments" v-bind:key="index">
            <td>{{ appointment.id }}</td>
            <td>{{ appointment.CarId }}</td>
            <td>{{ appointment.UserId }}</td>
            <td>{{ appointment.UserName }}</td>
            <td>{{ appointment.DeliveryAddress }}</td>
            <td>{{ appointment.PickUpAddress }}</td>
            <td>{{ appointment.DisplayDeliveryTime }}</td>
            <td>{{ appointment.DisplayPickUpTime }}</td>
            <td>{{ appointment.PaymentMethod }}</td>
            <td>{{ appointment.TotalPrice }}</td>
            <td>
              <button
                @click="deleteAppointment(appointment.id)"
                class="btn btn-danger"
              >
                delete
              </button>
            </td>
            <td>
              <button
                @click="updateAppointment(appointment)"
                class="btn btn-primary"
              >
                update
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
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
function getRandomId() {
  var min = 0;
  var max = 100000;
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
export default {
  data() {
    return {
      appointments: [],
      appointment: {
        id: "",
        carId: "",
        userId: "",
        userName: "",
        deliveryAddress: "",
        pickupAddress: "",
        deliveryTime: "",
        pickupTime: "",
        paymentMethod: "",
        totalPrice: "",
        displayDeliveryTime: "",
        displayPickupTime: "",
      },
      car: {},
      message: "Add An Appointment",
      date: null,
    };
  },
  components: { Datepicker },
  methods: {
    formSubmit() {
      //calculam diferenta zilelor fara ora
      let date1 = new Date(this.appointment.deliveryTime);
      let date11 = new Date(
        date1.getFullYear(),
        date1.getMonth(),
        date1.getDate()
      );
      let date2 = new Date(this.appointment.pickupTime);
      let date22 = new Date(
        date2.getFullYear(),
        date2.getMonth(),
        date2.getDate()
      );
      let diffTime = Math.abs(date22 - date11);
      let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      //convertim datele din timestamp in date
      var todate1 = new Date(this.appointment.deliveryTime).getDate();
      var tomonth1 = new Date(this.appointment.deliveryTime).getMonth() + 1;
      var toyear1 = new Date(this.appointment.deliveryTime).getFullYear();
      var tohour1 = new Date(this.appointment.deliveryTime).getHours();
      var tominute1 = new Date(this.appointment.deliveryTime).getMinutes();
      this.appointment.displayDeliveryTime =
        todate1 +
        "/" +
        tomonth1 +
        "/" +
        toyear1 +
        " " +
        tohour1 +
        ":" +
        tominute1;
      var todate2 = new Date(this.appointment.pickupTime).getDate();
      var tomonth2 = new Date(this.appointment.pickupTime).getMonth() + 1;
      var toyear2 = new Date(this.appointment.pickupTime).getFullYear();
      var tohour2 = new Date(this.appointment.pickupTime).getHours();
      var tominute2 = new Date(this.appointment.pickupTime).getMinutes();
      this.appointment.displayPickupTime =
        todate2 +
        "/" +
        tomonth2 +
        "/" +
        toyear2 +
        " " +
        tohour2 +
        ":" +
        tominute2;
      var docRef = db.collection("cars").doc(`${this.appointment.carId}`);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            //daca exista masina facem programarea
            this.car = doc.data();
            this.appointment.totalPrice = diffDays * this.car.Price;
            const newId = getRandomId();
            //Daca nu are ID creem o programare
            if (this.appointment.id == "") {
              db.collection("appointments")
                .doc(`${newId}`)
                .set({
                  CarId: parseInt(this.appointment.carId, 10),
                  DeliveryAddress: this.appointment.deliveryAddress,
                  DeliveryTime: this.appointment.deliveryTime,
                  PaymentMethod: this.appointment.paymentMethod,
                  PickUpAddress: this.appointment.pickupAddress,
                  PickUpTime: this.appointment.pickupTime,
                  TotalPrice: this.appointment.totalPrice,
                  UserId: this.appointment.userId,
                  UserName: this.appointment.userName,
                  DisplayDeliveryTime: this.appointment.displayDeliveryTime,
                  DisplayPickUpTime: this.appointment.displayPickupTime,
                  id: newId,
                })
                .then(
                  (this.appointment.id = ""),
                  (this.appointment.carId = ""),
                  (this.appointment.userId = ""),
                  (this.appointment.userName = ""),
                  (this.appointment.deliveryAddress = ""),
                  (this.appointment.pickupAddress = ""),
                  (this.appointment.deliveryTime = ""),
                  (this.appointment.pickupTime = ""),
                  (this.appointment.paymentMethod = ""),
                  (this.appointment.totalPrice = ""),
                  (date1 = ""),
                  (date2 = ""),
                  this.$refs.aForm.reset()
                );
              //Daca are ID atunci inseamna ca modificam o programare
            } else {
              db.collection("appointments")
                .doc(`${this.appointment.id}`)
                .set({
                  CarId: parseInt(this.appointment.carId, 10),
                  DeliveryAddress: this.appointment.deliveryAddress,
                  DeliveryTime: this.appointment.deliveryTime,
                  PaymentMethod: this.appointment.paymentMethod,
                  PickUpAddress: this.appointment.pickupAddress,
                  PickUpTime: this.appointment.pickupTime,
                  TotalPrice: parseInt(this.appointment.totalPrice, 10),
                  UserId: this.appointment.userId,
                  UserName: this.appointment.userName,
                  DisplayDeliveryTime: this.appointment.displayDeliveryTime,
                  DisplayPickUpTime: this.appointment.displayPickupTime,
                  id: this.appointment.id,
                })
                .then(
                  (this.appointment.id = ""),
                  (this.appointment.carId = ""),
                  (this.appointment.userId = ""),
                  (this.appointment.userName = ""),
                  (this.appointment.deliveryAddress = ""),
                  (this.appointment.pickupAddress = ""),
                  (this.appointment.deliveryTime = ""),
                  (this.appointment.pickupTime = ""),
                  (this.appointment.paymentMethod = ""),
                  (this.appointment.totalPrice = ""),
                  this.$refs.aForm.reset(),
                  (this.message = "Add An Appointment")
                );
            }
          } else {
            alert("No such car!");
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    updateAppointment(appointment) {
      this.appointment.carId = appointment.CarId;
      this.appointment.userId = appointment.UserId;
      this.appointment.userName = appointment.UserName;
      this.appointment.deliveryAddress = appointment.DeliveryAddress;
      this.appointment.pickupAddress = appointment.PickUpAddress;
      this.appointment.deliveryTime = appointment.DeliveryTime;
      this.appointment.pickupTime = appointment.PickUpTime;
      this.appointment.paymentMethod = appointment.PaymentMethod;
      this.appointment.id = parseInt(appointment.id);
      this.message = "Edit An Appointment";
    },
    deleteAppointment(id) {
      db.collection("appointments").doc(`${id}`).delete();
    },
  },
  created() {
    db.collection("appointments").onSnapshot((snap) => {
      this.appointments = [];
      snap.forEach((doc) => {
        this.appointments.push(doc.data());
      });
    });
  },
};
</script>

<style scoped>
.table-responsive {
  max-height: 520px;
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
::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
</style>
