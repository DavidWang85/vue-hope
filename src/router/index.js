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
        path: "about",
        component: () => import("../views/Front/AboutView.vue"),
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
  {
    path: "/admin",
    component: () => import("../views/Admin/DashboardView.vue"),
    children: [
      {
        path: "products",
        component: () => import("../views/Admin/AdminProducts.vue"),
      },
      {
        path: "orders",
        component: () => import("../views/Admin/AdminOrders.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active",
});

router.afterEach(() => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
});

export default router;
