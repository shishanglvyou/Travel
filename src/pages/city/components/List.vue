<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              {{this.currentCity}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
          {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState,mapMutations} from 'vuex'
  export default {
    name:'CityList',
    props:{
      hot:Array,
      cities:Object,
      letter:String
    },
    methods:{
      handleCityClick(city){
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    computed:{
      ...mapState({
        currentCity:'city'
      })
    },
    mounted(){
      this.scroll=new BScroll(this.$refs.wrapper)
    },
    watch:{
      letter(){
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    overflow hidden
    position absolute
    top:79px
    left:0
    bottom:0
    right:0
    .title
      line-height: 30px
      background: #eee
      padding-left:8px
      color #666
    .button-list
      overflow hidden
      padding:8px
      .button-wrapper
        width: 30%
        float:left
        .button
          text-align center
          margin:5px
          border:1px solid #ccc
          padding:5px 0
          border-radius 3px
    .item-list
      line-height: 34px
      padding-left:8px
</style>

