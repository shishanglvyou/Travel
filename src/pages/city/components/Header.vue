<template>
  <div class="header">
    <router-link to="/">
      <i class="iconfont icon-fanhui"></i>
    </router-link>
    城市选择
  </div>
</template>

<script>
  export default {
    name:'CityHeader'
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .header
    position relative
    height: $headerHeight
    line-height: $headerHeight
    overflow hidden
    text-align center
    color #fff
    background: $bgColor
    .icon-fanhui
      position absolute
      left:8px
      color:#fff
</style>
