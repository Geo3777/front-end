<template>
  <!-- wallpaper -->
  <section id="showcaseC" class="py-5">
    <div class="primary-overlay text-white">
      <div class="home-inner container"></div>
    </div>
  </section>
  <!-- main -->
  <div class="container text-light">
    <div class="row mt-5">
      <!-- filters -->
      <div class="col-lg-3 col-md-3 mb-5">
        <div class="sticky-top">
          <h2 class="fw-bold">Advanced Search</h2>
          <div class="line my-3"></div>
          <div
            class="accordion accordion-flush bg-dark"
            id="accordionFlushExample"
          >
            <!-- Price Range -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Price Range
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body bg-mistic">
                  <p>€/Day</p>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-warning"
                        id="inputGroup-sizing-default"
                        >Min</span
                      >
                    </div>
                    <input
                      type="text"
                      class="form-control bg-dmistic text-light"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-warning"
                        id="inputGroup-sizing-default"
                        >Max</span
                      >
                    </div>
                    <input
                      type="text"
                      class="form-control bg-dmistic text-light"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- Vehicle Type -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Vehicle Type
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body bg-mistic">
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="sedan"
                      checked
                    />
                    <label class="form-check-label" for="sedan">Sedan</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="break"
                      checked
                    />
                    <label class="form-check-label" for="break"
                      >Hatchback</label
                    >
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="suv"
                      checked
                    />
                    <label class="form-check-label" for="suv">SUV</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="sport"
                      checked
                    />
                    <label class="form-check-label" for="sport">Sport</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="van"
                      checked
                    />
                    <label class="form-check-label" for="van">Van</label>
                  </div>
                </div>
              </div>
            </div>
            <!-- Fuel Type -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Fuel Type
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body bg-mistic">
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="petrol"
                      checked
                    />
                    <label class="form-check-label" for="petrol">Petrol</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="diesel"
                      checked
                    />
                    <label class="form-check-label" for="diesel">Diesel</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="electric"
                      checked
                    />
                    <label class="form-check-label" for="electric"
                      >Electric</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- Transmision -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Transmission
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body bg-mistic">
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="manual"
                      checked
                    />
                    <label class="form-check-label" for="manual">Manual</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="automatic"
                      checked
                    />
                    <label class="form-check-label" for="automatic"
                      >Automatic</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- Engine Capacity -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSix">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  Engine Capacity
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body bg-mistic">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-warning"
                        id="inputGroup-sizing-default"
                        >Min</span
                      >
                    </div>
                    <input
                      type="text"
                      class="form-control bg-dmistic text-light"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-warning"
                        id="inputGroup-sizing-default"
                        >Max</span
                      >
                    </div>
                    <input
                      type="text"
                      class="form-control bg-dmistic text-light"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- Year -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSeven">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSeven"
                  aria-expanded="false"
                  aria-controls="flush-collapseSeven"
                >
                  Year
                </button>
              </h2>
              <div
                id="flush-collapseSeven"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingSeven"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body bg-mistic">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-warning"
                        id="inputGroup-sizing-default"
                        >Min</span
                      >
                    </div>
                    <input
                      type="text"
                      class="form-control bg-dmistic text-light"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-warning"
                        id="inputGroup-sizing-default"
                        >Max</span
                      >
                    </div>
                    <input
                      type="text"
                      class="form-control bg-dmistic text-light"
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- Traction -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingEight">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseEight"
                  aria-expanded="false"
                  aria-controls="flush-collapseEight"
                >
                  Traction
                </button>
              </h2>
              <div
                id="flush-collapseEight"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingEight"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body bg-mistic">
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="FWD"
                      checked
                    />
                    <label class="form-check-label" for="FWD">FWD</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="RWD"
                      checked
                    />
                    <label class="form-check-label" for="RWD">RWD</label>
                  </div>
                  <div class="form-check checkbox-warning-filled">
                    <input
                      type="checkbox"
                      class="form-check-input filled-in"
                      id="AWD"
                      checked
                    />
                    <label class="form-check-label" for="AWD">AWD</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Reset Filters -->
          <div class="d-grid col-12 mx-auto">
            <button class="btn btn-lg btn-mistic text-warning" type="button">
              Reset Filters
            </button>
          </div>
        </div>
      </div>
      <!-- Sort and Cars -->
      <!-- Sort by -->
      <div class="col-lg-9 col-md-9">
        <div class="row">
          <div class="col">
            <div class="dropdown">
              <button
                class="btn btn-mistic btn-lg dropdown-toggle w-100"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By
              </button>
              <ul
                class="dropdown-menu dropdown-menu-dark w-100"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a class="dropdown-item" href="#">Price Ascending</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Price Descending</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Cars Cards -->
        <div class="row align-items-center justify-content-center">
          <section>
            <div class="container pt-2">
              <div class="row align-items-center justify-content-center">
                <div class="card-group">
                  <!-- car -->
                  <div class="col-lg-6 col-md-12 col-sm-12 p-3">
                    <div
                      class="card w-100 h-100 bg-mistic"
                      style="width: 18rem"
                    >
                      <img
                        src="../assets/AudiA6.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title display-6 text-center fw-bold">
                          Audi A6
                        </h5>
                        <h5 class="card-title text-center display-7 fw-bold">
                          €145,50
                        </h5>
                        <div class="card-text p-2">
                          <div class="row bg-lmistic">
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Sedan</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Diesel</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Automatic</p>
                            </div>
                          </div>
                          <div class="row bg-lmistic">
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">2000cc</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">2017</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">FWD</p>
                            </div>
                          </div>
                        </div>
                        <div class="d-grid w-100">
                          <button
                            class="btn btn-warning btn-lg btn-fullW mt-2"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Rent It!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /car -->
                  <!-- car -->
                  <div class="col-lg-6 col-md-12 col-sm-12 p-3">
                    <div
                      class="card w-100 h-100 bg-mistic"
                      style="width: 18rem"
                    >
                      <img
                        src="../assets/AudiA6.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title display-6 text-center fw-bold">
                          Audi A6
                        </h5>
                        <h5 class="card-title text-center display-7 fw-bold">
                          €145,50
                        </h5>
                        <div class="card-text p-2">
                          <div class="row bg-lmistic">
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Sedan</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Diesel</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Automatic</p>
                            </div>
                          </div>
                          <div class="row bg-lmistic">
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">2000cc</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">2017</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">FWD</p>
                            </div>
                          </div>
                        </div>
                        <div class="d-grid w-100">
                          <button
                            class="btn btn-warning btn-lg btn-fullW mt-2"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Rent It!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /car -->
                  <!-- car -->
                  <div class="col-lg-6 col-md-12 col-sm-12 p-3">
                    <div
                      class="card w-100 h-100 bg-mistic"
                      style="width: 18rem"
                    >
                      <img
                        src="../assets/AudiA6.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title display-6 text-center fw-bold">
                          Audi A6
                        </h5>
                        <h5 class="card-title text-center display-7 fw-bold">
                          €145,50
                        </h5>
                        <div class="card-text p-2">
                          <div class="row bg-lmistic">
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Sedan</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Diesel</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Automatic</p>
                            </div>
                          </div>
                          <div class="row bg-lmistic">
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">2000cc</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">2017</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">FWD</p>
                            </div>
                          </div>
                        </div>
                        <div class="d-grid w-100">
                          <button
                            class="btn btn-warning btn-lg btn-fullW mt-2"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Rent It!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /car -->
                  <!-- car -->
                  <div class="col-lg-6 col-md-12 col-sm-12 p-3">
                    <div
                      class="card w-100 h-100 bg-mistic"
                      style="width: 18rem"
                    >
                      <img
                        src="../assets/AudiA6.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title display-6 text-center fw-bold">
                          Audi A6
                        </h5>
                        <h5 class="card-title text-center display-7 fw-bold">
                          €145,50
                        </h5>
                        <div class="card-text p-2">
                          <div class="row bg-lmistic">
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Sedan</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Diesel</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Automatic</p>
                            </div>
                          </div>
                          <div class="row bg-lmistic">
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">2000cc</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">2017</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">FWD</p>
                            </div>
                          </div>
                        </div>
                        <div class="d-grid w-100">
                          <button
                            class="btn btn-warning btn-lg btn-fullW mt-2"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Rent It!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /car -->
                  <!-- car -->
                  <div class="col-lg-6 col-md-12 col-sm-12 p-3">
                    <div
                      class="card w-100 h-100 bg-mistic"
                      style="width: 18rem"
                    >
                      <img
                        src="../assets/AudiA6.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title display-6 text-center fw-bold">
                          Audi A6
                        </h5>
                        <h5 class="card-title text-center display-7 fw-bold">
                          €145,50
                        </h5>
                        <div class="card-text p-2">
                          <div class="row bg-lmistic">
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Sedan</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Diesel</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Automatic</p>
                            </div>
                          </div>
                          <div class="row bg-lmistic">
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">2000cc</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">2017</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">FWD</p>
                            </div>
                          </div>
                        </div>
                        <div class="d-grid w-100">
                          <button
                            class="btn btn-warning btn-lg btn-fullW mt-2"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Rent It!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /car -->
                  <!-- car -->
                  <div class="col-lg-6 col-md-12 col-sm-12 p-3">
                    <div
                      class="card w-100 h-100 bg-mistic"
                      style="width: 18rem"
                    >
                      <img
                        src="../assets/AudiA6.jpg"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body">
                        <h5 class="card-title display-6 text-center fw-bold">
                          Audi A61
                        </h5>
                        <h5 class="card-title text-center display-7 fw-bold">
                          €145,50
                        </h5>
                        <div class="card-text p-2">
                          <div class="row bg-lmistic">
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Sedan</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Diesel</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">Automatic</p>
                            </div>
                          </div>
                          <div class="row bg-lmistic">
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">2000cc</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">2017</p>
                            </div>
                            <div
                              class="col carDetails d-flex align-items-center justify-content-center"
                            >
                              <p class="lead m-0 p-2">FWD</p>
                            </div>
                          </div>
                        </div>
                        <div class="d-grid w-100">
                          <button
                            class="btn btn-warning btn-lg btn-fullW mt-2"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Rent It!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /car -->
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
  <!-- modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    role="dialog"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-mistic text-light">
        <div class="modal-header">
          <h3 class="modal-title" id="exampleModalLabel">Audi A6 2019</h3>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form action="">
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
                <input
                  class="bg-dmistic text-light w-100 form-control p-2"
                  type="datetime-local"
                  style="outline: none"
                  id="datetimepicker1"
                />
              </div>
              <div class="form-group py-2">
                <label for="datetimepicker2" class="lead"
                  >Car Pick-Up Time</label
                >
                <input
                  class="bg-dmistic text-light w-100 form-control p-2"
                  type="datetime-local"
                  style="outline: none"
                  id="datetimepicker2"
                />
              </div>
            </section>
            <hr />
            <!-- payment -->
            <section>
              <h4>Payment</h4>
              <p class="lead">Total Payment: €300</p>
              <!-- switch -->
              <div class="switching py-2 d-flex">
                <p class="lead me-2">cash</p>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
                <p class="lead ms-2">card</p>
              </div>
              <!-- Card -->
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
          <button type="button" class="btn btn-warning">Finish</button>
        </div>
      </div>
    </div>
  </div>
  <!-- /modal -->
</template>

<script>
export default {};
</script>

<style scoped>
#showcaseC {
  position: relative;
  background: url(../assets/carsHome.jpg);
  min-height: 60vh;
  background-size: cover;
  background-position: 50% 30%;
}
#showcaseC .primary-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.line {
  width: 260px;
  border-bottom: 5px solid rgb(238, 170, 23);
}
.accordion-button:not(.collapsed) {
  color: inherit;
  background: #2d353f;
}
.accordion-button:not(:not(.collapsed)) {
  color: inherit;
  background: #2d353f;
}
.accordion-button:not(.collapsed)::after {
  filter: brightness(0%) invert(70%);
}
.accordion-button:not(:not(.collapsed))::after {
  filter: brightness(0%) invert(70%);
}
.sticky-top {
  top: 90px;
}
.checkbox-warning-filled [type="checkbox"][class*="filled-in"]:checked {
  border-color: #ff8800;
  background-color: #ff8800;
}
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
</style>
