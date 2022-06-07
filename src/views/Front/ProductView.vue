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
      src="https://images.unsplash.com/photo-1619869195642-ad671ace75a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt=""
    />
    <h2 class="pages-banner-title">服務內容詳情</h2>
  </div>
  <div class="container pages-top">
    <div class="row d-flex pb-4 align-items-center">
      <div class="col-6">
        <img class="img-cover w-100" :src="product.imageUrl" alt="" />
      </div>
      <div class="col-6">
        <h3 class="mb-4 fs-1 text-primary p-0">
          {{ product.title
          }}<span v-if="collect.includes(product.id)"
            ><i class="bi bi-chat-square-heart-fill text-danger ms-3"></i
          ></span>
          <span v-else
            ><i class="bi bi-chat-square-heart-fill text-dark ms-3"></i
          ></span>
        </h3>
        <div class="card-text d-flex align-items-center">
          <p class="text-primary fs-3 me-4">NT$ {{ product.price }}</p>
          <p class="text-muted fs-4 text-decoration-line-through">
            NT$ {{ product.origin_price }}
          </p>
        </div>
        <p class="mb-4 col-6">{{ product.description }}</p>
        <div class="row">
          <div class="col-6">
            <div class="input-group">
              <select id="" class="form-select" v-model="product.qty">
                <option
                  :value="num"
                  v-for="num in 20"
                  :key="`${num}-${product.id}`"
                  :selected="product.qty === num"
                >
                  {{ num }}
                </option>
              </select>
              <span class="input-group-text" id="basic-addon2">{{
                product.unit
              }}</span>
            </div>
          </div>
          <div class="col-6">
            <button
              @click="addToCart(product.id, product.title, product.qty)"
              class="btn btn-primary px-lg-4 me-2"
              type="button"
            >
              <div
                class="spinner-border spinner-border-sm text-secondary"
                v-show="isLoadingItem === product.id"
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
              加入購物車
            </button>
            <button
              @click="toggleCollect(product.id, product.title)"
              class="btn btn-outline-success px-lg-3 m-0"
              type="btn"
            >
              <i class="bi bi-chat-square-heart"></i>先收藏
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="mb-4">
        <div class="front-product-title">
          <h4 class="text-center fw-bold border-bottom border-primary">
            服務介紹
          </h4>
        </div>
        <div class="mb-4">
          <p>
            {{ product.content }}
          </p>
        </div>
      </div>
      <div class="mb-4">
        <div class="front-product-title">
          <h4 class="text-center fw-bold border-bottom border-primary">
            注意須知
          </h4>
        </div>
        <ul class="mb-4">
          <li>ajdinf</li>
          <li>asdjifa</li>
          <li>ajsifa</li>
          <li>asfjiaf</li>
        </ul>
      </div>
      <div class="mb-4">
        <div class="front-product-title">
          <h4 class="text-center fw-bold border-bottom border-primary">
            更多圖示
          </h4>
        </div>
        <div v-if="product.imagesUrl" class="product-images">
          <div class="row">
            <div
              class="col-4"
              v-for="(img, index) in product.imagesUrl"
              :key="index"
            >
              <img :src="img" class="img-fluid mt-4 d-block" alt="" />
            </div>
          </div>
        </div>
        <div v-else class="text-center">
          很抱歉！<span class="text-primary">{{ product.title }}</span>
          沒有提供更多圖示
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from "@/methods/emitter";
import alert from "@/methods/mixins/alert";

export default {
  data() {
    return {
      product: [],
      isLoading: false,
      isLoadingItem: false,
      fullPage: true,
      id: "",
      collect: JSON.parse(localStorage.getItem("collect")) || [],
    };
  },
  mixins: [alert],
  methods: {
    getProduct() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(url).then((res) => {
        console.log(res);
        this.product = res.data.product;
        this.getCart();
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
      this.isLoadingItem = id;
      const data = {
        product_id: id,
        qty,
      };
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.post(url, { data }).then(() => {
        this.getCart();
        this.alertAddToCart(name);
        this.isLoadingItem = false;
      });
    },
    toggleCollect(id, name) {
      const collectIndex = this.collect.findIndex((item) => item === id);
      if (collectIndex === -1) {
        this.collect.push(id);
        this.alertAddToCollect(name);
      } else {
        this.collect.splice(collectIndex, 1);
        this.alertRemoveCollect(name);
      }
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
};
</script>
