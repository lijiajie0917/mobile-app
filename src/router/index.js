import Vue from "vue";
import Router from "vue-router";
import NotFoundComponent from "../views/404.vue";
Vue.use(Router);
let project = process.env.NODE_ENV === "development" ? "" : "";
let basenginx;
switch (process.env.NODE_ENV) {
  case "production":
    basenginx = "/dist/";
    break;
  case "test":
    basenginx = "/testdist/";
    break;
  case "development":
    basenginx = ""
    break;
}

var router = new Router({
  routes: [
    {
      path: "/",
      component: () =>
        import("../views/homepage.vue"),
      meta: {
        title: '主页'
      }
    },
    {
      path: `${project}/cleanChart`,
      component: () =>
        import("../views/cleanChart.vue"),
      meta: {
        title: '清扫图表'
      }
    },
    {
      path: "*",
      component: NotFoundComponent,
      meta: {
        title: '404'
      }
    }

  ],
  // mode: "history",
  // base: basenginx,
  mode: "hash",
});
router.beforeEach((to, from, next) => {
  document.getElementById('loadingCover').style.display = 'block';
  document.title = to.meta.title;
  next();
  document.getElementById('loadingCover').style.display = 'none';
});
export default router;
