<template>
  <div class="container">
    <div class="title">{{message}}</div>
  </div>
</template>

<script>
  export default {
      data () {
          return {
              message: '首页'
          }
      }
  }
</script>

<style lang="less" scoped>
.container {
  background-color: red;
  .title {
    background-color: gold;
  }
}
</style>