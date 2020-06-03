// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import router from "./router";
import axios from "axios";
import VueLazyload from 'vue-lazyload'
Vue.use(Vuex);
Vue.use(VueLazyload)
//图片懒加载及图片损坏、加载中的提示
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/icon/error.png',
  loading: './assets/icon/loadingCover.gif',
  attempt: 1
})
Vue.config.productionTip = false


Vue.prototype.$axios = axios;
// 请求拦截
axios.interceptors.request.use(config => {
  console.log("<==请求前打印请求地址:",config.url,";提交数据:",config.data)
  document.getElementById("loadingCover").style.display = "block";//显示正在请求请等待标识
  config.headers.common['Authorization'] = 'Authorization';//添加自定义请求头
  return config;
}, error => {
  // 对请求失败做处理
  return Promise.reject(error);
})
// 响应拦截
axios.interceptors.response.use(
  response => {
    console.log("==>请求成功，打印数值",response)
    document.getElementById("loadingCover").style.display = "none";
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);
/**获取全局移动端终端变量 */
let u = navigator.userAgent;
let isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
/** 把终端环境挂到vue实例*/
Vue.prototype.$isAndroid = isAndroid;
Vue.prototype.$isiOS = isiOS;
// 引入rem计算js
import "./assets/js/webappREM.JS";
//引入默认css
import './assets/css/reset.css';
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
