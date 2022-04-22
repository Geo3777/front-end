<template>
  <div class="col-lg-4 text-light p-0 m-0">
    <h1 class="text-warning text-center py-2 bg-dmistic px-0 mx-0">
      {{ message }}
    </h1>
    <form
      class="px-4"
      action="javascript:void(0)"
      ref="carForm"
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
        <input
          class="bg-dmistic text-light form-control"
          type="datetime-local"
          style="outline: none"
          v-model="appointment.deliveryTime"
        />
      </div>
      <div class="form-group">
        <label class="lead">Car Pick-Up Time</label>
        <input
          class="bg-dmistic text-light form-control"
          type="datetime-local"
          style="outline: none"
          v-model="appointment.pickupTime"
        />
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
            <td>{{ appointment.DeliveryTime }}</td>
            <td>{{ appointment.PickUpTime }}</td>
            <td>{{ appointment.PaymentMethod }}</td>
            <td>300</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
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
      },
      car: {},
      message: "Add An Appointment",
    };
  },
  methods: {
    formSubmit() {
      const date1 = this.appointment.deliveryTime;
      console.log(Date.parse(date1));
      const date2 = this.appointment.pickupTime;
      console.log(Date.parse(date2));
      const diffTime = Math.abs(Date.parse(date2) - Date.parse(date1));
      console.log(diffTime);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      console.log(diffDays + " days");
      var docRef = db.collection("cars").doc(this.appointment.carId);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.car = doc.data();
            console.log(this.car.Price);
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
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
