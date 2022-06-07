<template>
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-dark bg-transparent shadow header"
  >
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <router-link class="navbar-brand" to="/">
          <h1 class="title-head text-stress fw-bold">耆望</h1>
        </router-link>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link ps-0" to="/products"
              >服務總覽</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link ps-0" to="/articles"
              >文章專欄</router-link
            >
          </li>
        </ul>
      </div>
      <div class="d-flex align-items-center">
        <router-link class="me-4 align-text-bottom text-light" to="/collect">
          <i class="bi bi-chat-square-heart"></i>
        </router-link>
        <router-link class="position-relative text-light" to="/cart">
          <i class="bi bi-bag"
            ><span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {{ cartData.carts.length }}
              <span class="visually-hidden">unread messages</span>
            </span></i
          >
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import emitter from "@/methods/emitter";
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  header.classList.toggle("menu-scroll", window.scrollY > 110);
});
export default {
  data() {
    return {
      cartData: {
        carts: [],
      },
    };
  },
  methods: {
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        console.log("getCart", res);
        this.cartData = res.data.data;
      });
    },
  },
  mounted() {
    this.getCart();
    emitter.on("get-cart", () => {
      this.getCart();
    });
  },
};
</script>

<style scoped>
.header.menu-scroll {
  background: #663224 !important;
}
</style>
