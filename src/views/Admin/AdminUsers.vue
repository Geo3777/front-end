<template>
  <div class="col-lg-4 text-light p-0 m-0">
    <h1 class="text-warning text-center py-2 bg-dmistic px-0 mx-0">
      Add An User
    </h1>
    <form action="" class="px-4">
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
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label class="lead">Full Name</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="Full Name"
        />
      </div>
      <div class="form-group">
        <label class="lead">Phone Number</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          placeholder="+40747923662"
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>111</td>
            <td>marksmith11234@gmail.com</td>
            <td>Mark Smith</td>
            <td>+40747923662</td>
            <td><button class="btn btn-danger">delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
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
