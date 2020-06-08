<!-- 主页 -->
<template>
  <div class="homepage">
    <div @click="gocleanChart()">前往清扫图表页</div>
  </div>
</template>

<script>
import { httpUrl, host } from "../axios/index";

export default {
  name: "homepage",
  data() {
    //这里存放数据
    return {
      cleanNum: 0
    };
  },
  mounted() {
    this.signIn();
  },
  methods: {
    gocleanChart() {
      this.$router.push({
        path: "cleanChart",
        // query: {
        //   id: 12
        // }
      });
    },
    signIn() {
      // this.$axios
      //   .get(httpUrl.signIn, {})
      //   .then(res => {
      //     console.log(res.data);
      //   })
      //   .catch(function(err) {
      //     console.log(err);
      //     console.log("获取信息失败");
      //   });
      this.$axios
        .post(httpUrl.signIn, {
          username: "guest",
          password: "guest"
        })
        .then(res => {
          // console.log(res);
        })
        .catch(function(err) {
          console.log(err);
          console.log("获取信息失败");
        });
    }
  },
  //组件注册
  components: {}
};
</script>
<style scoped>
.homepage {
  width: 100%;
  border-top: 0.01rem solid #ccc;
  padding-top: 0.3rem;
  position: relative;
}
</style>
