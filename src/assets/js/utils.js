let Utils = {
    // 设置localStorage
    SetLS: function (key, json) {
      window.localStorage.setItem(key, JSON.stringify(json));
    },
    // 根据key取值localStorage
    GetLS: function (key) {
      var str = window.localStorage.getItem(key);
      if (str && str !== 'undefined') {
        return JSON.parse(str);
      } else {
        return null;
      }
    },
    // 清除localStorage
    ClearLS: function (key) {
      if (key) window.localStorage.removeItem(key);
      else window.localStorage.clear();
    },
 
    // 设置sessionStorage
    SetSS: function (key, json) {
      window.sessionStorage.setItem(key, JSON.stringify(json));
    },
 
    // 根据key取值sessionStorage
    GetSS: function (key) {
      var str = window.sessionStorage.getItem(key);
      if (str && str !== 'undefined') return JSON.parse(str);
      else return null;
    },
 
    // 清除sessionStorage
    ClearSS: function (key) {
      if (key) window.sessionStorage.removeItem(key);
      else window.sessionStorage.clear();
    },
  }
  export default Utils