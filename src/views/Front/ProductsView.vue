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
      src="https://images.unsplash.com/photo-1532329683184-6ffd13057d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1775&q=80"
      alt=""
    />
    <h2 class="pages-banner-title">服務總覽</h2>
  </div>
  <div class="frontcart-progress-list container">
    <div class="mt-5">
      <div
        class="frontcart-progress-title d-flex justify-content-center align-items-center"
      >
        <h3 class="frontcart-progress-title-fir">服務總覽</h3>
      </div>
    </div>
  </div>
  <div class="container page-top">
    <div class="mt-4">
      <div class="row d-flex justify-content-between">
        <div class="col-3">
          <ul class="products-category">
            <li>
              <router-link
                to="/products"
                class="products-category-link"
                :class="{ backgroundSuccess: categoryActive === 'all' }"
                >全部服務</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ path: '/products', query: { category: '家訪' } }"
                :class="{ backgroundSuccess: categoryActive === '家訪' }"
                class="products-category-link"
                >家訪</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ path: '/products', query: { category: '視訊' } }"
                :class="{ backgroundSuccess: categoryActive === '視訊' }"
                class="products-category-link"
                >視訊</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ path: '/products', query: { category: '日照' } }"
                :class="{ backgroundSuccess: categoryActive === '日照' }"
                class="products-category-link"
                >日照</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ path: '/products', query: { category: '護理房型' } }"
                :class="{ backgroundSuccess: categoryActive === '護理房型' }"
                class="products-category-link"
                >護理房型</router-link
              >
            </li>
            <li>
              <router-link
                class="products-category-link products-category-link-bottom"
                :to="{ path: '/products', query: { category: '一般房型' } }"
                :class="{ backgroundSuccess: categoryActive === '一般房型' }"
                >一般房型</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-9">
          <div class="row row-cols-1 row-cols-md-2 g-2">
            <div class="col" v-for="product in products" :key="product.id">
              <div
                class="card bg-light rounded shadow border-light border-0 mb-2 position-relative position-relative"
              >
                <router-link
                  class="card-link text-dark text-decoration-none"
                  :to="`/product/${product.id}`"
                >
                  <div class="card-zoom">
                    <div
                      :style="{ backgroundImage: `url(${product.imageUrl})` }"
                      style="
                        height: 200px;
                        background-size: cover;
                        background-position: center center;
                      "
                      class="card-zoom-img rounded-top"
                    ></div>
                    <div class="card-zoom-text fs-4 border border-light p-2">
                      查看更多
                    </div>
                  </div>
                  <div class="card-body">
                    <div>
                      <h4 class="card-title">
                        {{ product.title }}
                        <span v-if="collect.includes(product.id)"
                          ><i
                            class="bi bi-chat-square-heart-fill text-danger"
                          ></i
                        ></span>
                        <span v-else
                          ><i class="bi bi-chat-square-heart-fill text-dark"></i
                        ></span>
                      </h4>
                      <div class="card-text d-flex align-items-center">
                        <p class="text-primary fs-4 me-2">
                          NT$ {{ product.price }}
                        </p>
                        <p class="text-muted fs-5 text-decoration-line-through">
                          NT$ {{ product.origin_price }}
                        </p>
                      </div>
                    </div>
                  </div>
                </router-link>
                <div class="card-body d-flex justify-content-between">
                  <button
                    class="btn btn-outline-success px-lg-4 m-0"
                    @click="toggleCollect(product.id, product.title)"
                    type="btn"
                  >
                    <i class="bi bi-chat-square-heart"></i>收藏
                  </button>
                  <button
                    @click="addToCart(product.id, product.title)"
                    class="btn btn-primary px-lg-4 m-0"
                    type="button"
                    :disabled="isLoading === product.id"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4">
            <PaginationCom
              :pages="pagination"
              @get-products="getProducts"
            ></PaginationCom>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationCom from "@/components/PaginationCom";
import alert from "@/methods/mixins/alert";
import emitter from "@/methods/emitter";

export default {
  components: {
    PaginationCom,
  },
  data() {
    return {
      products: [],
      pagination: {},
      isLoading: false,
      fullPage: true,
      user: {
        product_id: "",
        qrt: "",
      },
      //對應剛剛自訂的欄位名稱
      collect: JSON.parse(localStorage.getItem("collect")) || [],
      categoryActive: "",
    };
  },
  watch: {
    collect: {
      handler() {
        // 1.自訂欄位 ('欄位名稱', 存入的JSON內容)
        // 2.但localStorage只能用字串形式， 所以使用stringify方法轉成字串
        // 3.當資料有變動的時候做寫入，沒有的話就不做
        localStorage.setItem("collect", JSON.stringify(this.collect));
      },
      deep: true,
    },
    $route() {
      this.getProducts();
    },
  },
  mixins: [alert],
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      console.log(this.$route.query);
      const { category } = this.$route.query;
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      if (category) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}&category=${category}`;
        this.categoryActive = category;
      } else {
        this.categoryActive = "all";
      }
      this.$http.get(url).then((res) => {
        this.products = res.data.products;
        this.pagination = res.data.pagination;
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
      this.isLoading = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.post(url, { data }).then((res) => {
        console.log("購物車", res);
        this.getCart();
        this.alertAddToCart(name);
        this.isLoading = false;
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
    this.getProducts();
  },
};
</script>
