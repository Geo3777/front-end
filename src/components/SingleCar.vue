<template>
  <div>
    <!-- car -->
    <div class="card w-100 h-100 bg-mistic" style="width: 18rem">
      <img v-bind:src="carPhoto" class="card-img-top carImg" alt="..." />
      <div class="card-body">
        <h5 class="card-title display-6 text-center fw-bold">
          {{ carCarBrandAndModel }}
        </h5>
        <h5 class="card-title text-center display-7 fw-bold">
          €{{ carPrice }}
        </h5>
        <div class="card-text p-2">
          <div class="row bg-lmistic">
            <div
              class="col carDetails d-flex align-items-center justify-content-center"
            >
              <p class="lead m-0 p-2">{{ carCarType }}</p>
            </div>
            <div
              class="col carDetails d-flex align-items-center justify-content-center"
            >
              <p class="lead m-0 p-2">{{ carFuelType }}</p>
            </div>
            <div
              class="col carDetails d-flex align-items-center justify-content-center"
            >
              <p class="lead m-0 p-2">{{ carTransmision }}</p>
            </div>
          </div>
          <div class="row bg-lmistic">
            <div
              class="col carDetails d-flex align-items-center justify-content-center"
            >
              <p class="lead m-0 p-2">{{ carEngineCapacity }}cc</p>
            </div>
            <div
              class="col carDetails d-flex align-items-center justify-content-center"
            >
              <p class="lead m-0 p-2">{{ carYear }}</p>
            </div>
            <div
              class="col carDetails d-flex align-items-center justify-content-center"
            >
              <p class="lead m-0 p-2">{{ carTraction }}</p>
            </div>
          </div>
        </div>
        <div class="d-grid w-100">
          <button
            class="btn btn-warning btn-lg btn-fullW mt-2"
            type="button"
            data-bs-toggle="modal"
            :data-bs-target="`#m${carID}`"
            @click="check"
          >
            Rent It!
          </button>
        </div>
      </div>
    </div>

    <!-- /car -->
    <!-- modal -->
    <div
      class="modal fade"
      :id="`m${carID}`"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      role="dialog"
      v-if="isSignedIn"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-mistic text-light">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">
              {{ carCarBrandAndModel }} {{ carYear }}
            </h3>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form
              class="px-4"
              action="javascript:void(0)"
              ref="aForm"
              @submit="formSubmit"
            >
              <!-- location -->
              <section>
                <h4>Location</h4>
                <div class="form-group py-2">
                  <label for="deliveryA" class="lead"
                    >Car Delivery Address(Only In Brasov)</label
                  >
                  <input
                    type="text"
                    class="form-control bg-dmistic text-light"
                    id="deliveryA"
                    placeholder="Street and Number"
                    v-model="appointment.deliveryAddress"
                  />
                </div>
                <div class="form-group py-2">
                  <label for="deliveryP" class="lead"
                    >Car Pick-Up Address(Only In Brasov)</label
                  >
                  <input
                    type="text"
                    class="form-control bg-dmistic text-light"
                    id="deliveryP"
                    placeholder="Street and Number"
                    v-model="appointment.pickupAddress"
                  />
                </div>
              </section>
              <hr />
              <!-- Date&Time -->
              <section>
                <h4>Date & Time</h4>
                <div class="form-group py-2">
                  <label for="datetimepicker1" class="lead"
                    >Car Delivery Time</label
                  >
                  <p></p>
                  <Datepicker
                    v-model="appointment.deliveryTime"
                    :minDate="new Date()"
                    :disabledDates="finalDates"
                    dark
                  ></Datepicker>
                </div>
                <div class="form-group py-2">
                  <label for="datetimepicker2" class="lead"
                    >Car Pick-Up Time</label
                  >
                  <Datepicker
                    v-model="appointment.pickupTime"
                    :minDate="new Date()"
                    :disabledDates="finalDates"
                    dark
                  ></Datepicker>
                </div>
                <button
                  class="btn btn-warning mt-2"
                  type="button"
                  @click="payment"
                >
                  Calculate Price
                </button>
              </section>
              <hr />
              <!-- payment -->
              <section>
                <h4>Payment</h4>
                <p class="lead">Total Payment: {{ appointment.totalPrice }}€</p>
                <!-- switch -->
                <div class="switching py-2 d-flex">
                  <p class="lead me-2">cash</p>
                  <label class="switch">
                    <input
                      @change="paymentMethodF"
                      v-model="cardPayment"
                      type="checkbox"
                    />
                    <span class="slider round"></span>
                  </label>
                  <p class="lead ms-2">card</p>
                </div>
                <!-- Card -->
                <div v-if="cardPayment">
                  <p class="lead text-center p-0 m-0">Payment Details</p>
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group py-2">
                        <label for="nameC" class="lead">Person Name</label>
                        <input
                          class="bg-dmistic text-light w-100 form-control p-2"
                          type="text"
                          style="outline: none"
                          id="nameC"
                          placeholder="Frank Winter"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group py-2">
                        <label for="cardN" class="lead">Card Number</label>
                        <input
                          class="bg-dmistic text-light w-100 form-control p-2"
                          type="text"
                          style="outline: none"
                          id="cardN"
                          placeholder="1234 5678 435679"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group py-2">
                        <label for="datetimepicker3" class="lead"
                          >Expire Date</label
                        >
                        <input
                          class="bg-dmistic text-light w-100 form-control p-2"
                          type="month"
                          style="outline: none"
                          id="datetimepicker3"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="form-group py-2">
                        <label for="cardCV" class="lead">CVV/CVC</label>
                        <input
                          class="bg-dmistic text-light w-100 form-control p-2"
                          type="password"
                          style="outline: none"
                          id="cardCV"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" />
                <label class="form-check-label">
                  I agree to Royal Car Rental Terms And Condtions!
                </label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <p>
              *A Royal Car Rental representative will call you to establish
              further details and to confirm your order.
            </p>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" @click="formSubmit" class="btn btn-warning">
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- /modal -->
  </div>
