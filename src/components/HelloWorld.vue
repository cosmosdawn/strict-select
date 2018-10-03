<template>
  <div class="container">
    <div class="header">
      <div class="scan">
        <i class="iconfont">&#xe613;</i>
        <span>扫一扫</span>
      </div>
      <div class="search">
        <i class="iconfont">&#xe600;</i>
        <input type="search" placeholder="搜索商品，共14986款好物">
      </div>
      <div class="message">
        <i class="iconfont">&#xe606;</i>
        <span>消息</span>
      </div>
    </div>
    <div class="banner">
      <div class="tab">
        <span>推荐</span>
        <span>新品</span>
        <span>福利社</span>
        <span>限时购</span>
        <span>居家</span>
        <span>鞋类</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { getlists } from '../api'
  export default {
      data () {
          return {
            message: '首页',
            lists: [],
            myOptions: {
              loop: true
            }
          }
      },
      created () {
          getlists().then(res => {
              this.lists = res.data.data.list
          })
      },
      mounted () {
          console.log('mounted')
      }
  }
</script>

<style lang="less" scoped>
@import "../assets/style/iconfont.less";
input::-webkit-search-cancel-button {
  display: none;
}
.container {
  height: auto;
  width: 25rem;
  .header {
    // border: 1px solid;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    .scan, .message {
      flex: 0 0 auto;
      display: flex;
      flex-direction: column;
    }
    .search {
      flex: 1 1 auto;
      background-color: #ededed;
      height: 2.5em;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20px;
      margin-right: 20px;
      input {
        width: 60%;
        height: 100%;
        text-align: center;
        outline: none;
      }
    }
  }
  .banner {
    width: 100%;
    height: 300px;
    .tab {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>
