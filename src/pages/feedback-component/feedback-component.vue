<template>
  <view class="container">
    <zui-list-view title="操作反饋">
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
          text:'Modal',
          url:'/pages/case/modal/modal'
        },
        {
          text:'Toast',
          url:'/pages/case/toast/toast'
        },
        {
          text:'Message',
          url:'/pages/case/message/message'
        },
        {
          text:'Action-Sheet',
          url:'/pages/case/actionsheet/actionsheet'
        },
        {
          text:'Swipe-Action',
          url:'/pages/case/swiper-action/swiper-action'
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
