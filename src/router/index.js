import Vue from "vue";
import VueRouter from "vue-router";
import "../assets/scss/main.scss";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () =>
      import("../views/Dashboard.vue")
  },
  {
    path: "/support",
    name: "Support",
    component: () =>
      import("../views/Support.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import("../views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
