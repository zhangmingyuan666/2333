import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "HomeMain",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/Home/HomeMain/HomeMain.vue"
          ),
      },
      {
        path: "/exactclassroom/:id",
        name: "ExactClassRoom",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/Home/ExactClassRoom/ExactClassRoom.vue"
          ),
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
