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
    <h2 class="pages-banner-title">購物車內容</h2>
  </div>
  <div class="frontcart-progress-list container">
    <div class="mt-5">
      <div class="progress">
        <div
          class="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 33.33%"
        >
          30%
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div
        class="frontcart-progress-title d-flex justify-content-center align-items-center"
      >
        <h3 class="frontcart-progress-title-fir">購物車</h3>
        <h4 class="frontcart-progress-title-sec">購物車內容</h4>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="mt-4">
      <!-- 購物車列表 -->
      <table class="table align-middle table-hover">
        <thead>
          <tr>
            <th scope="col" style="width: 5%">刪除</th>
            <th scope="col" style="width: 4%"></th>
            <th scope="col" style="width: 15%">服務項目</th>
            <th scope="col" style="width: 20%">單價</th>
            <th scope="col" style="width: 23%">數量 / 單位</th>
            <th scope="col" style="width: 20%">總計</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="cartData.carts">
            <tr
              class="align-center"
              v-for="item in cartData.carts"
              :key="item.id"
            >
              <th>
                <button
                  scope="row"
                  type="button"
                  class="btn btn-outline-dark btn-sm"
                  @click="removeCartItem(item.id, item.product.title)"
                  :disabled="isLoadingLocal === item.id"
                >
                  <i
                    class="bi bi-trash3-fill"
                    v-show="isLoadingLocal !== item.id"
                  ></i>
                  <div
                    class="spinner-grow spinner-grow-sm text-primary"
                    role="status"
                    v-if="isLoadingLocal === item.id"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </button>
              </th>
              <td>
                <img
                  class="d-none d-lg-inline"
                  :src="item.product.imageUrl"
                  alt=""
                  style="width: 80px; height: 60px"
                />
              </td>
              <td>
                <router-link :to="`/product/${item.product.id}`">
                  {{ item.product.title }}
                </router-link>
              </td>
              <td>NT$ {{ item.product.price }}</td>
              <td class="align-center">
                <div
                  class="input-group input-group-sm"
                  style="max-width: 165px"
                >
                  <div class="input-group">
                    <select
                      class="form-select"
                      v-model="item.qty"
                      @change="updateCartItem(item)"
                      :disabled="isLoadingLocal === item.id"
                    >
                      <option
                        :value="num"
                        v-for="num in 24"
                        :key="`${num}-${item.id}`"
                        :selected="item.qty === num"
                      >
                        {{ num }}
                      </option>
                    </select>
                    <span class="input-group-text" id="basic-addon2">{{
                      item.product.unit
                    }}</span>
                  </div>
                </div>
              </td>
              <td>NT$ {{ item.total }}</td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="5" class="text-end fw-bold">總金額：</td>
            <td class="text-start">NT$ {{ cartData.total }}</td>
          </tr>
        </tfoot>
      </table>
      <!-- 轉換頁面 -->
      <div class="step d-flex justify-content-between">
        <div class="text-start">
          <router-link class="btn btn-outline-primary me-3" to="/products">
            回到服務列表
          </router-link>
          <button
            @click="removeAllCarts"
            :disabled="isLoadingItem === 'clear'"
            :class="{ disabled: cartData.carts.length === 0 }"
            class="btn btn-outline-danger"
            type="button"
          >
            清空購物車
          </button>
        </div>
        <div class="text-end">
          <button
            :class="{ disabled: cartData.carts.length === 0 }"
            class="btn btn-primary"
            type="button"
            @click="goCheckOut"
          >
            下一步
          </button>
        </div>
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
    };
  },
  mixins: [alert],
  methods: {
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        this.cartData = res.data.data;
        emitter.emit("get-cart");
        this.checkCart();
        this.isLoading = false;
      });
    },
    getCartNoLoading() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        emitter.emit("get-cart");
        this.cartData = res.data.data;
      });
    },
    removeCartItem(id, name) {
      this.isLoadingLocal = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(url).then(() => {
        this.isLoadingLocal = false;
        this.getCartNoLoading();
        this.alertRemoveCartItem(name);
      });
    },
    removeAllCarts() {
      this.isLoadingLocal = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(url).then(() => {
        this.isLoadingLocal = false;
        this.getCartNoLoading();
        this.alertRemoveAllCart();
      });
    },
    updateCartItem(item) {
      const data = {
        product_id: item.id,
        qty: item.qty,
      };
      this.isLoadingLocal = item.id;
      this.$http
        .put(
          `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`,
          { data }
        )
        .then(() => {
          this.isLoadingLocal = false;
          this.getCartNoLoading();
          this.alertUpdateCartItem();
        });
    },
    goCheckOut() {
      this.$router.push("/checkout");
    },
    // 確認購物車有東西
    checkCart() {
      if (this.cartData.carts.length === 0) {
        this.alertRemindCart();
        this.$router.push("/products");
      }
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
