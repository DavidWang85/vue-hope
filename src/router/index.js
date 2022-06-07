import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/Front/FrontView.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/Front/HomeView.vue"),
      },
      {
        path: "products",
        component: () => import("../views/Front/ProductsView.vue"),
      },
      {
        path: "product/:id",
        component: () => import("../views/Front/ProductView.vue"),
      },
      {
        path: "cart",
        component: () => import("../views/Front/CartView.vue"),
      },
      {
        path: "checkout",
        component: () => import("../views/Front/CheckoutView.vue"),
      },
      {
        path: "complete",
        component: () => import("../views/Front/CompleteView.vue"),
      },
      {
        path: "collect",
        component: () => import("../views/Front/CollectView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach(() => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
});

export default router;
