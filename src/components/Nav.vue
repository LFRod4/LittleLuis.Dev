<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <h3 class="subtitle has-text-white is-size-3">Luis Rodriguez</h3>
          </a>
          <span
            class="navbar-burger burger has-text-white"
            data-target="navbarMenuHeroA"
            v-on:click="showNav = !showNav"
            :class="{ 'is-active': showNav }"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          id="navbarMenuHeroA"
          class="navbar-menu"
          v-bind:class="{ 'is-active': showNav }"
        >
          <div class="navbar-end">
            <a
              class="navbar-item is-size-4 has-text-white top-nav"
              v-scroll-to="`#projects`"
              >Projects</a
            >
            <router-link
              class="navbar-item is-size-4 has-text-white top-nav"
              to="/blog"
              >Blog</router-link
            >
            <a
              class="navbar-item is-size-2 has-text-white top-nav"
              target="_blank"
              href="https://www.linkedin.com/in/luisfrodriguez4/"
            >
              <i class="fab fa-linkedin"></i
            ></a>
            <a
              class="navbar-item is-size-2 has-text-white top-nav"
              target="_blank"
              href="https://github.com/LFRod4"
            >
              <i class="fab fa-github-square"></i
            ></a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  name: "Nav",
  data: function() {
    return {
      info: "",
      showNav: false,
      frontCard: true,
    };
  },
  methods: {
    securedPage() {
      this.$router.push("private");
    },
    activeModal(boolean) {
      this.$store.commit("activeModal", boolean);
    },
    signOut() {
      Auth.signOut()
        .then((data) => {
          this.$store.state.signedIn = !!data;
        })
        .catch((err) => console.log(err));
    },
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn;
    },
  },
};
</script>

<style>
.navbar-end a {
  color: hsl(171, 100%, 41%) !important;
}
</style>
