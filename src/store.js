import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    signedIn: false,
    checkActiveModal: false,
    loginModal: true,
    activePage: 1,
    projects: [
      {
        frontTitle: "BonVayage",
        image: require("./assets/images/bonvayage.png"),
        frontContent:
          "Compare different travel destinations and find out which one best fits your budget. Search two different destinations and get an estimate on what your minimum total cost would be with flight and room.",
        liveURL: "https://bon-voyage-capstone.herokuapp.com/",
        gitURL:
          "https://github.com/Capstone-Bi-Coastal-Visualizers/data-visualization",
        languages: [
          "React",
          "Redux",
          "Node",
          "Express",
          "Bulma",
          "Heroku",
          "Chart JS",
          "Fuse JS",
        ],
      },
      {
        frontTitle: "Instaprove",
        image: require("./assets/images/instaprove.png"),
        frontContent:
          "Start your marketing efforts with learning what your competitors are doing. Enter your domain and instantly learn how to improve your marketing efforts with competitor data.",
        liveURL: "https://instaprove-react.herokuapp.com/",
        gitURL: "https://github.com/LFRod4/instaprove-react",
        languages: ["React", "Redux", "Node", "Puppeteer", "Heroku"],
      },
      {
        frontTitle: "CRM Serverless",
        image: require("./assets/images/crm.png"),
        frontContent:
          "Lead management tool with a full serverless backend setup. Vue JS frontend and full a variety of Amazon Web Services for backend. Test account set up with MongoDB set up already.",
        gitURL: "https://github.com/LFRod4/bradynce-crm",
        liveURL: "",
        languages: [
          "Vue",
          "Vue Router",
          "Vuex",
          "Node",
          "MongoDB",
          "Amazon S3",
          "AWS",
          "AWS Lambda",
          "AWS API Gateway",
          "Amazon Cognito",
          "Amazon Cloudfront",
          "Amazon Route 53",
        ],
      },
      {
        frontTitle: "Twitter Demo",
        image: require("./assets/images/twitter.jpg"),
        frontContent:
          "This project is meant to replicate the basic features of Twitter, such as tweets, followers feed, your own profile, and the functionality of it all.",
        liveURL: "https://vimeo.com/417472997",
        gitURL: "https://github.com/LFRod4/vue-django",
        languages: [
          "Vue",
          "Vue Router",
          "Vuex",
          "Python",
          "Django",
          "SQLite",
          "Bulma",
        ],
      },
      {
        frontTitle: "Personal Site",
        image: require("./assets/images/portfolio.png"),
        frontContent:
          "What's the point of creating a web portfolio if you don't go all out and sprinkle some AWS services, state management, and modern JS framework.",
        liveURL: "#top",
        gitURL: "https://github.com/LFRod4/aws-site",
        languages: [
          "Bulma",
          "Javascript",
          "Vue",
          "Vue Router",
          "Vuex",
          "Axios",
          "NPM",
          "API Gateway",
          "Amazon S3",
          "Amazon Cloudfront",
          "Amazon Route 53",
          "AWS Lambda",
          "AWS Amplify",
          "AWS CLI",
        ],
      },
      {
        frontTitle: "Angular Quiz",
        image: require("./assets/images/angular-quiz.png"),
        frontContent:
          "I woke up one day and realized I knew nothing about turtles. Decided to build a quiz that will help me learn some turtle facts. Angular JS seemed like the cool thing to do at the time.",
        liveURL: "https://vigorous-poincare-7385ea.netlify.com/",
        gitURL: "https://github.com/LFRod4/Angular-JS-Quiz",
        languages: ["Angular", "Jade", "Bulma", "Netifly"],
      },
      {
        frontTitle: "Skags Generator",
        image: require("./assets/images/skags.png"),
        frontContent:
          "In the PPC world everyone loves a good SKAG campaign but dread the building process. This cool toy helps speed things up and avoid using the craziness of Excel.",
        liveURL: "https://meetkite.com/skag/",
        gitURL: false,
        languages: [
          "Bootstrap",
          "Bulma",
          "Javascript",
          "Vue",
          "Vue Router",
          "Vuex",
          "Vue CLI",
          "Webpack",
          "NPM",
        ],
      },
      {
        frontTitle: "PPC Tool",
        image: require("./assets/images/ppctool.png"),
        frontContent:
          "Digital marketing is about using data to make the right business choices. I use an API to get cost of keyword bids to calculate potential KPIs in a PPC campaign.",
        liveURL: "https://tools.bradynce.com/",
        gitURL: "https://github.com/LFRod4/PPCTools",
        languages: [
          "Bulma",
          "Vue",
          "Vue Router",
          "Vuex",
          "Axios",
          "Django",
          "Django Rest Framework",
          "Amazon S3",
          "Amazon Cloudfront",
          "Amazon Route 53",
          "AWS Elastic Beanstalk",
          "AWS Amplify",
        ],
      },
    ],
  },
  getters: {
    signedIn: (state) => {
      return state.signedIn;
    },
    pageNumbers: (state) => {
      return Math.floor(state.projects.length / 3) + 1;
    },
  },
  mutations: {
    signIn: (state, user) => {
      state.signedIn = !!user;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    checkSignedIn: (state, boolean) => {
      state.signedIn = boolean;
    },
    checkUser: (state, status) => {
      state.user = status;
    },
    changeModal: (state, boolean) => {
      state.loginModal = boolean;
    },
    changePage: (state, page) => {
      state.activePage = page;
    },
    activeModal: (state, boolean) => {
      state.checkActiveModal = boolean;
    },
  },
  actions: {
    changePage: (context, page) => {
      context.commit("changePage", page);
    },
  },
});
