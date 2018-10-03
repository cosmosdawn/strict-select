<template>
  <div id="navigator" class="navigator">
    <div class="contant">
      <a href="javascript:;" id="navigatorBack" class="back" @click="onBack">
        <i class="iconfont">&#xe601;</i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'navigator',
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    methods: {
      onBack () {
        history.back()
      }
    }
  }
</script>

<style lang="less" scoped>
@import "../assets/style/iconfont.less";
@r: 16rem/750;
  a {
    text-decoration: none;
  }
  .navigator {
    height: 45px;
    background-color: #36363a;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .iconfont {
      color: white;
      margin-left: 10px;
    }
  }
</style>
