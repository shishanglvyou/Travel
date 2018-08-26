<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <i class="iconfont icon-fanhui"></i>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <i class="iconfont icon-fanhui"></i>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name:'DetailHeader',
    data(){
      return{
        showAbs:true,
        opacityStyle(){
          opacity:0
        }
      }
    },
    methods:{
      handleScroll(){
        const top=document.documentElement.scrollTop
        if(top>60){
          let opacity=top/140
          opacity=opacity>1?1:opacity
          this.opacityStyle={
            opacity
          }
          this.showAbs=false
        }else{
          this.showAbs=true
        }
      }
    },
    activated(){
      window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
      window.removeEventListener('scroll',this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .header-abs
    position absolute
    left:8px
    top:8px
    width: 30px
    height: 30px
    border-radius 50%
    background: rgba(0,0,0,.4)
    text-align center
    line-height:30px
    .icon-fanhui
      color:#fff
  .header-fixed
    z-index 2
    position fixed
    top:0
    left 0
    right 0
    height: $headerHeight
    line-height: $headerHeight
    text-align center
    color #fff
    background: $bgColor
    .icon-fanhui
      position absolute
      left:8px
      color:#fff
</style>

