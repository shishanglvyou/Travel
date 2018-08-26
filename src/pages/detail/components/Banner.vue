<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <i class="iconfont icon-tupian banner-icon"></i>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <Fade>
      <CommonGallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose">
      </CommonGallary>
    </Fade>
  </div>
</template>

<script>
  import CommonGallary from '../../../common/gallary/Gallary'
  import Fade from '../../../common/fade/Fade'
  export default {
    name:'DetailBanner',
    props:{
      sightName: String,
      bannerImg: String,
      bannerImgs: Array
    },
    data(){
      return {
        showGallary:false
      }
    },
    components:{
      CommonGallary,
      Fade
    },
    methods:{
      handleBannerClick(){
        this.showGallary=true
      },
      handleGallaryClose(){
        this.showGallary=false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height: 0
    padding-bottom:55%
    color #fff
    .banner-img
      width: 100%
    .banner-info
      display flex
      position absolute
      left:0
      right:0
      bottom 0
      line-height: 28px
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.2))
      .banner-title
        flex:1
        padding 5px 10px
      .banner-number
        position absolute
        bottom 32px
        left:8px
        font-size:14px
        padding 0 12px
        line-height: 18px
        height: 18px
        border-radius 8px
        background: rgba(0,0,0,.2)
        .banner-icon
          font-size:12px
</style>
