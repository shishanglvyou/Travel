<template>
  <div>
    <div class="recommend-title">
      热销推荐
    </div>
    <ul>
        <router-link tag="li" :to="'/detail/'+item.id" class="item border-bottom" v-for="item in list" :key="item.id">
          <img :src="item.imgUrl" class="item-img">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'HomeRecommend',
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
    margin-top:10px
  .item
    overflow hidden
    display flex
    height: 120px
    .item-img
      width: 100px
      height: 100px
      padding:10px
    .item-info
      min-width 0
      flex:1
      padding:10px
      .item-title
        line-height: 30px
        font-size:16px
        ellipsis()
      .item-desc
        line-height: 30px
        color: #9a9a9a
        ellipsis()
      .item-button
        background: #ff9300
        border-radius 3px
        padding:3px 10px
        margin-top:5px
        font-size:14px
        border:none
</style>
