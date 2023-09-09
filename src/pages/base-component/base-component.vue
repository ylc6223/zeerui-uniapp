<template>
  <view class="container">
    <zui-list-view title="基础">
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
          text:'colors',
          url:'/pages/case/colors/colors'
        },
        {
          text:'icons',
          url:'/pages/case/icons/icons'
        },
        {
          text:'buttons',
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
