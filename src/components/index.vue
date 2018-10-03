<template>
  <div class="container">
    <div class="header">
      <div class="logo">网易严选</div>
      <div class="search">
        <i class="iconfont">&#xe600;</i>
        <input type="search" placeholder="搜索商品，共16654款好物" class="input">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../assets/style/iconfont.less";
  input::-webkit-search-cancel-button {
    display: none;
  }
.container {
  height: -webkit-fill-available;
  .header {
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    .logo {
      flex: 0 0 20%;
    }
    .search {
      flex: 0 0 70%;
      text-align: center;
      height: 30px;
      line-height: 30px;
      background-color: #ededed;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      .iconfont {
        width: 10%;
      }
      .input {
        width: 60%;
        text-align: center;
        height: inherit;
        outline: none;
      }
    }
  }
}
</style>
