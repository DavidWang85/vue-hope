"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[261],{5679:function(t,s,i){function e(t){return{all:t=t||new Map,on:function(s,i){var e=t.get(s);e?e.push(i):t.set(s,[i])},off:function(s,i){var e=t.get(s);e&&(i?e.splice(e.indexOf(i)>>>0,1):t.set(s,[]))},emit:function(s,i){var e=t.get(s);e&&e.slice().map((function(t){t(i)})),(e=t.get("*"))&&e.slice().map((function(t){t(s,i)}))}}}i.d(s,{Z:function(){return c}});const l=e();var c=l},4261:function(t,s,i){i.r(s),i.d(s,{default:function(){return W}});var e=i(6252),l=i(3577);const c=(0,e._)("div",{class:"loadingio-spinner-dual-ball-eq2qwqnc1x"},[(0,e._)("div",{class:"ldio-tw1s1a7kdy9"},[(0,e._)("div"),(0,e._)("div"),(0,e._)("div")])],-1),a=(0,e.uE)('<div class="pages-banner"><img src="https://images.unsplash.com/photo-1508963493744-76fce69379c0?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1770" alt=""><h2 class="pages-banner-title">收藏清單</h2></div><div class="frontcart-progress-list container"><div class="mt-5"><div class="frontcart-progress-title d-flex justify-content-center align-items-center"><h3 class="frontcart-progress-title-fir">收藏清單</h3></div></div></div>',2),o={class:"container"},n={key:0},r={class:"mt-4"},d={class:"table align-middle"},u=(0,e._)("thead",null,[(0,e._)("tr",{class:"row"},[(0,e._)("th",{class:"col-2 d-none d-md-block"},"圖片"),(0,e._)("th",{class:"col-2"},"名稱"),(0,e._)("th",{class:"col-2"},"價格"),(0,e._)("th",{class:"col-3"}),(0,e._)("th",{class:"col-3"})])],-1),p={class:"col-2 d-none d-md-block"},h={class:"col-2"},g={class:"col-2"},f={class:"col-3"},m=["onClick"],v={class:"col-3"},_=["onClick"],b=(0,e._)("i",{class:"bi bi-trash3-fill"},null,-1),w=(0,e.Uk)("移除收藏 "),x=[b,w],k={key:1},y={class:"text-center"},C=(0,e._)("div",{class:"d-flex justify-content-center align-items-center mb-5"},[(0,e._)("img",{class:"rounded-circle",src:"https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",alt:"",style:{width:"250px",height:"250px"}}),(0,e._)("p",{class:"ms-4"},"你還沒有收藏喜歡的服務，趕快到服務列表收藏吧！")],-1),L=(0,e.Uk)(" 回到服務列表 "),D={key:2,class:"d-flex justify-content-between"},H={class:"text-start"},j=(0,e.Uk)(" 回到服務列表 ");function q(t,s,i,b,w,q){const M=(0,e.up)("LoadingPlugin"),O=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(M,{active:w.isLoading,"is-full-page":w.fullPage,"z-index":1060},{default:(0,e.w5)((()=>[c])),_:1},8,["active","is-full-page"]),a,(0,e._)("div",o,[this.collectsList.length?((0,e.wg)(),(0,e.iD)("div",n,[(0,e._)("div",r,[(0,e._)("table",d,[u,(0,e._)("tbody",null,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(w.collectsList,(t=>((0,e.wg)(),(0,e.iD)("tr",{class:"row",key:t.id},[(0,e._)("td",p,[(0,e._)("div",{class:"collect-img",style:(0,l.j5)([{"background-size":"cover","background-position":"center"},{backgroundImage:`url(${t.imageUrl})`}])},null,4)]),(0,e._)("td",h,[(0,e._)("div",null,(0,l.zw)(t.title),1)]),(0,e._)("td",g,[(0,e._)("div",null,"NT"+(0,l.zw)(t.price)+" / "+(0,l.zw)(t.unit),1)]),(0,e._)("td",f,[(0,e._)("button",{onClick:s=>q.addToCart(t.id,t.title),class:"btn btn-primary px-lg-2 m-0",type:"button"}," 加入購物車 ",8,m)]),(0,e._)("td",v,[(0,e._)("button",{class:"btn btn-outline-success px-lg-2 m-0",onClick:s=>q.removeCollect(t.id,t.title),type:"btn"},x,8,_)])])))),128))])])])])):((0,e.wg)(),(0,e.iD)("div",k,[(0,e._)("div",y,[C,(0,e._)("div",null,[(0,e.Wm)(O,{class:"btn btn-outline-primary me-3",to:"/products"},{default:(0,e.w5)((()=>[L])),_:1})])])])),this.collectsList.length?((0,e.wg)(),(0,e.iD)("div",D,[(0,e._)("div",H,[(0,e.Wm)(O,{class:"btn btn-outline-primary me-3",to:"/products"},{default:(0,e.w5)((()=>[j])),_:1})])])):(0,e.kq)("",!0)])],64)}var M=i(1608),O=i(5679),z={data(){return{isLoading:!1,fullPage:!0,isLoadingLocal:!1,isLoadingItem:"",products:[],cartData:{carts:[]},collect:JSON.parse(localStorage.getItem("collect"))||[],collectsList:[]}},mixins:[M.Z],methods:{getProducts(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/v2/api/david-frontend/products/all";this.$http.get(t).then((t=>{this.products=t.data.products,console.log("get",t),this.getCart(),this.getCollects(),this.isLoading=!1}))},getCart(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/v2/api/david-frontend/cart";this.$http.get(t).then((t=>{this.cartData=t.data.data,O.Z.emit("get-cart"),this.isLoading=!1}))},addToCart(t,s,i=1){const e={product_id:t,qty:i},l="https://vue3-course-api.hexschool.io/v2/api/david-frontend/cart";this.$http.post(l,{data:e}).then((t=>{console.log("購物車",t),this.getCart(),this.isLoadingItem=!1,this.alertAddToCart(s)}))},getCollects(){this.collectsList=this.products.filter((t=>this.collect.indexOf(t.id)>-1))},removeCollect(t,s){const i=this.collect.indexOf(t);-1!==i&&(this.collect.splice(i,1),localStorage.setItem("collect",JSON.stringify(this.collect)),this.getCollects(),this.alertRemoveCollect(s))},goCheckOut(){this.$router.push("/checkout")}},mounted(){this.getProducts()}},I=i(3744);const P=(0,I.Z)(z,[["render",q]]);var W=P}}]);
//# sourceMappingURL=261.722ea663.js.map