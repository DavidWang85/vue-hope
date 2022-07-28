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
      src="https://images.unsplash.com/photo-1597799029342-ab2546a93ec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      alt=""
    />
    <h2 class="pages-banner-title">關於我們</h2>
  </div>
  <div class="frontcart-progress-list container">
    <div class="mt-5">
      <div
        class="frontcart-progress-title d-flex justify-content-center align-items-center"
      >
        <h3 class="frontcart-progress-title-fir">社區初衷</h3>
      </div>
    </div>
    <div class="frontcart-progress-content mt-5">
      <img
        src="https://images.unsplash.com/photo-1641135309825-4d703d0225a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
      />
      <div class="">
        <p>
          創辦人有鑒於台灣老年人口不斷增長，許多長輩在晚年生活因為生活圈縮小只能待在家中，或者因為行動不動失去享受生活的權利。在民國100年建立耆望社區，希望透過打造一個無障礙、樂齡的社區，讓長輩們擁有快樂的退休人生。
        </p>
        <p>
          耆望社區擁有全台最多樣化的環境與設施，更擁有全區免費接駁車，讓家中長輩每天都能探索與享受，不再受限於老化帶來的不便，我們希望透過改變長照環境來改善台灣因著高齡化所帶來的家庭與社會問題。
        </p>
      </div>
    </div>
  </div>
  <div class="history bg-light">
    <div class="frontcart-progress-list container">
      <div class="mt-5">
        <div
          class="frontcart-progress-title d-flex justify-content-center align-items-center"
        >
          <h3 class="frontcart-progress-title-fir mt-5">社區歷史</h3>
        </div>
      </div>
      <div class="mt-5 pb-5">
        <div class="history-content rounded">
          <p>
            建立於民國100年，耆望社區(以下簡稱本社區)占地約2440坪，是首間結合住宅、醫院、長照中心之長照社區，我們希望透過建立一個完善的無障礙社區，讓長輩在退休後也能擁有便利的生活，不會因為身體上的限制就失去行動的自主權。
          </p>
          <p>
            於民國101年，本社區完成一般房型住宅的建設，讓能自主行動之長輩能來此享受退休生活，生活方便程度與過去在家中無異，但還能免費享受本社區內所有其他服務。
          </p>
          <p>
            於民國101同年，本社區完成耆望醫院的建設，是一間主打老人治療的老人醫院，提供無法自主行動之長輩24小時專業的醫療病房，耆望醫院提供同縣市長輩(65歲以上)治療費用九折折扣，而入住本社區之長輩享有每年健檢乙次之服務及治療費用五折折扣。
          </p>
          <p>
            於民國103年，本社區完成長照中心的建設，提供需要日照服務之長輩，長照中心擁有最豐富的師資、課程及設備，讓長輩們的退休生活永遠不無聊。
          </p>
          <p>
            於民國108年完成本社區所有公共設施之交通連接，並提供免費接駁車服務，讓長輩在本社區暢行無阻。
          </p>
          <p>
            於民國110年，本社區因應科技化與疫情之侵襲設立視訊關懷服務，讓長輩獨自在家時也能享受本社區溫暖的關心，在視訊關懷時也會特別詢問身體狀況，讓兒女們能放心。
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="frontcart-progress-list container">
    <div class="mt-5">
      <div
        class="frontcart-progress-title d-flex justify-content-center align-items-center"
      >
        <h3 class="frontcart-progress-title-fir">聯絡方式</h3>
      </div>
    </div>
    <div
      class="mt-5 contact-content d-flex justify-content-between align-items-center"
    >
      <div class="contact-map text-center">
        <div id="map" class="map"></div>
      </div>
      <div class="contact-data">
        <h4 class="h5">聯絡資料</h4>
        <p><span class="text-primary">電話：</span>0912345678</p>
        <p><span class="text-primary">時間：</span>週間 6:00 ~ 20:00</p>
        <p><span class="text-primary">地址：</span>台中市太平區耆望路129號</p>
      </div>
    </div>
  </div>
</template>

<script>
import "@vue-leaflet/vue-leaflet";
import { Icon } from "leaflet";
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
import L from "leaflet";

export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    useMap() {
      this.isLoading = true;
      let map = L.map("map").setView([24.1183223, 120.7112199], 15);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
      }).addTo(map);

      let marker = L.marker([24.1183223, 120.7112199]);
      marker
        .bindPopup("<p class='text-primary'>耆望社區 在這裡～</p>", {
          closeButton: false,
        })
        .addTo(map)
        .openPopup();
      this.isLoading = false;
    },
  },
  mounted() {
    this.useMap();
  },
};
</script>

<style scoped>
@import "leaflet/dist/leaflet.css";
</style>
