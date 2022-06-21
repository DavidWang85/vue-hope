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
  <div class="container">
    <div class="mt-3">
      <div class="row justify-content-center">
        <h1 class="h3 mb-3 font-weight-normal text-center">請先登入</h1>
        <div class="col-8">
          <form id="form" class="form-signin">
            <div class="form-floating mb-3">
              <!-- 綁定input -->
              <input
                type="email"
                class="form-control"
                id="username"
                v-model="user.username"
                placeholder="name@example.com"
                required
                autofocus
              />
              <label for="username">Email address</label>
            </div>
            <div class="form-floating">
              <!-- 綁定input -->
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="user.password"
                placeholder="Password"
                required
              />
              <label for="password">Password</label>
            </div>
            <!-- 記得把type改成button /  綁定login方法 -->
            <button
              class="btn btn-lg btn-primary w-50 mt-3"
              type="button"
              @click="login"
            >
              登入
            </button>
            <router-link to="/">
              <button
                class="btn btn-lg btn-outline-success w-50 mt-3"
                type="button"
              >
                返回首頁
              </button>
            </router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import alert from "@/methods/mixins/alert";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      isLoading: false,
      fullPage: true,
    };
  },
  mixins: [alert],
  methods: {
    login() {
      const url = `${process.env.VUE_APP_API}admin/signin`;
      this.isLoading = true;
      this.$http
        .post(url, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `davidToken=${token}; expires=${new Date(expired)}`;
          this.alertLoginSuccess();
          this.$router.push("/admin/products");
          this.isLoading = false;
        })
        .catch(() => {
          this.alertLoginFalse();
          this.$router.push("/login");
          this.isLoading = false;
        });
    },
  },
};
</script>
