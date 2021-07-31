<template>
  <div>
    <div class="hero-head">
      <nav class="navbar nav-bar-container">
        <div class="container">
          <div class="navbar-brand">
            <h3 class="name">
              <router-link to="/">Luis Rodriguez</router-link>
            </h3>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <span class="navbar-item">
                <a
                  class="button is-primary"
                  href="https://github.com/LFRod4"
                  target="_blank"
                >
                  <span class="icon has-text-black">
                    <i class="fab fa-github"></i>
                  </span>
                  <span class="has-text-black">Github</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div class="header-nav">
        <nav class="breadcrumb level-item middle-nav" aria-label="breadcrumbs">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <a href="https://github.com/LFRod4/bradynce-crm">Code</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <section class="header-content">
      <div class="columns">
        <div class="card-content">
          <div class="column is-8 is-offset-2 content article-body summary">
            <h2 class="blog-title has-text-black-ter">
              Building a CRM with a Vue frontend and a serverless backend
            </h2>
            <p>
              Sometimes developers build something for the sake of learning a
              new language and other times we start with a solution to a
              problem. Coming from a marketing background I know what trouble it
              can be to pay to increase your volume of leads but then have
              trouble measuring its performance.
            </p>
            <p>
              The idea here is to build a platform a business can use to store
              their leads and check off these tasks:
            </p>
            <ul>
              <li>Manage leads</li>
              <li>Keep thread of notes</li>
              <li>Track ROI by channel</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div class="image is-5by3">
      <img src="../assets/images/home-top.jpg" />
    </div>
    <div class="container">
      <div class="columns">
        <!-- START ARTICLE FEED -->
        <div class="column is-8 is-offset-2 middle-column">
          <section class="articles">
            <div class="artical-contianer">
              <!-- START ARTICLE -->
              <div class="article">
                <div class="card-content">
                  <div class="media">
                    <div class="media-content has-text-centered">
                      <p class="title article-title">Serverless CRM</p>
                      <div class="tags has-addons level-item">
                        <span class="tag is-rounded is-primary"
                          >LittleLuis</span
                        >
                        <span class="tag is-rounded">May 10, 2020</span>
                      </div>
                    </div>
                  </div>
                  <div class="content article-body">
                    <!-- Heading 2 Tech Stack -->
                    <h2 class="title">Tech Stack</h2>
                    <p>
                      I'm using everything
                      <span class="tag">Vue</span> has to offer to manage the
                      frontend of this project, which includes
                      <span class="tag">Vuex</span> and
                      <span class="tag">Vue Router</span>. Before I started this
                      project I knew I wanted to build an API using
                      <span class="tag">AWS Lambda</span>
                      and
                      <span class="tag">AWS API Gateway</span>
                      along with
                      <span class="tag">MongoDB Atlas</span>
                      for a database. The great thing about AWS is how seamless
                      it is to get things started directly form the command
                      line. Lastly I used
                      <span class="tag">Amazon Cognito</span>
                      for user pools.
                    </p>
                    <!-- Heading 3 Getting Started -->
                    <h2 class="title">Getting Started</h2>
                    <p>
                      The first thing I attacked was building a pre-login layout
                      and look into Amazon Cognito to manage user registrations
                      and authentication. Cognito makes this pretty straight
                      forward so now getting into the web app itself I go over
                      what data I will be using and if it should be handled with
                      Vuex(State Management) or within the component. From here
                      I took a template design for the interface and created the
                      proper views and think of the main components that will be
                      needed.
                    </p>
                    <!-- Heading Dynamic Layout -->
                    <h2 class="title">Dynamic Layout</h2>
                    <p>
                      A problem I came across was realizing that the design of
                      the interface would have two consistent layouts and will
                      be rendering the header and sideNav components over and
                      over again with every view/page. You can see how this
                      could be an even bigger problem on a larger application
                      with performance. As a result I decided to create a
                      <span class="tag">Pre-Dashboard</span>
                      layout and then a
                      <span class="tag">Dashboard-Layout</span>
                      where now I can use a
                      <span class="tag">
                        <a
                          href="https://vuejs.org/v2/guide/components-slots.html"
                          target="_blank"
                          >Slot</a
                        >
                      </span>
                      element to display the proper content and not have to
                      re-render the layout.
                    </p>
                    <p>
                      Now that I have my layouts created I need to dynamiclly
                      change the layout depending on the page showing. There are
                      a few ways to do this, but with many of the solutions
                      there is a problem with performance. For example, one
                      solution is to declare the layout in the page/view but
                      then you will need to create and destroy the layout
                      everytime you load a new page. The better solution is to
                      declare the layout using the
                      <span class="tag">Meta</span> object in Vue Router. Now
                      from here since most of my pages/views are using the
                      <i>Dashboard Layout</i> I have it set so it looks at the
                      meta object in Vue Router to determine if it needs to use
                      a different layout otherwise it will load the Dashboard
                      Layout.
                    </p>
                    <div class="columns">
                      <div class="column">
                        <div class="box">
                          <h4 class="title img-title">App.vue HTML</h4>
                          <img
                            class="image"
                            src="@/assets/images/blog/apphtml.png"
                          />
                        </div>
                      </div>
                      <div class="column">
                        <div class="box">
                          <h4 class="title img-title">App.vue Computed</h4>
                          <img
                            class="image"
                            src="@/assets/images/blog/appjs.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="box">
                      <h4 class="title img-title">Vue Router</h4>
                      <img
                        class="image"
                        src="@/assets/images/blog/routerjs.png"
                      />
                      <h4 class="title img-title">Dashboard Layout</h4>
                      <img
                        class="image"
                        src="@/assets/images/blog/layout.png"
                      />
                    </div>
                    <!-- Heading Setting Up Backend -->
                    <h2 class="title">Setting Up AWS</h2>
                    <p>
                      My Vue frontend will be hosted in an S3 bucket and contain
                      all of the static files. I need to create an API for the
                      <span class="tag">CRUD</span> functionality and set up a
                      database to store things in. First things first, I
                      installed the
                      <span class="tag">serverless</span>
                      dependency as a global package. After this it's just a
                      matter of making sure you have your AWS credentials set up
                      properly. I used an AWS-Nodejs template to have a starting
                      point for my API.
                    </p>
                    <p>
                      I need two end points for each HTTP request since there is
                      a nested array within the Lead schema.
                      <i>
                        It's a simple data input for notes so I did not create a
                        sub-document for it.
                      </i>
                      I will also be using Amazon Cognito's ID as the unique
                      identifier for a business.
                    </p>

                    <p>
                      Schema for a lead is set up so on to creating the lambda
                      functions. After installing serverless there is a
                      <span class="tag">serverless.yml</span> file created where
                      all of my functions will live in. There is alot of
                      properties you can set up here like permissions but I've
                      kept it clean and simple here with the handler and events
                      properties. Here I set the path, HTTP method, and set CORS
                      to True.
                    </p>
                    <p>
                      After setting up all the functions in the serverless file
                      then we need to create the actual CRUD logic in the
                      <span class="tag">Handler.js</span> file. I've set
                      <span class="tag"
                        >context.callbackWaitsForEmptyEventLoop</span
                      >
                      to false because it is set to true by defualt. The context
                      object contains information about the lambda function
                      invoked. By changing it to false it freezes the lambda
                      function after the callback is called rather than waiting
                      till the event loop is empty.
                    </p>
                    <div class="columns">
                      <div class="column">
                        <div class="box">
                          <h4 class="title img-title">Models</h4>
                          <img
                            class="image"
                            src="@/assets/images/blog/lead.png"
                          />
                        </div>
                      </div>
                      <div class="column">
                        <div class="box">
                          <h4 class="title img-title">Handlers</h4>
                          <img
                            class="image"
                            src="@/assets/images/blog/handler.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column">
                        <div class="column">
                          <div class="box">
                            <h4 class="title img-title">Serverless.yml</h4>
                            <img
                              class="image"
                              src="@/assets/images/blog/serverless.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <!-- END ARTICLE FEED -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.name {
  color: black;
  font-size: 1.5em;
  font-weight: 600;
  padding-top: 10px;
}

.blog-title {
  font-size: 2em;
  line-height: 48px;
}
.artical-contianer {
  background-color: white;
  border-radius: 5px;
  text-align: left;
  font-size: 1em;
  font-weight: 500;
}

.summary {
  text-align: left;
  font-weight: 500;
}

.middle-column {
  height: 150vh;
}

.image {
  width: 80%;
  margin: 0 auto;
  border-radius: 5px;
}

.img-title {
  color: white;
  text-align: center;
  padding-top: 15px;
  margin-bottom: 10px;
}

.box {
  background-color: #1f1f1f;
  height: 100%;
}

.left-column {
  position: absolute;
  top: 100px;
  text-align: left;
}

.left-column-info {
  list-style-type: disc;
  margin-left: 30px;
  margin-top: 10px;
  color: black;
}

.image {
  width: 100vw;
  max-height: 700px;
}

.header-content {
  background-color: hsl(0, 0%, 96%);
}

.header-nav {
  height: 50px;
}

.nav-bar-container {
  border-bottom: 1px solid hsl(0, 0%, 86%);
  padding-bottom: 10px;
}

.middle-nav {
  margin: 20px;
}

a {
  color: #1f1f1f;
}

.tag {
  font-weight: 600;
}
</style>
