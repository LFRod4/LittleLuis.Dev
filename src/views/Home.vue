<template>
  <div class="page">
    <section id="top" class="hero is-fullheight">
      <Nav></Nav>
      <div class="modal" :class="{ 'is-active': checkActiveModal }">
        <div class="modal-background"></div>
        <div class="modal-content">
          <Authenticator v-if="loginModal"></Authenticator>
          <SignUp v-if="!loginModal"></SignUp>
        </div>
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="
            activeModal(false);
            changeModal(true);
          "
        ></button>
      </div>
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered has-text-white is-size-2">
            🧙🏼‍♂️ Wizard Engineer & Coffee Expert ☕️
          </h1>
          <button class="button tour-btn is-primary" @click="langModal = true">
            See Code Meant For You
          </button>
          <div class="modal" :class="{ 'is-active': langModal }">
            <div class="modal-background"></div>
            <div class="modal-content">
              <div class="box">
                <div class="title">Find project with which language?</div>
                <div class="buttons-container">
                  <button
                    class="button lang-btn"
                    v-scroll-to="`#projects`"
                    @click="langChoice('React')"
                  >
                    React
                  </button>
                  <br />
                  <button
                    class="button lang-btn"
                    v-scroll-to="`#projects`"
                    @click="langChoice('Vue')"
                  >
                    Vue
                  </button>
                  <br />
                  <button
                    class="button lang-btn"
                    v-scroll-to="`#projects`"
                    @click="langChoice('Angular')"
                  >
                    Angular
                  </button>
                  <br />
                  <button
                    class="button lang-btn"
                    v-scroll-to="`#projects`"
                    @click="langChoice('Django')"
                  >
                    Django
                  </button>
                  <br />
                  <button
                    class="button lang-btn"
                    v-scroll-to="`#projects`"
                    @click="langChoice('Node')"
                  >
                    Node
                  </button>
                  <br />
                  <button
                    class="button lang-btn"
                    v-scroll-to="`#projects`"
                    @click="langChoice('AWS')"
                  >
                    AWS Serverless App
                  </button>
                </div>
              </div>
            </div>
            <button
              class="modal-close is-large"
              @click="langModal = false"
              aria-label="close"
            ></button>
          </div>
          <EmailForm v-if="false"></EmailForm>
        </div>
      </div>
    </section>
    <div class="columns">
      <div class="column left-bar"></div>
      <div class="column main-content">
        <section id="projects" class="section">
          <div class="container">
            <h1 class="title">Projects</h1>
            <div v-if="lang" class="content">
              <p className="is-justify-content-left sub-title">
                <span class=" is-size-5 has-text-weight-bold"
                  >Recomended Projects To View:
                </span>
                <span v-for="(project, index) in highlightProjects" :key="index"
                  >{{ project
                  }}<span
                    v-if="index !== 0 || index !== highlightProjects.length - 1"
                    >,
                  </span>
                </span>
              </p>
            </div>
            <div class="tile is-ancestor">
              <div class="tile is-parent">
                <Cards
                  v-if="showProjects[0]"
                  class="cards-component"
                  :class="{
                    'card-highlight': this.highlightProjects.includes(
                      showProjects[0]['frontTitle']
                    ),
                  }"
                  :project="showProjects[0]"
                ></Cards>
              </div>
              <div class="tile is-parent">
                <Cards
                  v-if="showProjects[1]"
                  class="cards-component"
                  :class="{
                    'card-highlight': this.highlightProjects.includes(
                      showProjects[1]['frontTitle']
                    ),
                  }"
                  :project="showProjects[1]"
                ></Cards>
              </div>
              <div class="tile is-parent">
                <Cards
                  v-if="showProjects[2]"
                  class="cards-component"
                  :class="{
                    'card-highlight': this.highlightProjects.includes(
                      showProjects[2]['frontTitle']
                    ),
                  }"
                  :project="showProjects[2]"
                ></Cards>
              </div>
            </div>
            <Pagination></Pagination>
          </div>
          <br />
          <p class="">
            Check out my
            <span class="has-text-weight-bold has-text-primary"
              >web-scrpaing</span
            >
            project:
            <span
              ><a
                target="_blank"
                href="https://github.com/LFRod4/instaprove-react"
                >Instaprove</a
              ></span
            >
          </p>
        </section>
        <section id="aboutMe" class="section">
          <div class="container">
            <h1 class="title">About Me</h1>
          </div>
          <div class="about-content">
            <div class="columns">
              <div class="column is-three-fifths code-img-container">
                <img class="code-image" src="../assets/images/code.png" />
              </div>
              <div class="column dev-img-container">
                <img class="dev-image" src="../assets/images/dev-pic.png" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="column right-bar is-hidden-touch">
        <div class="email has-text-primary">Rodriguezlf4@gmail.com</div>
        <br />
        <div class="line"></div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// import { AmplifyEventBus } from "aws-amplify-vue";
