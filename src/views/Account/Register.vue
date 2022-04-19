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
          id="exampleInputPassword1"
          placeholder="Full Name"
          v-model="user.fullName"
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
      },
    };
  },
  methods: {
    register() {
      if (this.user.password === this.user.confirmPassword) {
        auth
          .createUserWithEmailAndPassword(this.user.email, this.user.password)
          .then((cred) => {
            return cred.user
              .updateProfile({
                displayName: this.user.fullName,
              })
              .then(() => {
                console.log(cred);
                alert("registration succesful");
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
