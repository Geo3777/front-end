<template>
  <h1 class="text-warning text-center py-1">Register</h1>
  <form
    class="px-4 pb-4"
    id="register-form"
    action="javascript:void(0)"
    @submit="register"
  >
    <div class="form-group">
      <div class="form-group">
        <label class="lead">Email address</label>
        <input
          type="email"
          class="form-control bg-dmistic text-light"
          placeholder="Enter email"
          v-model="user.email"
          required
        />
      </div>
      <div class="form-group">
        <label class="lead">Password</label>
        <input
          type="password"
          class="form-control bg-dmistic text-light"
          placeholder="Password"
          v-model="user.password"
          required
        />
      </div>
      <div class="form-group">
        <label class="lead">Confirm Password</label>
        <input
          type="password"
          class="form-control bg-dmistic text-light"
          placeholder="Password"
          v-model="user.confirmPassword"
          required
        />
      </div>
      <div class="form-group">
        <label class="lead">Full Name</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="Full Name"
          v-model="user.fullName"
          required
        />
      </div>
      <div class="form-group">
        <label class="lead">Phone Number</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="+40782736511"
          v-model="user.phoneNumber"
          required
        />
      </div>
      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-warning my-2 py-1">
          Register
        </button>
      </div>
    </div>
  </form>
</template>

<script>
const registerForm = document.querySelector("#register-form");

import db from "../../fb";
import auth from "../../auth";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
        confirmPassword: "",
        fullName: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    //metoda de inregistrare a unui nou utilizator
    register() {
      //putem trece mai departe doar daca utlizitorul a confirmat corect parola
      if (this.user.password === this.user.confirmPassword) {
        //metoda de la firebase pentru inregistrare cu email si parola
        auth
          .createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then((cred) => {
            return cred.user
              .updateProfile({
                displayName: this.user.fullName,
              })
              .then(() => {
                //aevm si o baza de date creata pentru noi sa vedem utilizatorii si introducem datele si in ea
                db.collection("users").doc(`${cred.user.uid}`).set({
                  Email: this.user.email,
                  FullName: this.user.fullName,
                  id: cred.user.uid,
                  PhoneNumer: this.user.phoneNumber,
                });
              })
              .then(() => {
                console.log(cred);
                alert("registration succesful");
                //ne redirecteaza catre pagina de start logati in contul utilizatorului creat
                this.$router.push({ name: "home" });
              });
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
          });
      } else {
        alert("Passwords do not match!");
      }
    },
  },
};
</script>

<style scoped></style>
