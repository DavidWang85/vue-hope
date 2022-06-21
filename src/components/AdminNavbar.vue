<template>
  <LoadingPlugin :active="isLoading" :is-full-page="fullPage" :z-index="1060">
    <div class="loadingio-spinner-dual-ball-eq2qwqnc1x">
      <div class="ldio-tw1s1a7kdy9">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </LoadingPlugin>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/admin/products">後台</router-link>
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
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link"
              >產品列表</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link"
              >訂單</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link">回到前台</router-link>
          </li>
        </ul>
        <div class="navbar-nav ms-auto">
          <a href="#" @click.prevent="logout" class="nav-link">
            <button type="button" class="btn btn-outline-warning btn-sm">
              登出
            </button>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import alert from "@/methods/mixins/alert";

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  mixins: [alert],
  methods: {
    logout() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}logout`;
      this.$http.post(url).then(() => {
        this.$router.push("/login");
      });
      this.isLoading = false;
      this.alertLogoutSuccess();
    },
  },
};
</script>
