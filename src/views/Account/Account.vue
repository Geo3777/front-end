<template>
  <!-- wallpaper -->
  <section id="showcaseAccount" class="py-5">
    <div class="primary-overlay text-white">
      <div
        class="home-inner container h-100 d-flex justify-content-center align-items-center"
      >
        <div class="holder bg-lmistic shadow-lg mt-5">
          <div class="d-flex px-2">
            <router-link
              class="lead text-light"
              style="text-decoration: none"
              :to="{ name: 'signIn' }"
              >Sign In
            </router-link>
            <div class="bar"></div>
            <router-link
              class="lead text-light"
              style="text-decoration: none"
              :to="{ name: 'register' }"
              >Register
            </router-link>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#showcaseAccount {
  position: relative;
  background: url(../../assets/Account1.jpg);
  min-height: 100vh;
  background-size: cover;
  background-position: 50% 50%;
}
#showcaseAccount .primary-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.holder {
  min-height: 300px;
  min-width: 400px;
}
.bar {
  height: 23px;
  width: 1px;
  background-color: white;
  margin-left: 7px;
  margin-right: 7px;
  margin-top: 3px;
}
</style>
