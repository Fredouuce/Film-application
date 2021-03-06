import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Film from "../views/Film.vue";
import NotFound from "../components/NotFound/NotFound.vue";
import Tv from "../views/Tv.vue";

import FilmPage from "../components/Film/FilmPage.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/film",
    name: "Film",
    component: Film,
    props: true,
  },
  {
    path: "/film/:filmId",
    name: "FilmPage",
    component: FilmPage,
    props: true,
  },
  {
    path: "/tv",
    name: "Tv",
    component: Tv,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
