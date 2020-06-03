<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  background-color: #f5f5f5;
  -webkit-overflow-scrolling: touch;
  -webkit-text-size-adjust: none;
}
#app {
  width: 100%;
}
</style>
