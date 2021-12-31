import Vue from "vue";
import VueRouter from "vue-router";
import BaseviewVue from "@/components/baseview";
import Card from "@/pages/cards";
import Credit from "@/pages/credit";
import Settings from "@/pages/settings";

import Payments from "@/pages/payments";
import Home from "@/pages/home";

Vue.use(VueRouter);

const routes = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Baseview",
      component: BaseviewVue,
      children: [
        {
          path: "cards",
          name: "Cards",
          component: Card,
        },
        {
          path: "credit",
          name: "Credit",
          component: Credit,
        },
        {
          path: "settings",
          name: "Settings",
          component: Settings,
        },
        {
          path: "payments",
          name: "Payments",
          component: Payments,
        },
        {
          path: "home",
          name: "Home",
          component: Home,
        },
      ],
    },
  ],
  mode: "history",
});

export default routes;
