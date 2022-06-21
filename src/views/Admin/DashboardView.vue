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
  <AdminNavbarVue></AdminNavbarVue>
  <router-view v-if="checkSuccess" />
</template>

<script>
import AdminNavbarVue from "@/components/AdminNavbar.vue";
export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      checkSuccess: false,
    };
  },
  methods: {
    checkLogin() {
      this.isLoading = true;
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)davidToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      if (token) {
        this.$http.defaults.headers.common["Authorization"] = token;
        const url = `${process.env.VUE_APP_API}api/user/check`;
        this.$http
          .post(url)
          .then(() => {
            this.checkSuccess = true;
            this.isLoading = false;
          })
          .catch(() => {
            this.isLoading = false;
            this.$router.push("/login");
          });
      } else {
        this.$router.push("/login");
      }
    },
  },
  components: {
    AdminNavbarVue,
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
