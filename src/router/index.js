import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },{
    path: "/changelog",
    name: "changelog",
    component: () => import("../views/Changelog.vue")
  },{
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },{
    path: "/addition",
    name: "addition",
    component: () => import("../views/QuizViews/Addition.vue")
  },{
    path: "/subtraction",
    name: "subtraction",
    component: () => import("../views/QuizViews/Subtraction.vue")
  },{
    path: "/multiplication",
    name: "multiplication",
    component: () => import("../views/QuizViews/Multiplication.vue")
  },{
    path: "/division",
    name: "division",
    component: () => import("../views/QuizViews/Division.vue")
  },{
    path: "/mean",
    name: "mean",
    component: () => import("../views/QuizViews/Mean.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
