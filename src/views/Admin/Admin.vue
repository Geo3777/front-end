<template>
  <!-- wallpaper -->
  <section id="showcaseAdmin" class="py-5">
    <div class="primary-overlay text-white">
      <div class="home-inner container"></div>
    </div>
  </section>
  <div class="container-fluid">
    <div
      class="row d-flex align-content-center justify-content-center bg-lmistic"
    >
      <div class="col d-flex justify-content-center">
        <router-link
          class="display-6 text-light"
          style="text-decoration: none"
          :to="{ name: 'users' }"
          >Users</router-link
        >
      </div>
      <div class="col d-flex justify-content-center">
        <router-link
          class="display-6 text-light"
          style="text-decoration: none"
          :to="{ name: 'users' }"
          >Cars</router-link
        >
      </div>
      <div class="col d-flex justify-content-center">
        <router-link
          class="display-6 text-light"
          style="text-decoration: none"
          :to="{ name: 'users' }"
          >Appointments</router-link
        >
      </div>
    </div>
  </div>
  <div
    class="row d-flex align-content-center justify-content-center bg-mistic inside"
  >
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
#showcaseAdmin {
  position: relative;
  background: url(../../assets/admin.jpg);
  min-height: 45vh;
  background-size: cover;
  background-position: 50% 0%;
}
#showcaseAdmin .primary-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.inside {
  width: 99.99%;
}
</style>
