<template>
  <div class="front-banner relative">
    <div class="absolute front-title text-center rounded">
      <p class="title-head">創造最美長照社區</p>
      <p class="front-title-subtitle">期許在這裡 你我都找到新的希望</p>
      <router-link
        class="btn btn-sm-lg btn-secondary animate__animated animate__bounce animate__infinite animate__slow"
        to="/products"
        >查看服務</router-link
      >
    </div>
    <Swiper
      :effect="'fade'"
      :modules="modules"
      :speed="2000"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      class="fullbanner"
    >
      <Swiper-slide class="fullbanner-img fullbanner-img-community">
      </Swiper-slide>
      <Swiper-slide class="fullbanner-img fullbanner-img-mansion">
      </Swiper-slide>
      <Swiper-slide class="fullbanner-img fullbanner-img-park"> </Swiper-slide>
    </Swiper>
  </div>
  <div class="container py-7">
    <h2 class="text-primary text-center text-stress fw-bold">核心理念</h2>
    <div
      class="row flex-md-row-reverse flex-column mt-5 animate__animated animate__fadeInLeft"
    >
      <div class="col-md-6">
        <div class="img-fluid rounded idea-bg idea-bg-space"></div>
      </div>
      <div
        class="col-md-6 d-flex text-primary flex-column justify-content-center align-items-end mt-md-0 mt-3"
      >
        <h3 class="fw-bold text-success">在這裡 我們打造無障礙的空間</h3>
        <h5
          class="font-weight-normal text-muted mt-2 text-sm-start text-md-end red"
        >
          透過長照空間社區化
          <br />
          讓家中長輩不再受限於家中
        </h5>
      </div>
    </div>
    <div
      class="row flex-md-row flex-column mt-5 animate__animated animate__fadeInRight"
    >
      <div class="col-md-6">
        <div class="img-fluid rounded idea-bg idea-bg-takecare"></div>
      </div>
      <div
        class="col-md-6 d-flex text-primary flex-column justify-content-center mt-md-0 mt-3"
      >
        <h3 class="fw-bold text-success">在這裡 我們用心關懷</h3>
        <h5 class="font-weight-normal text-muted mt-2">
          年歲是生命的冠冕
          <br />
          我們用照顧自己長輩的心來照顧每一位長者
        </h5>
      </div>
    </div>
  </div>
  <div class="bg-light">
    <div class="container py-7 toabout">
      <div class="row justify-content-center">
        <div class="col-md-4 text-center py-7 toabout-content">
          <p class="h5 text-dark">不再讓年紀成為你熱情生活的阻力</p>
          <router-link
            type="button"
            class="btn btn-outline-primary mt-3"
            to="/about"
            >關於我們</router-link
          >
        </div>
      </div>
    </div>
  </div>
  <!-- 舊的 -->
  <div class="bg-light">
    <div class="container py-7">
      <div class="row justify-content-center">
        <div class="col-md-4 text-center">
          <h2 class="text-primary text-stress fw-bold">服務總覽</h2>
          <h5 class="font-weight-normal text-center lh-base text-muted">
            因應不同家庭、經濟狀況
            <br />
            耆望社區提供了各式服務
            <br />
            相信總有一項能符合您的期待
          </h5>
          <router-link
            type="button"
            class="btn btn-outline-primary mt-3"
            to="/products"
          >
            前往了解
          </router-link>
        </div>
        <ul class="row row-cols-1 row-cols-md-2 mt-5 uli-reset px-0">
          <li class="col mb-4 uli-reset">
            <div
              class="card text-center border-light shadow"
              style="position-relative position-relative"
            >
              <div class="pic">
                <router-link
                  class="pic-link"
                  :to="{ path: '/products', query: { category: '一般房型' } }"
                >
                  <div class="card-img-top pic-link-img">
                    <img
                      src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1hbnNpb25zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <h2 class="text mt-3">一般房型</h2>
                  <div class="card-body" style="height: 80px">
                    <p class="card-text">
                      提供能自理起居之長輩媲美五星級飯店的生活
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </li>
          <li class="col mb-4 uli-reset">
            <div
              class="card text-center border-light shadow"
              style="position-relative position-relative"
            >
              <div class="pic">
                <router-link
                  class="pic-link"
                  :to="{ path: '/products', query: { category: '護理房型' } }"
                >
                  <div class="card-img-top pic-link-img">
                    <img
                      src="https://media.istockphoto.com/photos/shot-of-a-young-male-nurse-helping-an-elderly-patient-stand-picture-id1316049546?b=1&k=20&m=1316049546&s=170667a&w=0&h=XYoo1Jw0PgvQeq9pLb7GbvuRGOBzeY2G9G3w54eRXhc="
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <h2 class="text mt-3">護理房型</h2>
                  <div class="card-body" style="height: 80px">
                    <p class="card-text">提供無法自理之長輩最完善的醫療照護</p>
                  </div>
                </router-link>
              </div>
            </div>
          </li>
          <li class="col mb-4 uli-reset">
            <div
              class="card text-center border-light shadow"
              style="position-relative position-relative"
            >
              <div class="pic">
                <router-link
                  class="pic-link"
                  :to="{ path: '/products', query: { category: '日照' } }"
                >
                  <div class="card-img-top pic-link-img">
                    <img
                      src="https://media.istockphoto.com/photos/senior-couple-hugging-in-a-nursing-home-a-happy-senior-couple-next-picture-id1358965099?b=1&k=20&m=1358965099&s=170667a&w=0&h=TxkS2G2YnC0sA0upB0b_1c4yZfPmpywA_Q6ql1fd-Zs="
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <h2 class="text mt-3">日照課程</h2>
                  <div class="card-body" style="height: 80px">
                    <p class="card-text">
                      提供家中長輩在一天中擁有精彩、有趣的課程
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </li>
          <li class="col mb-4 uli-reset">
            <div
              class="card text-center border-light shadow"
              style="position-relative position-relative"
            >
              <div class="pic">
                <router-link
                  class="pic-link"
                  :to="{ path: '/products', query: { category: '家訪' } }"
                >
                  <div class="card-img-top pic-link-img">
                    <img
                      src="https://media.istockphoto.com/photos/business-meeting-on-video-call-during-covid19-lockdown-picture-id1300311961?b=1&k=20&m=1300311961&s=170667a&w=0&h=NQ5Y3kvY_nBro1M1pNMzaV3l9oohkeg5o6qEtcFSD-A="
                      class="card-img-top"
                      alt="..."
                    />
                  </div>
                  <h2 class="text mt-3">其他服務</h2>
                  <div class="card-body" style="height: 80px">
                    <p class="card-text">
                      打破傳統長照中心思維，提供多元的照護服務
                    </p>
                  </div>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="py-7 discount">
    <div class="container py-4">
      <div class="row justify-content-center">
        <div class="col-md-4 text-center discount-content">
          <h2 class="text-primary text-stress fw-bold">獲取優惠折扣</h2>
          <div class="input-group my-3 d-flex justify-content-center">
            <v-form ref="form" v-slot="{ errors }">
              <div class="mb-3">
                <label for="email" class="form-label fw-bold text-primary"
                  >註冊信箱獲得折扣碼吧！</label
                >
                <v-field
                  v-if="!this.coupon"
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入電子郵件"
                  rules="required|email"
                  v-model="this.mail"
                ></v-field>
                <error-message
                  name="email"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="text-success h3" v-show="this.coupon">
                優惠折扣碼： {{ this.coupon }}
              </div>
              <button
                v-if="!this.coupon"
                type="submit"
                class="btn btn-primary"
                :class="{ disabled: Object.keys(errors).length > 0 }"
                @click.prevent="getCoupon"
              >
                送出
              </button>
            </v-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Autoplay } from "swiper";
// css樣式
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "animate.css";

export default {
  data() {
    return {
      mail: "",
      coupon: "",
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Autoplay],
    };
  },
  methods: {
    getCoupon() {
      if (this.mail) {
        this.coupon = "hope";
      }
    },
  },
};
</script>
