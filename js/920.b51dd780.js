"use strict";(self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[]).push([[920],{5920:function(l,t,e){e.r(t),e.d(t,{default:function(){return R}});var d=e(6252),a=e(3577),s=e(9963);const n=(0,d._)("div",{class:"loadingio-spinner-dual-ball-eq2qwqnc1x"},[(0,d._)("div",{class:"ldio-tw1s1a7kdy9"},[(0,d._)("div"),(0,d._)("div"),(0,d._)("div")])],-1),i={class:"container-fluid"},r={class:"mt-4"},u={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},o={class:"modal-dialog modal-xl",role:"document"},_={class:"modal-content border-0"},c=(0,d._)("div",{class:"modal-header bg-dark text-white"},[(0,d._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,d._)("span",null,"訂單細節")]),(0,d._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),p={class:"modal-body"},m={class:"row"},h={class:"col-md-4"},b=(0,d._)("h3",null,"用戶資料",-1),v={class:"table"},w={key:0},g=(0,d._)("th",{style:{width:"100px"}},"姓名",-1),f=(0,d._)("th",null,"Email",-1),y=(0,d._)("th",null,"電話",-1),k=(0,d._)("th",null,"地址",-1),x={class:"col-md-8"},O=(0,d._)("h3",null,"訂單細節",-1),D={class:"table"},z=(0,d._)("th",{style:{width:"100px"}},"訂單編號",-1),C=(0,d._)("tr",null,[(0,d._)("th",null,"下單時間")],-1),q=(0,d._)("th",null,"付款時間",-1),L={key:0},M={key:1},P=(0,d._)("th",null,"付款狀態",-1),H={key:0,class:"text-success"},Y={key:1,class:"text-muted"},$=(0,d._)("tr",null,[(0,d._)("th",null,"總金額"),(0,d._)("td")],-1),j=(0,d._)("h3",null,"選購商品",-1),E={class:"table"},K=(0,d._)("thead",null,[(0,d._)("tr")],-1),U=(0,d._)("td",{class:"text-end"},null,-1),V={class:"d-flex justify-content-end"},W={class:"form-check"},Z={class:"form-check-label",for:"flexCheckDefault"},A={key:0},B={key:1},F={class:"modal-footer"},G=(0,d._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function I(l,t,e,I,J,N){const Q=(0,d.up)("LoadingPlugin");return(0,d.wg)(),(0,d.iD)(d.HY,null,[(0,d.Wm)(Q,{active:J.isLoading,"is-full-page":J.fullPage,"z-index":1060},{default:(0,d.w5)((()=>[n])),_:1},8,["active","is-full-page"]),(0,d._)("div",i,[(0,d._)("div",r,[(0,d._)("div",u,[(0,d._)("div",o,[(0,d._)("div",_,[c,(0,d._)("div",p,[(0,d._)("div",m,[(0,d._)("div",h,[b,(0,d._)("table",v,[J.tempOrder.user?((0,d.wg)(),(0,d.iD)("tbody",w,[(0,d._)("tr",null,[g,(0,d._)("td",null,(0,a.zw)(J.tempOrder.user.name),1)]),(0,d._)("tr",null,[f,(0,d._)("td",null,(0,a.zw)(J.tempOrder.user.email),1)]),(0,d._)("tr",null,[y,(0,d._)("td",null,(0,a.zw)(J.tempOrder.user.tel),1)]),(0,d._)("tr",null,[k,(0,d._)("td",null,(0,a.zw)(J.tempOrder.user.address),1)])])):(0,d.kq)("",!0)])]),(0,d._)("div",x,[O,(0,d._)("table",D,[(0,d._)("tbody",null,[(0,d._)("tr",null,[z,(0,d._)("td",null,(0,a.zw)(J.tempOrder.id),1)]),C,(0,d._)("tr",null,[q,(0,d._)("td",null,[J.tempOrder.paid_date?((0,d.wg)(),(0,d.iD)("span",L)):((0,d.wg)(),(0,d.iD)("span",M,"時間不正確"))])]),(0,d._)("tr",null,[P,(0,d._)("td",null,[J.tempOrder.is_paid?((0,d.wg)(),(0,d.iD)("strong",H,"已付款")):((0,d.wg)(),(0,d.iD)("span",Y,"尚未付款"))])]),$])]),j,(0,d._)("table",E,[K,(0,d._)("tbody",null,[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(J.tempOrder.products,(l=>((0,d.wg)(),(0,d.iD)("tr",{key:l.id},[(0,d._)("th",null,(0,a.zw)(l.product.title),1),(0,d._)("td",null,(0,a.zw)(l.qty)+" / "+(0,a.zw)(l.product.unit),1),U])))),128))])]),(0,d._)("div",V,[(0,d._)("div",W,[(0,d.wy)((0,d._)("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[0]||(t[0]=l=>J.tempOrder.is_paid=l)},null,512),[[s.e8,J.tempOrder.is_paid]]),(0,d._)("label",Z,[J.tempOrder.is_paid?((0,d.wg)(),(0,d.iD)("span",A,"已付款")):((0,d.wg)(),(0,d.iD)("span",B,"未付款"))])])])])])]),(0,d._)("div",F,[G,(0,d._)("button",{type:"button",class:"btn btn-primary",onClick:t[1]||(t[1]=t=>l.$emit("update-paid",J.tempOrder))}," 修改付款狀態 ")])])])],512)])])],64)}var J={data(){return{isLoading:!1,fullPage:!0,tempOrder:{}}},methods:{getOrders(){const l="https://vue3-course-api.hexschool.io/v2/api/david-frontend/admin/orders";this.$http.get(l).then((l=>{console.log(l),this.tempOrder=l.data.orders}))}},mounted(){this.getOrders()}},N=e(3744);const Q=(0,N.Z)(J,[["render",I]]);var R=Q}}]);
//# sourceMappingURL=920.b51dd780.js.map