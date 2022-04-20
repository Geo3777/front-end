<template>
  <div class="col-lg-4 text-light p-0 m-0">
    <h1 class="text-warning text-center py-2 bg-dmistic px-0 mx-0">
      Add An User
    </h1>
    <form
      action="javascript:void(0)"
      class="px-4"
      ref="carForm"
      @submit="register"
    >
      <div class="form-group">
        <label class="lead">Email address</label>
        <input
          type="email"
          class="form-control bg-dmistic text-light"
          placeholder="Enter email"
          required
          v-model="user.email"
        />
      </div>
      <div class="form-group">
        <label class="lead">Password</label>
        <input
          type="password"
          class="form-control bg-dmistic text-light"
          placeholder="Password"
          required
          v-model="user.password"
        />
      </div>
      <div class="form-group">
        <label class="lead">Confirm Password</label>
        <input
          type="password"
          class="form-control bg-dmistic text-light"
          placeholder="Password"
          required
          v-model="user.confirmPassword"
        />
      </div>
      <div class="form-group">
        <label class="lead">Full Name</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="Full Name"
          required
          v-model="user.fullName"
        />
      </div>
      <div class="form-group">
        <label class="lead">Phone Number</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="+40747923662"
          required
          v-model="user.phoneNumber"
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
            <th scope="col" class="">email</th>
            <th scope="col" class="">Full Name</th>
            <th scope="col" class="">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" v-bind:key="index">
            <td>{{ user.id }}</td>
            <td>{{ user.Email }}</td>
            <td>{{ user.FullName }}</td>
            <td>{{ user.PhoneNumer }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import db from "../../fb";
import auth from "../../auth";
import "firebase/firebase-auth";
export default {
  data() {
    return {
      users: [],
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
  created() {
    db.collection("users").onSnapshot((snap) => {
      this.users = [];
      snap.forEach((doc) => {
        this.users.push(doc.data());
      });
    });
  },
};
</script>

<style scoped>
.table-responsive {
  max-height: 390px;
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
