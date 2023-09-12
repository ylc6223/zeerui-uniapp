<template>
  <view class="container">
    <zui-list-view title="视图">
      <zui-list-cell v-for="(item,idx) in list" :key="idx" @click="handleClick(item.url,$event)">{{item.text}}</zui-list-cell>
    </zui-list-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list:[
        {
          text:'Noticebar',
          url:'/pages/case/notice-bar/notice-bar'
        },
        {
          text:'Badge',
          url:'/pages/case/badge/badge'
        },
        {
          text:'Tag',
          url:'/pages/case/buttons/buttons'
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