import { Auth } from "aws-amplify";
import axios from "axios";
import { mapState } from "vuex";
// @ is an alias to /src
import Authenticator from "@/components/Authenticator.vue";
import Nav from "@/components/Nav.vue";
import SignUp from "@/components/SignUp.vue";
import Cards from "@/components/Cards.vue";
import Footer from "@/components/Footer.vue";
import Pagination from "@/components/Pagination.vue";
import EmailForm from "@/components/EmailForm.vue";

export default {
  name: "home",
  components: {
    Authenticator,
    SignUp,
    Cards,
    Pagination,
    Nav,
    Footer,
    EmailForm,
  },
  data: function() {
    return {
      info: "",
      frontCard: true,
      isShowing: false,
      clearClass: "clear",
      blurClass: "blur",
      lang: "",
      activeTitle: "",
      langModal: false,
      highlightProjects: [],
    };
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    },
    changeModal(boolean) {
      this.$store.commit("changeModal", boolean);
    },
    activeModal(boolean) {
      this.$store.commit("activeModal", boolean);
    },
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        this.$store.commit("checkSignedIn", true);
        this.$store.commit("checkUser", user);
      } catch (err) {
        this.$store.commit("checkSignedIn", false);
        this.$store.commit("checkUser", null);
      }
    },
    langChoice(lang) {
      this.lang = lang;
      this.langModal = false;

      this.projects.forEach((project) => {
        let currStack = project.languages;

        if (currStack.includes(lang)) {
          this.highlightProjects.push(project.frontTitle);
        }
      });
    },
  },
  computed: {
    showProjects() {
      const startIndex = 3 * (this.activePage - 1);
      const endIndex = startIndex + 3;
      return this.projects.slice(startIndex, endIndex);
    },
    ...mapState([
      "projects",
      "signedIn",
      "checkActiveModal",
      "loginModal",
      "activePage",
    ]),
  },
  mounted() {
    if (this.$store.state.user) {
      const jwt = this.$store.state.user
        .getSignInUserSession()
        .getIdToken()
        .getJwtToken();
      const config = {
        headers: {
          authorization: jwt,
        },
      };
      axios
        .get(
          "https://zv30nmh3e2.execute-api.us-west-2.amazonaws.com/v1",
          config
        )
        .then((val) => (this.info = val))
        .catch((err) => console.log(err));
    }
  },
};
</script>

<style>
nav {
  margin-top: 20px;
}
.tour-btn {
  border-radius: 5px;
  font-weight: bold;
  font-size: 1.2em !important;
}
.clear {
  transition: opacity 1s;
}
.blur {
  filter: blur(1px);
  opacity: 0.5;
}
.modal-content-opac {
  opacity: 0.3;
}
#top {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.4)
    ),
    url("../assets/images/home-top.jpg");
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0)
  );
  background-size: cover;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -2;
}

#aboutMe {
  padding-bottom: 0 !important;
}

.git-icon {
  margin-left: 0.5em;
}

.top-nav {
  background-color: transparent !important;
  text-decoration: inherit !important;
  border: none !important;
  cursor: pointer !important;
}

.navbar-item:hover,
.navbar-item:focus {
  background-color: none !important;
  color: white !important;
  text-decoration: inherit !important;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0 25px;
  background-color: transparent;
  height: 5px;
}

.email {
  writing-mode: vertical-lr;
  margin: 0 auto;
  position: sticky;
  bottom: 0;
}

.line {
  width: 1px;
  height: 20vh;
  background-color: hsl(171, 100%, 41%);
  margin-left: 12px;
}

.left-bar {
  width: 3vw;
  position: fixed;
  left: 0;
}

.right-bar {
  width: 3vw;
  position: fixed;
  top: 60vh;
  right: 15px;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-right: 0 auto;
}

.main-content {
  margin-right: 5vw;
  margin-left: 5vw;
  padding: 0px 10px;
}

.hero-body {
  padding-top: 0 !important;
}

.code-image {
  width: 100%;
}
.code-img-container {
  padding-right: 0 !important;
}

.dev-img-container {
  padding-left: 0 !important;
}

.about-content {
  padding-top: 3em;
}

.not-loggedin {
  opacity: 0.3;
  cursor: not-allowed;
}

.not-loggedin:hover {
  text-decoration: none;
  cursor: default;
}

.lang-btn {
  width: 200px;
  font-weight: 600;
  background-color: hsl(171, 100%, 41%) !important;
  border-color: hsl(171, 100%, 41%) !important;
  color: white !important;
  margin-top: 5px !important;
}

.card-highlight {
  border-color: hsl(171, 100%, 41%);
  box-shadow: 0 4px 4px 3px hsl(171, 100%, 41%);
}
</style>
