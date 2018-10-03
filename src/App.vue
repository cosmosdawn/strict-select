<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// import Navigator from './components/navigator.vue'
import Index from './components/index.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Navigator,
    Index
  }
}
</script>

<style>
  @import "./assets/style/reset.less";
</style>

<style lang="less">

</style>
