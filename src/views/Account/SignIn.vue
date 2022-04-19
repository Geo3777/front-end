<template>
  <h1 class="text-warning text-center py-1">Sign In</h1>
  <form action="javascript:void(0)" @submit="signIn" class="px-4 pb-4">
    <div class="form-group">
      <div class="form-group">
        <label class="lead">Email address</label>
        <input
          type="email"
          class="form-control bg-dmistic text-light"
          placeholder="Enter email"
          v-model="user.email"
        />
      </div>
      <div class="form-group">
        <label class="lead">Password</label>
        <input
          type="password"
          class="form-control bg-dmistic text-light"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="user.password"
        />
      </div>
      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-warning my-2 py-1">Sign In</button>
      </div>
    </div>
  </form>
</template>

<script>
import db from "../../fb";
import auth from "../../auth";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signIn() {
      auth
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then((cred) => {
          console.log(cred);
          this.$router.push({ name: "home" });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage);
        });
    },
  },
};
</script>

<style scoped></style>
