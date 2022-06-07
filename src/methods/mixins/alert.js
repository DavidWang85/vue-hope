import Swal from "sweetalert2";

export default {
  methods: {
    // 加入購物車
    alertAddToCart(name) {
      Swal.fire({
        toast: true, //啟用吐司框
        title: `商品 ${name} <br>已成功加入購物車`,
        position: "top-end", //位置
        timer: 2000, //倒數計時
        showConfirmButton: false,
        // color: "#663224",
        icon: "success",
      });
    },
    // 移除單一購物車
    alertRemoveCartItem(name) {
      Swal.fire({
        toast: true, //啟用吐司框
        title: `商品 ${name} 以刪除`,
        position: "top-end", //位置
        timer: 1500, //倒數計時
        showConfirmButton: false,
        // color: "#663224",
        icon: "info",
      });
    },
    // 清空購物車
    alertRemoveAllCart() {
      Swal.fire({
        toast: true, //啟用吐司框
        title: "購物車已清空",
        position: "top-end", //位置
        timer: 2000, //倒數計時
        showConfirmButton: false,
        // color: "#663224",
        icon: "info",
      });
    },
    // 購物車產品更新
    alertUpdateCartItem() {
      Swal.fire({
        toast: true, //啟用吐司框
        title: `商品數量已更新`,
        position: "top-end", //位置
        timer: 2000, //倒數計時
        showConfirmButton: false,
        // color: "#663224",
        icon: "success",
      });
    },
    //購物車沒東西
    alertRemindCart() {
      Swal.fire({
        title: `購物車沒商品喔`,
        text: `趕快來選擇最適合的服務吧`,
        timer: 1500, //倒數計時
        showConfirmButton: false,
        // color: "#663224",
        icon: "warning",
      });
    },
    // 訂單建立完成
    alertCreateOrder(number, name, pay, money) {
      Swal.fire({
        title: `訂單建立完成`,
        html: `訂單編號：${number}<br>訂購人：${name}<br>付款方式：${pay}<br>金額：${money}`,
        showConfirmButton: true,
        // color: "#663224",
        icon: "success",
        confirmButtonColor: "#008000",
      });
    },
    // 優惠券成功
    alertCouponSuccess() {
      Swal.fire({
        toast: true, //啟用吐司框
        title: `已成功套用折扣碼`,
        position: "top-end", //位置
        timer: 2000, //倒數計時
        showConfirmButton: false,
        icon: "success",
      });
    },
    // 優惠券失敗
    alertCouponFalse() {
      Swal.fire({
        toast: true, //啟用吐司框
        title: `你可能打錯折扣碼<br>或者折扣碼已過期囉`,
        position: "top-end", //位置
        timer: 4000, //倒數計時
        showConfirmButton: false,
        icon: "error",
      });
    },
    // 加入典藏
    alertAddToCollect(name) {
      Swal.fire({
        toast: true, //啟用吐司框
        title: `商品 ${name} 已加入收藏`,
        position: "top-end", //位置
        timer: 2000, //倒數計時
        showConfirmButton: false,
        icon: "success",
      });
    },
    // 移除典藏
    alertRemoveCollect(name) {
      Swal.fire({
        toast: true, //啟用吐司框
        title: `商品 ${name} 已移除收藏`,
        position: "top-end", //位置
        timer: 1500, //倒數計時
        showConfirmButton: false,
        icon: "info",
      });
    },
  },
};
