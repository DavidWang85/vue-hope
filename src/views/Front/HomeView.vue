<template>
  <div class="front-banner relative">
    <div class="absolute front-title">
      <p>期許在這裡 你我都找到新希望</p>
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
    <div class="row flex-md-row-reverse flex-column mt-5">
      <div class="col-md-6 pe-md-0 pe-lg-5">
        <div class="img-fluid rounded idea-bg idea-bg-space"></div>
      </div>
      <div
        class="col-md-6 d-flex text-primary flex-column justify-content-center align-items-end mt-md-0 mt-3"
      >
        <h3 class="fw-bold text-success">在這裡 我們打造無障礙的空間</h3>
        <h5
          class="font-weight-normal text-muted mt-2 text-sm-start text-md-end"
        >
          透過長照空間社區化
          <br />
          讓家中長輩不再受限於家中
        </h5>
      </div>
    </div>
    <div class="row flex-md-row flex-column mt-5">
      <div class="col-md-6 ps-md-0 ps-lg-5">
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
  <div class="container mt-7">
    <div class="row justify-content-center">
      <div class="col-md-4 text-center">
        <h2 class="text-primary text-stress fw-bold">服務總覽</h2>
        <h5 class="font-weight-normal text-center lh-base text-muted">
          因應不同家庭、經濟狀況
          <br />
          寶愛社區提供了各式服務
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
      <div class="row row-cols-1 row-cols-md-2 mt-5">
        <div class="col mb-4">
          <div
            class="card text-center border-light shadow"
            style="position-relative position-relative"
          >
            <div class="pic">
              <a
                href="https://bootstrap5.hexschool.com/docs/5.1/components/card/"
              >
                <img
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1hbnNpb25zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                  class="card-img-top"
                  alt="..."
                />
                <h2 class="text">普通房型</h2>
              </a>
            </div>
            <div class="card-body" style="height: 80px">
              <p class="card-text">提供能自理起居之長輩媲美五星級飯店的生活</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div
            class="card text-center border-light shadow"
            style="position-relative position-relative"
          >
            <div class="pic">
              <a
                href="https://bootstrap5.hexschool.com/docs/5.1/components/card/"
              >
                <img
                  src="https://media.istockphoto.com/photos/shot-of-a-young-male-nurse-helping-an-elderly-patient-stand-picture-id1316049546?b=1&k=20&m=1316049546&s=170667a&w=0&h=XYoo1Jw0PgvQeq9pLb7GbvuRGOBzeY2G9G3w54eRXhc="
                  class="card-img-top"
                  alt="..."
                />
                <h2 class="text">護理房型</h2>
              </a>
            </div>
            <div class="card-body" style="height: 80px">
              <p class="card-text">提供無法自理之長輩最完善的醫療照護</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div
            class="card text-center border-light shadow"
            style="position-relative position-relative"
          >
            <div class="pic">
              <a
                href="https://bootstrap5.hexschool.com/docs/5.1/components/card/"
              >
                <img
                  src="https://media.istockphoto.com/photos/senior-couple-hugging-in-a-nursing-home-a-happy-senior-couple-next-picture-id1358965099?b=1&k=20&m=1358965099&s=170667a&w=0&h=TxkS2G2YnC0sA0upB0b_1c4yZfPmpywA_Q6ql1fd-Zs="
                  class="card-img-top"
                  alt="..."
                />
                <h2 class="text">日照課程</h2>
              </a>
            </div>
            <div class="card-body" style="height: 80px">
              <p class="card-text">提供家中長輩在一天中擁有精彩、有趣的課程</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div
            class="card text-center border-light shadow"
            style="position-relative position-relative"
          >
            <div class="pic">
              <a
                href="https://bootstrap5.hexschool.com/docs/5.1/components/card/"
              >
                <img
                  src="https://media.istockphoto.com/photos/business-meeting-on-video-call-during-covid19-lockdown-picture-id1300311961?b=1&k=20&m=1300311961&s=170667a&w=0&h=NQ5Y3kvY_nBro1M1pNMzaV3l9oohkeg5o6qEtcFSD-A="
                  class="card-img-top"
                  alt="..."
                />
                <h2 class="text">其他服務</h2>
              </a>
            </div>
            <div class="card-body" style="height: 80px">
              <p class="card-text">
                打破傳統長照中心思維，提供更多元的照護服務
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-secondary mt-7">
    <div class="container">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row justify-content-center py-7">
              <div class="col-md-8 d-flex">
                <img
                  src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  class="rounded-circle me-5"
                  style="width: 160px; height: 160px; object-fit: cover"
                />
                <div class="d-flex flex-column">
                  <p class="h5 text-primary">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat.”
                  </p>
                  <p class="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center py-7">
              <div class="col-md-8 d-flex">
                <img
                  src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  class="rounded-circle me-5"
                  style="width: 160px; height: 160px; object-fit: cover"
                />
                <div class="d-flex flex-column">
                  <p class="h5">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat.”
                  </p>
                  <p class="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center py-7">
              <div class="col-md-8 d-flex">
                <img
                  src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  class="rounded-circle me-5"
                  style="width: 160px; height: 160px; object-fit: cover"
                />
                <div class="d-flex flex-column">
                  <p class="h5">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat.”
                  </p>
                  <p class="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
  <div class="container my-7">
    <div class="row">
      <div class="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
          style="width: 48px; height: 48px; object-fit: cover"
        />
        <h4 class="mt-4">Lorem ipsum</h4>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
      </div>
      <div class="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
          style="width: 48px; height: 48px; object-fit: cover"
        />
        <h4 class="mt-4">Lorem ipsum</h4>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
      </div>
      <div class="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
          style="width: 48px; height: 48px; object-fit: cover"
        />
        <h4 class="mt-4">Lorem ipsum</h4>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
      </div>
    </div>
  </div>
  <div class="container mt-7">
    <div class="row flex-md-row-reverse flex-column">
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1526038335545-4b96864eaee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80
          alt="
          class="img-fluid"
        />
      </div>
      <div
        class="col-md-6 d-flex text-primary flex-column justify-content-center mt-md-0 mt-3"
      >
        <div class="input-group mb-0 mt-4">
          <input type="text" class="form-control rounded-0" placeholder="" />
          <div class="input-group-append">
            <button class="btn btn-dark rounded-0" type="button" id="search">
              Lorem ipsum
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-secondary py-7">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 text-center">
          <h2 class="fs-1 fw-bold">Lorem ipsum</h2>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod.
          </p>
          <button class="btn btn-dark mt-4 rounded-0">Lorem ipsum</button>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row flex-md-row-reverse flex-column">
      <div class="col-md-6">
        <img
          src="https://images.unsplash.com/photo-1526038335545-4b96864eaee7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80
          alt="
          class="img-fluid"
        />
      </div>
      <div
        class="col-md-6 d-flex flex-column justify-content-center mt-md-0 mt-3"
      >
        <h2 class="fw-bold">Lorem ipsum dolor sit</h2>
        <h5 class="font-weight-normal text-muted mt-2">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor
        </h5>
        <div class="input-group mb-0 mt-4">
          <input type="text" class="form-control rounded-0" placeholder="" />
          <div class="input-group-append">
            <button class="btn btn-dark rounded-0" type="button" id="search">
              Lorem ipsum
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-6 mt-md-4">
        <div class="card border-0 mb-4 position-relative position-relative">
          <img
            src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
            class="card-img-top rounded-0"
            alt="..."
          />
          <div class="card-body p-0">
            <h4 class="mb-0 mt-4">Lorem ipsum</h4>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text text-muted mb-0 w-75">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
              </p>
              <button class="btn btn-outline-dark rounded-0 text-nowrap">
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-md-4">
        <div class="card border-0 mb-4 position-relative position-relative">
          <img
            src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
            class="card-img-top rounded-0"
            alt=""
          />
          <div class="card-body p-0">
            <h4 class="mb-0 mt-4">Lorem ipsum</h4>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text text-muted mb-0 w-75">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
              </p>
              <button class="btn btn-outline-dark rounded-0 text-nowrap">
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-md-4">
        <div class="card border-0 mb-4 position-relative position-relative">
          <img
            src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
            class="card-img-top rounded-0"
            alt=""
          />
          <div class="card-body p-0">
            <h4 class="mb-0 mt-4">Lorem ipsum</h4>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text text-muted mb-0 w-75">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
              </p>
              <button class="btn btn-outline-dark rounded-0 text-nowrap">
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 mt-md-4">
        <div class="card border-0 mb-4 position-relative position-relative">
          <img
            src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
            class="card-img-top rounded-0"
            alt=""
          />
          <div class="card-body p-0">
            <h4 class="mb-0 mt-4">Lorem ipsum</h4>
            <div class="d-flex justify-content-between mt-3">
              <p class="card-text text-muted mb-0 w-75">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
              </p>
              <button class="btn btn-outline-dark rounded-0 text-nowrap">
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-light mt-7">
    <div class="container">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row justify-content-center py-7">
              <div class="col-md-8 d-flex">
                <img
                  src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  class="rounded-circle me-5"
                  style="width: 160px; height: 160px; object-fit: cover"
                />
                <div class="d-flex flex-column">
                  <p class="h5">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat.”
                  </p>
                  <p class="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center py-7">
              <div class="col-md-8 d-flex">
                <img
                  src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  class="rounded-circle me-5"
                  style="width: 160px; height: 160px; object-fit: cover"
                />
                <div class="d-flex flex-column">
                  <p class="h5">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat.”
                  </p>
                  <p class="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center py-7">
              <div class="col-md-8 d-flex">
                <img
                  src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                  class="rounded-circle me-5"
                  style="width: 160px; height: 160px; object-fit: cover"
                />
                <div class="d-flex flex-column">
                  <p class="h5">
                    “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat.”
                  </p>
                  <p class="mt-auto text-muted">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
  <div class="container my-7">
    <div class="row">
      <div class="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
          style="width: 48px; height: 48px; object-fit: cover"
        />
        <h4 class="mt-4">Lorem ipsum</h4>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
      </div>
      <div class="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
          style="width: 48px; height: 48px; object-fit: cover"
        />
        <h4 class="mt-4">Lorem ipsum</h4>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
      </div>
      <div class="col-md-4">
        <img
          src="https://images.unsplash.com/photo-1548689816-c399f954f3dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
          style="width: 48px; height: 48px; object-fit: cover"
        />
        <h4 class="mt-4">Lorem ipsum</h4>
        <p class="text-muted">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
      </div>
    </div>
  </div>
  <div class="bg-light py-7">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-4 text-center">
          <h3>Lorem ipsum</h3>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod.
          </p>
          <button class="btn btn-dark mt-4 rounded-0">Lorem ipsum</button>
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
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Autoplay],
    };
  },
};
</script>
