<template>
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li>
            <a
              class="has-text-weight-bold is-size-4 has-text-danger"
              href="./assets/LuisRodriguezResume.pdf"
              download
              target="_blank"
              >View Resume</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    securedPage() {
      this.$router.push("private");
    },
    activeModal(boolean) {
      this.$store.commit("activeModal", boolean);
    },
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn;
    },
  },
};
</script>

<style lang="scss" scoped></style>
