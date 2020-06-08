<!-- 清扫图表 -->
<template>
  <div class="cleanChart">
    <div class="cleanBox" v-for="(cleanList,index) in cleanData" :key="index">
      <div class="cleanTips">
        当前清扫到第
        <span>{{cleanIng(cleanList)}}</span>
        块太阳能发电板
      </div>
      <ul class="cleanList">
        <li class="cleanLi" v-for="(item,index) in cleanList" :key="index">
          <div class="cleanItem1" v-if="item.state == '清扫完毕'">
            {{item.state}}
          </div>
          <div class="cleanItem2" v-if="item.state == '清扫中...'">
            {{item.state}}
          </div>
          <div class="cleanItem3" v-if="item.state == '等待中...'">
            {{item.state}}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { httpUrl, host } from "../axios/index";

export default {
  name: "cleanChart",
  data() {
    //这里存放数据
    return {
      cleanData: [
        [
          {
            id: "111111",
            state: "清扫完毕"
          },
          {
            id: "222222",
            state: "清扫完毕"
          },
          {
            id: "333333",
            state: "清扫完毕"
          },
          {
            id: "444444",
            state: "清扫中..."
          },
          {
            id: "555555",
            state: "等待中..."
          }
        ],
        [
          {
            id: "111111",
            state: "清扫完毕"
          },
          {
            id: "222222",
            state: "清扫完毕"
          },
          {
            id: "333333",
            state: "清扫中..."
          },
          {
            id: "444444",
            state: "等待中..."
          },
          {
            id: "555555",
            state: "等待中..."
          },
          {
            id: "666666",
            state: "等待中..."
          },
          {
            id: "777777",
            state: "等待中..."
          }
        ],
        [
          {
            id: "111111",
            state: "清扫完毕"
          },
          {
            id: "222222",
            state: "清扫中..."
          },
          {
            id: "333333",
            state: "等待中..."
          },
          {
            id: "444444",
            state: "等待中..."
          },
          {
            id: "555555",
            state: "等待中..."
          }
        ]
      ]
    };
  },
  mounted() {
    // this.signIn();

    if ('EventSource' in window) {//检测当前浏览器是否支持
      console.log("====")
    }

    // // 建立一条SSE链接
    // var source = new EventSource(httpUrl.signIn);

    // // 建立连接时回调
    // source.onopen = function () {

    // };

    // // 连接失败时回调
    // source.onerror = function () {

    //  };

    // // 监听foo事件，并执行对于回调函数
    // source.addEventListener("foo", function (event) {
    //   processFoo(event.data);
    // });

    // // 监听所有事件
    // source.onmessage = function (event) {
    //   log_message(event.id, event.data);
    //   if (event.id== "CLOSE") {
    //       source.close();
    //   }
    // }

  },
  methods: {
    cleanIng(data) {//当前清扫
      for(let i in data){
        if(data[i].state == "清扫中..."){
          // console.log(i)
          return parseInt(i)+1;
        }
      }
    },
    signIn() {//路人模式登陆
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
.cleanChart {
  width: 100%;
  border-top: 0.01rem solid #ccc;
  position: relative;
}
.cleanBox{
  padding-top:0.2rem;
}
.cleanTips {
  padding: 0 0.3rem;
  font-size: 0.3rem;
  font-weight: bold;
}
.cleanTips span {
  color: blue;
  text-decoration: underline;
}
.cleanList {
  padding: 0.3rem;
  width: 100%;
  border-bottom: 0.01rem solid #ccc;
  white-space: nowrap;
  overflow-x: auto;
}
.cleanLi {
  padding-right: 0.2rem;
  display: inline-block;
  vertical-align: center;
  color: #fff;
}
.cleanItem1 {
  width: 1.5rem;
  height: 2rem;
  padding-top: 0.75rem;
  text-align: center;
  background: green;
}
.cleanItem2 {
  width: 1.5rem;
  height: 2rem;
  padding-top: 0.75rem;
  text-align: center;
  background: red;
}
.cleanItem3 {
  width: 1.5rem;
  height: 2rem;
  padding-top: 0.75rem;
  text-align: center;
  background: blue;
}
</style>
