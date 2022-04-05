<template>
  <div class="col-lg-4 text-light p-0 m-0">
    <h1 class="text-warning text-center py-2 bg-dmistic px-0 mx-0">
      Add An Appointment
    </h1>
    <form action="" class="px-4">
      <div class="form-group">
        <label class="lead">Car ID</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          id="exampleInputPassword1"
          placeholder="122435"
        />
      </div>
      <div class="form-group">
        <label class="lead">User ID</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          id="exampleInputPassword1"
          placeholder="122435"
        />
      </div>
      <div class="form-group">
        <label class="lead">Car Delivery Address(Only In Brasov)</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          id="deliveryA"
          placeholder="Street and Number"
        />
      </div>
      <div class="form-group">
        <label class="lead">Car Pick-Up Address(Only In Brasov)</label>
        <input
          type="text"
          class="form-control bg-dmistic text-light"
          id="deliveryP"
          placeholder="Street and Number"
        />
      </div>
      <div class="form-group">
        <label class="lead">Car Delivery Time</label>
        <input
          class="bg-dmistic text-light form-control"
          type="datetime-local"
          style="outline: none"
          id="datetimepicker1"
        />
      </div>
      <div class="form-group">
        <label class="lead">Car Pick-Up Time</label>
        <input
          class="bg-dmistic text-light form-control"
          type="datetime-local"
          style="outline: none"
          id="datetimepicker2"
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
          <tr>
            <td>111111</td>
            <td>11111</td>
            <td>11111</td>
            <td>Tarnavei 64A</td>
            <td>Tarnavei 64A</td>
            <td>04/05/2022 07:30 PM</td>
            <td>04/05/2022 07:30 PM</td>
            <td>card</td>
            <td>300</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111111</td>
            <td>11111</td>
            <td>11111</td>
            <td>Tarnavei 64A</td>
            <td>Tarnavei 64A</td>
            <td>04/05/2022 07:30 PM</td>
            <td>04/05/2022 07:30 PM</td>
            <td>card</td>
            <td>300</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111111</td>
            <td>11111</td>
            <td>11111</td>
            <td>Tarnavei 64A</td>
            <td>Tarnavei 64A</td>
            <td>04/05/2022 07:30 PM</td>
            <td>04/05/2022 07:30 PM</td>
            <td>card</td>
            <td>300</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111111</td>
            <td>11111</td>
            <td>11111</td>
            <td>Tarnavei 64A</td>
            <td>Tarnavei 64A</td>
            <td>04/05/2022 07:30 PM</td>
            <td>04/05/2022 07:30 PM</td>
            <td>card</td>
            <td>300</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111111</td>
            <td>11111</td>
            <td>11111</td>
            <td>Tarnavei 64A</td>
            <td>Tarnavei 64A</td>
            <td>04/05/2022 07:30 PM</td>
            <td>04/05/2022 07:30 PM</td>
            <td>card</td>
            <td>300</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111111</td>
            <td>11111</td>
            <td>11111</td>
            <td>Tarnavei 64A</td>
            <td>Tarnavei 64A</td>
            <td>04/05/2022 07:30 PM</td>
            <td>04/05/2022 07:30 PM</td>
            <td>card</td>
            <td>300</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111111</td>
            <td>11111</td>
            <td>11111</td>
            <td>Tarnavei 64A</td>
            <td>Tarnavei 64A</td>
            <td>04/05/2022 07:30 PM</td>
            <td>04/05/2022 07:30 PM</td>
            <td>card</td>
            <td>300</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111111</td>
            <td>11111</td>
            <td>11111</td>
            <td>Tarnavei 64A</td>
            <td>Tarnavei 64A</td>
            <td>04/05/2022 07:30 PM</td>
            <td>04/05/2022 07:30 PM</td>
            <td>card</td>
            <td>300</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111111</td>
            <td>11111</td>
            <td>11111</td>
            <td>Tarnavei 64A</td>
            <td>Tarnavei 64A</td>
            <td>04/05/2022 07:30 PM</td>
            <td>04/05/2022 07:30 PM</td>
            <td>card</td>
            <td>300</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111111</td>
            <td>11111</td>
            <td>11111</td>
            <td>Tarnavei 64A</td>
            <td>Tarnavei 64A</td>
            <td>04/05/2022 07:30 PM</td>
            <td>04/05/2022 07:30 PM</td>
            <td>card</td>
            <td>300</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111111</td>
            <td>11111</td>
            <td>11111</td>
            <td>Tarnavei 64A</td>
            <td>Tarnavei 64A</td>
            <td>04/05/2022 07:30 PM</td>
            <td>04/05/2022 07:30 PM</td>
            <td>card</td>
            <td>300</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111111</td>
            <td>11111</td>
            <td>11111</td>
            <td>Tarnavei 64A</td>
            <td>Tarnavei 64A</td>
            <td>04/05/2022 07:30 PM</td>
            <td>04/05/2022 07:30 PM</td>
            <td>card</td>
            <td>300</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111111</td>
            <td>11111</td>
            <td>11111</td>
            <td>Tarnavei 64A</td>
            <td>Tarnavei 64A</td>
            <td>04/05/2022 07:30 PM</td>
            <td>04/05/2022 07:30 PM</td>
            <td>card</td>
            <td>300</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111111</td>
            <td>11111</td>
            <td>11111</td>
            <td>Tarnavei 64A</td>
            <td>Tarnavei 64A</td>
            <td>04/05/2022 07:30 PM</td>
            <td>04/05/2022 07:30 PM</td>
            <td>card</td>
            <td>300</td>
            <td><button class="btn btn-danger">delete</button></td>
            <td><button class="btn btn-primary">edit</button></td>
          </tr>
          <tr>
            <td>111111</td>
            <td>11111</td>
            <td>11111</td>
            <td>Tarnavei 64A</td>
            <td>Tarnavei 64A</td>
            <td>04/05/2022 07:30 PM</td>
            <td>04/05/2022 07:30 PM</td>
            <td>card</td>
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
export default {};
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
