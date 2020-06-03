<!-- 主页 -->
<template>
  <div class="homepage">
    <!-- <div class="signIn-btn" @click="signIn()">signIn</div> -->
    <ul class="cleanList">
      <li class="cleanLi">
        <div></div>
      </li>
    </ul>
  </div>
</template>

<script>
import { httpUrl, host } from "../axios/index";

export default {
  name: "homepage",
  data() {
    //这里存放数据
    return {};
  },
  mounted() {
    this.signIn();
  },
  methods: {
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
        .post(
          httpUrl.signIn,
          {
            'username': "guest",
            'password' : "guest",
          },
        )
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
  border-top: 0.1rem solid #ccc;
  padding-top: 0.3rem;
  position: relative;
}
.signIn-btn{
  font-size: 0.46rem;
  padding: 0 0.3rem;
}
.cleanList{
  padding: 0 0.3rem;
  width: 100%;
}
.cleanLi{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