</template>

<script>
import db from "../fb";
import auth from "../auth";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
//genereaza id-uri random
function getRandomId() {
  var min = 0;
  var max = 100000;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//functii care creeaza vectori de date intre doua date
Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};
function getDates(startDate, stopDate) {
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(new Date(currentDate));
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
}
export default {
  // date provenite de la Cars.vue pentru fiecare instanta de masina
  props: {
    carID: Number,
    carCarBrandAndModel: String,
    carPrice: Number,
    carCarType: String,
    carFuelType: String,
    carTransmision: String,
    carEngineCapacity: Number,
    carYear: Number,
    carTraction: String,
    carPhoto: String,
  },
  data() {
    return {
      isSignedIn: false,
      cardPayment: false,
      appointment: {
        id: "",
        carId: "",
        userId: "",
        userName: "",
        deliveryAddress: "",
        pickupAddress: "",
        deliveryTime: "",
        pickupTime: "",
        paymentMethod: "cash",
        totalPrice: "",
        displayDeliveryTime: "",
        displayPickupTime: "",
      },
      dates: [],
      infos: {},
      finalDates: [],
      array: [],
    };
  },
  components: { Datepicker },
  //metoda care verifica daca utilizatorul este logat si apoi datele disponibile pentru masini
  methods: {
    check() {
      //doar daca esti logat poti inchira o masina
      if (this.isSignedIn == false) {
        alert("You need to Sign In in order to rent a car");
      }
      //altfel daca esti logat si apesi sa cauti o masina, programul cauta automat datele disponibile
      //extragem de pe firebase datele ocupate pentru masina respectiva
      var docRef = db.collection("disabledDates").doc(`${this.carID}`);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            //primim raspunsul de la firebase
            this.infos = doc.data();
            //extragem doar ce ne trebe
            this.dates = this.infos.Dates;
            //convertim din Timestamp in Date
            this.finalDates = this.dates.map(
              (date) => new Date(date.seconds * 1000)
            );
            console.log(this.dates);
          } else {
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
    //calculeaza pretul final in functie de durata inchirierii
    payment() {
      //data selectata din datepicker este in timestamp deci convertim la date-time
      let date1 = new Date(this.appointment.deliveryTime);
      //convertim din date-time in date simplu
      let date11 = new Date(
        date1.getFullYear(),
        date1.getMonth(),
        date1.getDate()
      );
      //data selectata din datepicker este in timestamp deci convertim la date-time
      let date2 = new Date(this.appointment.pickupTime);
      //convertim din date-time in date simplu
      let date22 = new Date(
        date2.getFullYear(),
        date2.getMonth(),
        date2.getDate()
      );
      //diferenta dintre date
      let diffTime = Math.abs(date22 - date11);
      //convertim de secunde in zile
      let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      //calculam pretul final
      this.appointment.totalPrice = diffDays * this.carPrice;
    },
    //decide ce modalitate de plata a fost aleasa in functie de switch
    paymentMethodF() {
      if (this.cardPayment == false) {
        this.appointment.paymentMethod = "cash";
      } else {
        this.appointment.paymentMethod = "card";
      }
    },
    //introducem datele comenzii in firebase
    formSubmit() {
      //facem un vector de date din date de livrare si ridicare a masinilor pentru a fi introduse in baza de date
      var timeArray = getDates(
        new Date(this.appointment.deliveryTime),
        new Date(this.appointment.pickupTime)
      );
      // creeam un string-uri din timestamp care vor fi mai usor de citit de utilizatori
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
      const newId = getRandomId();
      //introducem comanda in baza de date pentru comenzi
      db.collection("appointments")
        .doc(`${newId}`)
        .set({
          CarId: this.carID,
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
          //concatenam vectorul de date selectate pentru aceasta programare cu vectorul cu toate datele programate
          (this.array = this.dates.concat(timeArray)),
          console.log(this.dates),
          //si updatam baza de date pentru date programate
          db.collection("disabledDates").doc(`${this.carID}`).set({
            Dates: this.array,
          })
        )
        .then(
          //golim formularul
          (this.appointment.carId = ""),
          (this.appointment.deliveryAddress = ""),
          (this.appointment.pickupAddress = ""),
          (this.appointment.deliveryTime = ""),
          (this.appointment.pickupTime = ""),
          (this.appointment.paymentMethod = "cash"),
          (this.appointment.totalPrice = ""),
          this.$refs.aForm.reset()
        );
    },
  },
  //ascultam daca userul este logat
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.isSignedIn = true;
        this.appointment.userId = user.uid;
        this.appointment.userName = user.displayName;
      } else {
        this.isSignedIn = false;
      }
    });
  },
};
</script>

<style scoped>
.carDetails {
  border: 1.2px solid #2d353f;
  min-width: 110px;
}
.close {
  color: #fff;
  opacity: 1;
}
::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
/* The slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffa900;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #ffa900;
}

input:focus + .slider {
  box-shadow: 0 0 1px #ffa900;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.carImg {
  max-height: 200px;
  min-height: 200px;
  object-fit: cover;
}
</style>
