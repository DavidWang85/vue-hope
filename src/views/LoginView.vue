<template>
  <h1>登入頁面</h1>
  <button type="button" @click="login">登入</button>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push("/admin/products");
    },
  },
};
</script>
