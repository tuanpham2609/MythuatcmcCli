import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/HomePage";
import AboutPage from "../components/about";
import ContactPage from "../components/contact";
import AbumImg from "../components/abumimg";
import Post from "../components/post";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/gioithieu",
    name: "AboutPage",
    component: AboutPage
  },
  {
    path: "/lienhe",
    name: "ContactPage",
    component: ContactPage
  },
  {
    path: "/hinhvemythuatcmc",
    name: "AbumImg",
    component: AbumImg
  },
  {
    path: "/tintuc-mythuatcmc",
    name: "Post",
    component: Post
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
