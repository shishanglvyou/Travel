<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" class="search-input">
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .search
    height: 36px
    background: $bgColor
    padding:0 8px
    .search-input
      box-sizing border-box
      width: 100%
      height: 31px
      line-height: 31px
      text-align center
      border-radius:3px
      padding 0 8px
</style>
