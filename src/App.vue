<template>
  <div class="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    appNavbar: Navbar,
    appFooter: Footer,
  },
};
</script>

<style>
body {
  background-color: #1a1f27;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #ffa900;
}
</style>
