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
    <h2 class="pages-banner-title">收藏清單</h2>
  </div>
  <div class="frontcart-progress-list container">
    <div class="mt-5">
      <div
        class="frontcart-progress-title d-flex justify-content-center align-items-center"
      >
        <h3 class="frontcart-progress-title-fir">收藏清單</h3>
      </div>
    </div>
  </div>
  <div class="container">
    <div v-if="this.collectsList.length">
      <div class="mt-4">
        <!-- 收藏列表 -->
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in collectsList" :key="item.id">
              <td style="width: 200px">
                <div
                  style="
                    height: 100px;
                    background-size: cover;
                    background-position: center;
                  "
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
              </td>
              <td>
                <div>{{ item.title }}</div>
              </td>
              <td>
                <div>NT{{ item.price }} / {{ item.unit }}</div>
              </td>
              <td>
                <button
                  @click="addToCart(item.id, item.title)"
                  class="btn btn-primary px-lg-2 m-0"
                  type="button"
                >
                  加入購物車
                </button>
              </td>
              <td>
                <button
                  class="btn btn-outline-success px-lg-2 m-0"
                  @click="removeCollect(item.id, item.title)"
                  type="btn"
                >
                  <i class="bi bi-trash3-fill"></i>移除收藏
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else>
      <div class="text-center">
        <div class="d-flex justify-content-center align-items-center mb-5">
          <img
            class="rounded-circle"
            src="https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            style="width: 250px; height: 250px"
          />
          <p class="ms-4">你還沒有收藏喜歡的服務，趕快到服務列表收藏吧！</p>
        </div>
        <div>
          <router-link class="btn btn-outline-primary me-3" to="/products">
            回到服務列表
          </router-link>
        </div>
      </div>
    </div>
    <!-- 轉換頁面 -->
    <div v-if="this.collectsList.length" class="d-flex justify-content-between">
      <div class="text-start">
        <router-link class="btn btn-outline-primary me-3" to="/products">
          回到服務列表
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import alert from "@/methods/mixins/alert";
import emitter from "@/methods/emitter";

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      isLoadingLocal: false,
      isLoadingItem: "",
      products: [],
      cartData: {
        carts: [],
      },
      collect: JSON.parse(localStorage.getItem("collect")) || [],
      collectsList: [],
    };
  },
  mixins: [alert],
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(url).then((res) => {
        this.products = res.data.products;
        console.log("get", res);
        this.getCart();
        this.getCollects();
        this.isLoading = false;
      });
    },
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        this.cartData = res.data.data;
        emitter.emit("get-cart");
        this.isLoading = false;
      });
    },
    addToCart(id, name, qty = 1) {
      const data = {
        product_id: id,
        qty,
      };
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.post(url, { data }).then((res) => {
        console.log("購物車", res);
        this.getCart();
        this.isLoadingItem = false;
        this.alertAddToCart(name);
      });
    },
    getCollects() {
      this.collectsList = this.products.filter(
        (item) => this.collect.indexOf(item.id) > -1
      );
    },
    removeCollect(id, name) {
      const collectId = this.collect.indexOf(id);
      if (collectId !== -1) {
        this.collect.splice(collectId, 1);
        localStorage.setItem("collect", JSON.stringify(this.collect));
        this.getCollects();
        this.alertRemoveCollect(name);
      }
    },
    goCheckOut() {
      this.$router.push("/checkout");
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
