/**
 *      ┌─┐       ┌─┐
 *   ┌──┘ ┴───────┘ ┴──┐
 *   │                 │
 *   │       ───       │
 *   │  ─┬┘       └┬─  │
 *   │                 │
 *   │       ─┴─       │
 *   │                 │
 *   └───┐         ┌───┘
 *       │         │
 *       │         │
 *       │         │
 *       │         └──────────────┐
 *       │                        │
 *       │                        ├─┐
 *       │                        ┌─┘
 *       │                        │
 *       └─┐  ┐  ┌───────┬──┐  ┌──┘
 *         │ ─┤ ─┤       │ ─┤ ─┤
 *         └──┴──┘       └──┴──┘
 *                神兽保佑
 *               代码无BUG!
 *
 */
let api, host;
api = "/api";
host = "https://krjrobot.cn/krjrobot";//正式
//     host = "https://dev.krjrobot.cn/krjrobot";//测试
//     host = "http://krj/krjrobot";//开发
// switch (process.env.NODE_ENV) {
//   case "production": //正式
//     api = "/api";
//     host = "https://krjrobot.cn/krjrobot";
//     break;
//   case "test": //测试
//     api = "/api";
//     host = "https://dev.krjrobot.cn/krjrobot";
//     break;
//   case "development": //开发
//     api = "/api";
//     host = "http://krj/krjrobot";
// }
console.log("当前环境:",process.env.NODE_ENV)
let httpUrl = {
  signIn: `${host}/mini/signIn`, //小程序用户登录
}
export {
  httpUrl,
  api,
  host
};
