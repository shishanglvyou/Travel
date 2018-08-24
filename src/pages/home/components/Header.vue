<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="header-input">
      <i class="iconfont icon-sousuo"></i>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <i class="iconfont icon-xiangxia1"></i>
      </div>
    </router-link>

  </div>
</template>

<script>
  export default {
    name:'HomeHeader',
    props:{
      city:String
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .header
    display flex
    height: $headerHeight
    line-height: $headerHeight
    width: 100%
    background: $bgColor
    color: #fff
    .header-left
      width: 32px
      float:left
      text-align center
      .icon-fanhui
        font-size 18px
    .header-input
      flex:1
      height: 32px
      line-height: 32px
      background: #fff
      border-radius 5px
      margin:6px
      color #ccc
      padding-left 5px
    .header-right
      width: 62px
      float: left
      text-align center
      color #fff
</style>
