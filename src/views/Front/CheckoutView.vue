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
    <h2 class="pages-banner-title">個人資料填寫</h2>
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
          style="width: 66.66%"
        >
          60%
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div
        class="frontcart-progress-title d-flex justify-content-center align-items-center"
      >
        <h3 class="frontcart-progress-title-fir">購物車</h3>
        <h4 class="frontcart-progress-title-sec">個人資料填寫</h4>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="mt-4">
      <div class="row mb-4">
        <div class="col-lg-6 col-md-12">
          <h5 class="text-center text-primary">訂單詳情</h5>
          <table class="table align-middle">
            <thead>
              <tr>
                <th scope="col">服務項目</th>
                <th scope="col">單價</th>
                <th scope="col">數量</th>
                <th scope="col" class="text-end">總計</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cartData.carts" :key="item.id">
                <th>
                  <img
                    :src="item.product.imageUrl"
                    class="d-none d-sm-inline"
                    style="width: 60px; height: 60px"
                    alt=""
                  />
                  {{ item.product.title }}
                </th>
                <td>{{ item.product.price }}</td>
                <td>
                  {{ item.qty }}
                </td>
                <td class="text-end">NT$ {{ item.total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr :class="{ decorationLine: couponTotal }">
                <td colspan="2" class="fw-bold">總金額</td>
                <td colspan="2" class="text-end fw-bold">
                  NT$ {{ cartData.total }}
                </td>
              </tr>
              <tr v-if="couponTotal">
                <td colspan="2" class="fw-bold">折扣後總金額</td>
                <td colspan="2" class="text-end fw-bold">
                  NT$ {{ couponTotal }}
                </td>
              </tr>
              <tr>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="輸入折扣碼"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    v-model.trim="coupon"
                  />
                  <button
                    class="btn btn-success"
                    type="button"
                    id="button-addon2"
                    @click="postCoupon"
                    :class="{ disabled: couponTotal }"
                  >
                    套用折扣碼
                  </button>
                </div>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="col-lg-6 col-md-12">
          <h5 class="text-center text-primary mb-3">填寫資料</h5>
          <div class="row justify-content-center">
            <v-form ref="form" v-slot="{ errors }" @submit="createOrder()">
              <div class="mb-3">
                <label for="email" class="form-label fw-bold">Email</label>
                <v-field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入電子郵件"
                  rules="required|email"
                  v-model="form.user.email"
                ></v-field>
                <error-message
                  name="email"
                  class="invalid-feedback"
                ></error-message>
              </div>

              <div class="mb-3">
                <label for="name" class="form-label fw-bold">收件人姓名</label>
                <v-field
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model="form.user.name"
                ></v-field>
                <error-message
                  name="姓名"
                  class="invalid-feedback"
                ></error-message>
              </div>

              <div class="mb-3">
                <label for="tel" class="form-label fw-bold">收件人電話</label>
                <v-field
                  id="tel"
                  name="電話"
                  type="tel"
                  class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入電話"
                  v-model="form.user.tel"
                  rules="required|min:8|max:10"
                ></v-field>
                <error-message
                  name="電話"
                  class="invalid-feedback"
                ></error-message>
              </div>

              <div class="mb-3">
                <label for="address" class="form-label fw-bold"
                  >收件人地址</label
                >
                <v-field
                  id="address"
                  name="地址"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址"
                  rules="required"
                  v-model="form.user.address"
                ></v-field>
                <error-message
                  name="地址"
                  class="invalid-feedback"
                ></error-message>
              </div>

              <div class="mb-3">
                <label for="select" class="form-label fw-bold">付款方式</label>
                <v-field
                  as="select"
                  id="select"
                  name="付款方式"
                  class="form-select"
                  v-model="form.user.pay"
                  :class="{ 'is-invalid': errors['付款方式'] }"
                  rules="required"
                >
                  <option selected disabled>選擇您的付款方式</option>
                  <option value="現場付款">現場付款</option>
                  <option value="信用卡付費">信用卡付費</option>
                  <option value="信用卡分期付款">信用卡分期付款</option>
                  <option value="銀行轉帳">銀行轉帳</option>
                </v-field>
                <error-message
                  name="付款方式"
                  class="invalid-feedback"
                ></error-message>
              </div>

              <div class="mb-3">
                <label for="message" class="form-label fw-bold">留言</label>
                <textarea
                  id="message"
                  class="form-control"
                  cols="30"
                  rows="10"
                  placeholder="歡迎留下家中長輩的特殊需求，以便我們多加注意"
                  v-model="form.message"
                ></textarea>
              </div>
              <div class="step d-flex justify-content-between">
                <div class="text-start">
                  <router-link class="btn btn-outline-primary me-3" to="/cart">
                    上一步
                  </router-link>
                </div>
                <div class="text-end">
                  <button
                    :disabled="
                      Object.keys(errors).length > 0 ||
                      cartData.carts.length === 0
                    "
                    type="submit"
                    class="btn btn-primary"
                  >
                    送出訂單
                  </button>
                </div>
              </div>
            </v-form>
          </div>
        </div>
      </div>
      <!-- 轉換頁面 -->
    </div>
  </div>
</template>

<script>
import alert from "@/methods/mixins/alert";
import emitter from "@/methods/emitter";

export default {
  data() {
    return {
      coupon: "", // 折扣碼
      couponTotal: "",
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
          pay: "",
        },
        message: "",
      },
      isLoading: false,
      fullPage: true,
      isLoadingItem: "",
      products: [],
      cartData: {
        carts: [],
      },
      orderData: {
        orderId: "",
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
        this.checkCart();
        this.isLoading = false;
      });
    },
    // 提交優惠券
    postCoupon() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon,
      };
      this.$http
        .post(url, { data: coupon })
        .then((res) => {
          if (res.data.success) {
            this.alertCouponSuccess();
            this.couponTotal = res.data.data.final_total;
            this.getCart();
            this.isLoading = false;
          } else {
            this.alertCouponFalse();
            this.isLoading = false;
            this.coupon = "";
          }
        })
        .catch(() => {
          this.alertCouponFalse();
          this.isLoading = false;
          this.coupon = "";
        });
    },
    //清空優惠券
    resetCoupon() {},
    // 確認購物車有東西
    checkCart() {
      if (this.cartData.carts.length === 0) {
        this.alertRemindCart();
        this.$router.push("/products");
      }
    },
    // 送出表單
    createOrder() {
      const order = this.form;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.$http
        .post(url, { data: order })
        .then((res) => {
          console.log("上傳成功", res);
          this.$refs.form.resetForm();
          // 1.存入訂單id
          this.orderData.orderId = res.data.orderId;
          // 2.完成付款
          const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderData.orderId}`;
          this.$http.post(url).then(() => {
            this.alertCreateOrder(
              this.orderData.orderId,
              this.form.user.name,
              this.form.user.pay,
              this.cartData.final_total
            );
          });
          emitter.emit("get-cart");
          this.$router.push(`/complete`);
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>
