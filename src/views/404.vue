<!-- 404 -->
<template>
  <div class="page404">
    <p>404</p>
    很抱歉，您访问的页面不存在！
    <div class="title">北京科瑞杰科技发展有限公司</div>
  </div>
</template>

<script>

export default {
  name: "page404",
  data() {
    //这里存放数据
    return {};
  },
  methods: { abc() {} },
  mounted() {},
  //组件注册
  components: {},
};
</script>
<style scoped>
.page404 {
  padding-top: 2.8rem;
  text-align: center;
}
p{
  font-size: 1rem;
  line-height: 1.8rem;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
}
.title{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 0.6rem;
  color:rgba(153,153,153,1);
  font-size: 0.24rem;
}
</style>
