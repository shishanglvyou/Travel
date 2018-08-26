<template>
  <div>
    <div class="item" v-for="(item,index) in list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <DetailList :list="item.children"></DetailList>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailList',
    props:{
      list:Array
    }
  }
</script>

<style lang="stylus" scoped>
  .item-title
    line-height: 18px
    padding:5px 5px
    .item-title-icon
      position relative
      left:8px
      top:1px
      display: inline-block
      width: 12px
      height: 12px
      background: url("../../../../static/mock/images/detail_r2_c1.png") no-repeat
      margin-right: 10px
      background-size: 12px 12px
  .item-children
    padding 0 4px
</style>
