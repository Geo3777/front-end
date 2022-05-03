<template>
  <!-- wallpaper -->
  <section id="showcaseOrders" class="py-5">
    <div class="primary-overlay text-white">
      <div class="home-inner container"></div>
    </div>
  </section>
  <section>
    <div class="container-fluid">
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
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-grid gap-2">
      <button
        class="btn btn-danger"
        v-if="allowDelete"
        @click="deleteAccount"
        type="button"
      >
        Delete Account
      </button>
    </div>
  </section>
</template>

<script>
import db from "../fb";
import auth from "../auth";
export default {
  data() {
    return {
      isSignedIn: false,
      appointments: [],
      userId: "",
      allowDelete: false,
    };
  },
  methods: {
    deleteAccount() {
      const user = auth.currentUser;
      const id = user.uid;
      //functie de la firebase care sterge contul utilizatorului actual
      user
        .delete()
        .then(() => {
          //stergem utilizatorul si din baza noastra de date
          db.collection("users").doc(`${id}`).delete();
        })
        .catch((error) => {
          var errorMessage = error.message;
          alert(errorMessage);
        });
    },
  },

  created() {
    //functie de la firebase care recunoaste constant user-ul
    auth.onAuthStateChanged((user) => {
      if (user) {
        //daca esti logat iti poti sterge contul
        this.allowDelete = true;
        //daca userul este admin nu are voie sa isi stearga contul
        if (user.email === "admin@admin.com") {
          this.allowDelete = false;
        } else {
          this.allowDelete = true;
        }
      } else {
        this.allowDelete = false;
      }
      if (user) {
        this.isSignedIn = true;
        this.userId = user.uid;
        //functie care afiseaza din baza de date programari comenzile utilizatorului actual si asculta dupa modificari
        db.collection("appointments")
          .where("UserId", "==", this.userId)
          .onSnapshot((snap) => {
            this.appointments = [];
            snap.forEach((doc) => {
              this.appointments.push(doc.data());
            });
          });
      } else {
        this.isSignedIn = false;
      }
    });
  },
};
</script>

<style scoped>
#showcaseOrders {
  position: relative;
  background: url(../assets/order.jpg);
  min-height: 45vh;
  background-size: cover;
  background-position: 50% 80%;
}
#showcaseOrders .primary-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
