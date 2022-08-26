<template>
  <FrontNavbar></FrontNavbar>
  <router-view />
  <ClickToTop></ClickToTop>
  <div id="fb-root"></div>
  <!-- Your 洽談外掛程式 code -->
  <div id="fb-customer-chat" class="fb-customerchat"></div>
  <FrontFooter></FrontFooter>
</template>

<script>
import FrontNavbar from "@/components/FrontNavbar.vue";
import FrontFooter from "@/components/FrontFooter.vue";
import ClickToTop from "@/components/ClickToTop.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  methods: {
    init() {
      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: "v14.0",
        });
      };
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
      FB.CustomerChat.showDialog();
    },
  },
  components: {
    FrontNavbar,
    FrontFooter,
    ClickToTop,
  },
  created() {
    AOS.init({
      duration: 500,
    });
  },
  mounted() {
    // 要用網頁時再開啟
    const chatbox = document.getElementById("fb-customer-chat");
    chatbox.setAttribute("page_id", `${process.env.VUE_APP_FB_ID}`);
    chatbox.setAttribute("attribution", "biz_inbox");
    this.init();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@600&display=swap");
</style>
