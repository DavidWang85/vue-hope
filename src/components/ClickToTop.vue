<template>
  <div>
    <div v-show="top" class="to-top" @click="scroll">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-arrow-up-circle-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();
export default {
  data() {
    return {
      top: false, //控制显隐
    };
  },
  name: "SmoothscrollPolyfill_71",
  methods: {
    scroll() {
      window.scroll({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      // 滚动事件
      let html = document.documentElement;
      if (html.scrollTop >= 100) {
        //当滚动高度大于等于100返回顶部出现
        this.top = true;
      } else {
        this.top = false;
      }
    });
  },
};
</script>
