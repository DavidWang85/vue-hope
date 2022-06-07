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
  <div class="pages-banner">
    <img
      src="https://images.unsplash.com/photo-1508963493744-76fce69379c0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770"
      alt=""
    />
    <h2 class="pages-banner-title">完成訂單</h2>
  </div>
  <div class="frontcart-progress-list container">
    <div class="mt-6">
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 100%"
        >
          100%
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div
        class="frontcart-progress-title d-flex justify-content-center align-items-center"
      >
        <h3 class="frontcart-progress-title-fir">購物車</h3>
        <h4 class="frontcart-progress-title-sec">完成訂單</h4>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="mt-4 mb-3">
      <div class="d-flex justify-content-center align-items-center">
        <div class="col-6 p-3">
          <img
            class="w-100 shadow rounded"
            src="https://images.unsplash.com/photo-1621106036911-964146b9f97c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
            alt=""
          />
        </div>
        <div class="col-6 p-3">
          <h5 class="fw-bold">注意須知</h5>
          <ol class="mt-4">
            <li class="mt-1">訂單完成後五日會有專人進行行前通知。</li>
            <li class="mt-1">
              因應疫情，在入住耆望社區前，需要提供疫苗接種紀錄及七日內陰性證明。
            </li>
            <li class="mt-1">耆望社區擁有最終解釋權。</li>
          </ol>
        </div>
      </div>
    </div>
    <div class="text-center mt-4">
      <router-link to="/">
        <button type="submit" class="btn btn-outline-primary btn-lg">
          回到首頁
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      cartData: {
        carts: [],
      },
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        this.cartData = res.data.data;
        this.isLoading = false;
      });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
