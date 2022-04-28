<template>
  <!-- wallpaper -->
  <section id="showcaseContact" class="py-5">
    <div class="primary-overlay text-white">
      <div class="home-inner container"></div>
    </div>
  </section>
  <!-- content -->
  <section>
    <div class="container-fluid">
      <div class="row d-flex justify-content-center align-items-start">
        <!-- map -->
        <div class="col-lg-4">
          <iframe
            class="w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.1957026114233!2d25.55887621485809!3d45.66697142791241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35bcc6b0875d1%3A0x6dee08a2295b8b40!2sStr.%20Lebedei%2027%2C%20Bra%C8%99ov%20500000!5e0!3m2!1sen!2sro!4v1648481853156!5m2!1sen!2sro"
            height="355"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="col-lg-4">
          <div class="container">
            <h1 class="text-warning py-2">Approach Us</h1>
            <div class="detaill text-light d-flex px-2 py-1">
              <i class="fa-solid fa-phone fa-lg align-self-start mt-3"></i>
              <p class="align-self-end ms-3 lead">+40747923662</p>
            </div>
            <div class="detaill text-light d-flex px-2 py-1">
              <i class="fa-solid fa-envelope fa-lg align-self-start mt-3"></i>
              <p class="align-self-end ms-3 lead">royalcarrental37@gmail.com</p>
            </div>
            <div class="detaill text-light d-flex px-2 py-1">
              <i
                class="fa-solid fa-location-dot fa-lg align-self-start mt-3"
              ></i>
              <p class="align-self-end ms-3 lead">
                Brasov, Strada Lebedei 27, RO
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 bg-lmistic h-100">
          <div class="container">
            <h1 class="text-warning">Connect With Us</h1>
            <form class="text-light" id="formm">
              <div class="form-group w-75 px-2">
                <label class="lead" for="name">Your Name</label>
                <input
                  type="text"
                  class="form-control bg-dark text-light"
                  name="name"
                  v-model="name"
                  placeholder="Adam Smith"
                />
              </div>
              <div class="form-group w-75 px-2">
                <label class="lead" for="mail">Email address</label>
                <input
                  type="email"
                  class="form-control bg-dark text-light"
                  name="email"
                  v-model="email"
                  id="mail"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form-group w-75 px-2">
                <label class="lead" for="text">Your Message</label>
                <textarea
                  class="form-control bg-dark text-light"
                  id="text"
                  name="message"
                  v-model="message"
                  rows="3"
                ></textarea>
              </div>
              <div class="d-grid gap-2 w-75 px-2 my-2">
                <button
                  class="btn btn-warning py-1"
                  @click="sendEmail"
                  type="button"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_16jnjal",
          "template_uxc12ml",
          document.querySelector("#formm"),
          "RDmaEC2UOmHWSv1tr",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.col-lg-4 {
  padding: 0px;
}
#showcaseContact {
  position: relative;
  background: url(../assets/contactUsWp.jpg);
  min-height: 60vh;
  background-size: cover;
  background-position: 50% 50%;
}
#showcaseContact .primary-overlay {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
@media (max-width: 992px) {
  #showcaseContact {
    position: relative;
    background: url(../assets/contactUsWp.jpg);
    min-height: 50vh;
    background-size: cover;
    background-position: 50% 0%;
  }
}
</style>
