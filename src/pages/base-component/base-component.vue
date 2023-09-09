<template>
  <view class="container">
<view v-for="(item,idx) in list" :key="idx" @click="handleClick(item.url,$event)">{{item.text}}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list:[
        {
          text:'colors',
          url:'/pages/case/colors/colors'
        },
        {
          text:'icons',
          url:'/pages/case/icons/icons'
        }
      ]
    };
  },
  methods:{
    handleClick(url,e){
      uni.navigateTo({
        url:url
      })
    }
  }
}
</script>

<style lang="scss">

</style>
