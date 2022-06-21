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
  <div class="container-fluid">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal('isNew')">
        建立新的產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th>是否多圖</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>
            <div v-if="item.imagesUrl" class="text-primary">多圖</div>
            <div v-else>-</div>
          </td>
          <td>{{ item.origin_price }}</td>
          <td>{{ item.price }}</td>
          <td>
            <div class="text-success" v-if="item.is_enabled">啟用</div>
            <div v-else>未啟用</div>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModal('edit', item)"
              >
                編輯
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModal('delete', item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- Modal -->
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-2">
                <div class="mb-3">
                  <label for="imageUrl" class="form-label">輸入主圖網址</label>
                  <input
                    type="text"
                    class="form-control"
                    id="imageUrl"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl"
                  />
                  <img class="img-fluid" :src="tempProduct.imageUrl" alt="" />
                </div>
                <div class="mb-3">
                  <h3>多圖設置</h3>
                  <div v-if="Array.isArray(tempProduct.imagesUrl)">
                    <template
                      v-for="(img, key) in tempProduct.imagesUrl"
                      :key="key + '5487'"
                    >
                      <input
                        id="imagesUrl"
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片連結"
                        v-model="tempProduct.imagesUrl[key]"
                      />
                      <img
                        class="img-fluid"
                        :src="tempProduct.imagesUrl[key]"
                        alt=""
                      />
                    </template>
                    <button
                      v-if="
                        !tempProduct.imagesUrl.length ||
                        tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                      "
                      @click="tempProduct.imagesUrl.push('')"
                      class="btn btn-outline-primary btn-sm d-block w-100"
                    >
                      新增圖片
                    </button>
                    <button
                      v-else
                      @click="tempProduct.imagesUrl.pop()"
                      class="btn btn-outline-danger btn-sm d-block w-100"
                    >
                      刪除圖片
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  v-model="tempProduct.title"
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                />
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label">分類</label>
                  <input
                    v-model="tempProduct.category"
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">單位</label>
                  <input
                    v-model="tempProduct.unit"
                    id="unit"
                    type="text"
                    class="form-control"
                    placeholder="請輸入單位"
                  />
                </div>
              </div>

              <div class="row">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    v-model.number="tempProduct.origin_price"
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                  />
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label">售價</label>
                  <input
                    v-model.number="tempProduct.price"
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>
              <hr />

              <div class="mb-3">
                <label for="description" class="form-label">產品描述</label>
                <textarea
                  v-model="tempProduct.description"
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label">說明內容</label>
                <textarea
                  v-model="tempProduct.content"
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入說明內容"
                >
                </textarea>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="is_enabled"
                    v-model="tempProduct.is_enabled"
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="updateProduct(tempProduct.title)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 刪除用的modal -->
  <div
    id="delProductModal"
    ref="delProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger">{{ tempProduct.title }}</strong>
          商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="delProduct(tempProduct.title)"
          >
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import alert from "@/methods/mixins/alert";

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      productModal: {},
      delProductModal: {},
      isNew: false,
    };
  },
  mixins: [alert],
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`;
      this.$http.get(url).then((res) => {
        this.products = res.data.products;
        this.isLoading = false;
      });
    },
    openModal(status, item) {
      if (status === "isNew") {
        this.tempProduct = {
          imagesUrl: [],
        };
        this.productModal.show();
        this.isNew = true;
      } else if (status === "edit") {
        this.tempProduct = { ...item };
        this.isNew = false;
        if (this.tempProduct.imagesUrl) {
          this.productModal.show();
        } else {
          this.tempProduct.imagesUrl = [];
          this.productModal.show();
        }
      } else if (status === "delete") {
        this.tempProduct = { ...item };
        if (this.tempProduct.imagesUrl) {
          this.delProductModal.show();
        } else {
          this.tempProduct.imagesUrl = [];
          this.delProductModal.show();
        }
      }
    },
    updateProduct(name) {
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let method = "post";
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
        method = "put";
      }
      this.$http[method](url, { data: this.tempProduct }).then(() => {
        this.getProducts();
        this.alertAddProduct(name);
        this.productModal.hide();
      });
    },
    delProduct(name) {
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(url).then(() => {
        this.alertRemoveProduct(name);
        this.getProducts();
        this.delProductModal.hide();
      });
    },
  },
  mounted() {
    this.getProducts();
    const modal = document.querySelector("#productModal");
    this.productModal = new Modal(modal); // 實體化
    const delProductModal = document.querySelector("#delProductModal");
    this.delProductModal = new Modal(delProductModal);
  },
};
</script>
