<template>
  <h1 class="text-warning text-center py-1">Sign In</h1>
  <form action="" class="px-4 pb-4">
    <div class="form-group">
      <div class="form-group">
        <label class="lead">Email address</label>
        <input
          type="email"
          class="form-control bg-dmistic text-light"
          placeholder="Enter email"
        />
      </div>
      <div class="form-group">
        <label class="lead">Password</label>
        <input
          type="password"
          class="form-control bg-dmistic text-light"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-warning my-2 py-1">Sign In</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style scoped></style>
