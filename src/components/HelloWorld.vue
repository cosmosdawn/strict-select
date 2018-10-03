<template>
  <div class="container">
    <div>列表</div>
    <div v-for="(item, index) in lists" :key="index">{{item.name}}</div>
  </div>
</template>

<script>
  import { getlists } from '../api'
  export default {
      data () {
          return {
              message: '首页',
              lists: []
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
  // @import "../../assert/iconfont.less";
.container {
  height: auto;
  width: 25rem;
  .header {
    border: 1px solid;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 50px;
    .scan, .message {
      flex: 0 0 auto;
    }
    .search {
      flex: 1 1 auto;
    }
  }
}
</style>