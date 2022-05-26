import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import NewsView from "../views/NewsView";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import { store } from '../store/index';
import bus from '../utils/bus'
/* import createListView from "../views/CreateListView"; */

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      /*       component: createListView("NewsView"), */
      component: NewsView,

      beforeEnter: (to, from, next) => {
        bus.$emit("start:MainSpinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            console.log("fetched");
            bus.$emit("end:MainSpinner");
            next();
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:MainSpinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => next())
          .catch((error) => {
            console.log(error);
          });
      },
      /*  component: createListView("AskView"), */
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,

      beforeEnter: (to, from, next) => {
        bus.$emit("start:MainSpinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => next())
          .catch((error) => {
            console.log(error);
          });
      },

      /*  component: createListView("JobsView"), */
    },
    {
      path: "/user/:id",
      name: "user",

      component: UserView,
    },
    {
      path: "/item/:id",
      name: "item",
      component: ItemView,
    },
  ],
});
