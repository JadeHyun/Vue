import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/us",
    name: "us",
    // route level code-splitting
    // --> 라우트 레벨에서 코드를 분할하는 방법
    // this generates a separate chunk (us.[hash].js) for this route
    // --> 이 라우트에 대한 chunk 파일이 분리되어 생성된다.
    // which is lazy-loaded when the route is visited.
    // --> 이 라우트에 방문했을 때 lazy-load (지연로드) 된다.
    component: () => import(/* webpackChunkName: "us" */ "../views/UsView.vue"),
  },
  {
    path: "/databinding",
    name: "dataBinding",
    component: () => import("../views/DataBinding.vue"),
  },
  {
    path: "/input",
    name: "inputView",
    component: () => import("../views/inputView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
