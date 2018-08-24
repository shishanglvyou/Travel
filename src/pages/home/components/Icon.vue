<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name:'HomeIcon',
    data(){
      return {
        swiperOption:{
          autoplay:false
        }
      }
    },
    props:{
      list:Array
    },
    computed:{
      pages (){
        const pages=[];
        this.list.forEach((item,index)=>{
          const page=Math.floor(index/8);
          if(!pages[page]){
            pages[page]=[];
          }
          pages[page].push(item);
        });
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  @import "../../../assets/styles/mixins.styl"
  .icons>>>.swiper-container
    overflow hidden
    height: 0
    padding-bottom :50%
  .icons
    margin-top:5px
    .icon
      position relative
      overflow hidden
      float:left
      height: 0
      width: 25%
      padding-bottom 25%
      .icon-img
        padding:5px
        position absolute
        top:0;
        left:0
        right:0
        bottom:22px
        box-sizing border-box
        .icon-img-content
          display block
          margin:0 auto
          height: 100%
      .icon-desc
        position absolute
        left:0
        right:0
        bottom:0
        height: 22px
        line-height: 14px
        text-align center
        color:$darkTextColor
        overflow hidden
        white-space nowrap
        text-overflow:ellipsis
        ellipsis()
</style>
