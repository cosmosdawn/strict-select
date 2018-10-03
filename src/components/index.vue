<template>
  <div class="container">
      <div class="header">
        <div class="logo">网易严选</div>
        <div class="search">
          <i class="iconfont">&#xe600;</i>
          <input type="search" placeholder="搜索商品，共16654款好物" class="input">
        </div>
      </div>
      <div class="tabs">
        <span>推荐</span>
        <span>居家</span>
        <span>鞋包配饰</span>
        <span>服装</span>
        <span>电器</span>
      </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/f11c5c3d9d06f063c1d08e332eaba1f8.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/bc9378ddad731616aa6a3e232a2917d1.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/089fdc9bfdc75ccfbe9c349d0096804b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
      </div>
    </div>
    <div class="bottom-menu index-margin-bottom">
      <div>
        <i class="iconfont">&#xe910;</i>
        <span>网易自营品牌</span>
      </div>
      <div>
        <i class="iconfont">&#xe910;</i>
        <span>30天无忧退货</span>
      </div>
      <div>
        <i class="iconfont">&#xe910;</i>
        <span>48小时快速退款</span>
      </div>
    </div>
    <div class="introduct">
      <div class="title">
        <div>
          <span>品牌制造商直供</span>
          <i class="iconfont">&#xe6aa;</i>
        </div>
      </div>
      <div class="main-themes">
        <div class="products">
          <div class="infos">
            <div>海外制造商</div>
            <div>9.9元起</div>
            <span class="icon">上新</span>
          </div>
          <img src="https://yanxuan.nosdn.127.net/8d670dfdf89315316160266b9a81f68a.png?imageView&thumbnail=355x0&quality=65" alt="">
        </div>
        <div class="products">
          <div class="infos">
            <div>CK制造商</div>
            <div>25元起</div>
            <span class="icon">上新</span>
          </div>
          <img src="https://yanxuan.nosdn.127.net/5aecffba9202b1fa956758dfbcd65b85.png?imageView&thumbnail=355x0&quality=65" alt="">
        </div>
        <div class="products">
          <div class="infos">
            <div>新秀丽制造商</div>
            <div>34.9元起</div>
            <span class="icon">上新</span>
          </div>
          <img src="https://yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png?imageView&thumbnail=355x0&quality=65" alt="">
        </div>
        <div class="products">
          <div class="infos">
            <div>MUJI制造商</div>
            <div>39.9元起</div>
            <span class="icon">上新</span>
          </div>
          <img src="https://yanxuan.nosdn.127.net/2b6a121f9c18324ff0e10931526760b3.png?imageView&thumbnail=355x0&quality=65" alt="">
        </div>
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
    // TODO: SWIPER
  }
</script>
<style lang="less" scoped>
  @import "../assets/style/iconfont.less";
  input::-webkit-search-cancel-button {
    display: none;
  }
.container {
  background-color: #f4f4f4;
  height: -webkit-fill-available;
    .header {
      background-color: white;
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
    .tabs {
      background-color: white;
      padding: 0 20px;
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  .swiper-container {
    height: 185px;
    // background-color: antiquewhite;
    .swiper-slide {
      height: inherit;
      img {
        height: inherit;
      }
    }
  }
  .bottom-menu {
    background-color: white;
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 12px;
    .iconfont {
      color: red;
    }
  }
  .index-margin-bottom {
    margin-bottom: 10px;
  }
  .introduct {
    background-color: white;
    height: 290px;
    .title {
      height: 55px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .main-themes {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      .products {
        width: 176px;
        height: 113px;
        background-color: #f4f4f4;
        margin-bottom: 8px;
        margin-left: 8px;
        position: relative;
        .infos {
          position: absolute;
          top: 10px;
          left: 10px;
          font-size: 14px;
          .icon {
            font-size: 12px;
            width: auto;
            display: inline-block;
            padding: 0 2px;
            color: goldenrod;
            border: 1px solid;
            border-radius: 3px;
          }
        }
        img {
          width: inherit;
        }
      }
    }
  }
}
</style>
