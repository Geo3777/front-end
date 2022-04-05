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
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div class="form-group">
        <label class="lead">Full Name</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          id="exampleInputPassword1"
          placeholder="Full Name"
        />
      </div>
      <div class="form-group">
        <label class="lead">Address</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          id="exampleInputPassword1"
          placeholder="Street, Number, City, Country"
        />
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" />
        <label class="form-check-label"> Admin </label>
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
            <th scope="col" class="">Password</th>
            <th scope="col" class="">Full Name</th>
            <th scope="col" class="">Address</th>
            <th scope="col" class="">Admin</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>111</td>
            <td>marksmith11234@gmail.com</td>
            <td>asdf123456789</td>
            <td>Mark Smith</td>
            <td>Tarnavei, 64A, Medias, Romania</td>
            <td>True</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111</td>
            <td>marksmith11234@gmail.com</td>
            <td>asdf123456789</td>
            <td>Mark Smith</td>
            <td>Tarnavei, 64A, Medias, Romania</td>
            <td>True</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111</td>
            <td>marksmith11234@gmail.com</td>
            <td>asdf123456789</td>
            <td>Mark Smith</td>
            <td>Tarnavei, 64A, Medias, Romania</td>
            <td>True</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111</td>
            <td>marksmith11234@gmail.com</td>
            <td>asdf123456789</td>
            <td>Mark Smith</td>
            <td>Tarnavei, 64A, Medias, Romania</td>
            <td>True</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111</td>
            <td>marksmith11234@gmail.com</td>
            <td>asdf123456789</td>
            <td>Mark Smith</td>
            <td>Tarnavei, 64A, Medias, Romania</td>
            <td>True</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111</td>
            <td>marksmith11234@gmail.com</td>
            <td>asdf123456789</td>
            <td>Mark Smith</td>
            <td>Tarnavei, 64A, Medias, Romania</td>
            <td>True</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111</td>
            <td>marksmith11234@gmail.com</td>
            <td>asdf123456789</td>
            <td>Mark Smith</td>
            <td>Tarnavei, 64A, Medias, Romania</td>
            <td>True</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111</td>
            <td>marksmith11234@gmail.com</td>
            <td>asdf123456789</td>
            <td>Mark Smith</td>
            <td>Tarnavei, 64A, Medias, Romania</td>
            <td>True</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111</td>
            <td>marksmith11234@gmail.com</td>
            <td>asdf123456789</td>
            <td>Mark Smith</td>
            <td>Tarnavei, 64A, Medias, Romania</td>
            <td>True</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111</td>
            <td>marksmith11234@gmail.com</td>
            <td>asdf123456789</td>
            <td>Mark Smith</td>
            <td>Tarnavei, 64A, Medias, Romania</td>
            <td>True</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
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
