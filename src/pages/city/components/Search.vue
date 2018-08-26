<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" placeholder="输入城市名或拼音" class="search-input">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapMutations} from 'vuex'
  export default {
    data(){
      return {
        keyword:'',
        list:[],
        timer:null
      }
    },
    props:{
      cities:Object
    },
    watch:{
      keyword(){
        if(this.timer){
          clearTimeout(this.timer)
        }
        if(!this.keyword){
          this.list=[]
          return
        }
        this.timer=setTimeout(()=>{
          const result=[]
          for (let i in this.cities){
            this.cities[i].forEach((value)=>{
              if(value.spell.indexOf(this.keyword)>-1 ||
                value.name.indexOf(this.keyword)>-1){
                result.push(value)
              }
            })
          }
          this.list=result
        },100)
      }
    },
    mounted(){
      this.scroll=new BScroll(this.$refs.search)
    },
    computed:{
      hasNoData(){
        return !this.list.length
      }
    },
    methods:{
      handleCityClick(city){
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    }
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
  .search-content
    overflow hidden
    z-index 1
    position absolute
    top:79px
    left:0
    right:0;
    bottom:0
    background: #fff
    .search-item
      line-height: 30px
      padding-left:8px
      color:#666
      background: #fff
</style>
