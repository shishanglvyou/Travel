<template>
  <div>
    <div class="recommend-title">
      周末去哪儿
    </div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'HomeWeekend',
    props:{
      list:Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/mixins.styl"
  .recommend-title
    line-height: 35px
    background: #eee
    text-indent 10px
  .item-img-wrapper
    overflow hidden
    height: 0
    padding-bottom 37.09%
    .item-img
      width: 100%
  .item-info
    padding:10px
    .item-title
      line-height: 30px
      font-size:16px
      ellipsis()
    .item-desc
      line-height: 30px
      color: #9a9a9a
      ellipsis()
</style>

