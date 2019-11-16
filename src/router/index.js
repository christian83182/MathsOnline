import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Changelog from "@/views/Changelog";
import About from "@/views/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },{
    path: "/changelog",
    name: "changelog",
    component: Changelog
  },{
    path: "/about",
    name: "about",
    component: About
  }

];

const router = new VueRouter({
  routes
});

export default router;
