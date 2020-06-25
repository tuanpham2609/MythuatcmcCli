import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/HomePage";
import AboutPage from "../components/about";
import ContactPage from "../components/contact";
import AbumImg from "../components/abumimg";
import Post from "../components/post";
import PostDetail from "../components/postDetail";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/gioi-thieu",
    name: "AboutPage",
    component: AboutPage
  },
  {
    path: "/lien-he",
    name: "ContactPage",
    component: ContactPage
  },
  {
    path: "/abum-anh",
    name: "AbumImg",
    component: AbumImg
  },
  {
    path: "/tin-tuc",
    name: "Post",
    component: Post
  },
  {
    path: "/:id-:name.html",
    name: "PostDetail",
    component: PostDetail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
