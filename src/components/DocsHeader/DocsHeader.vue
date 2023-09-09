<template>
  <view class='doc-header'>
    <view class='doc-header__title'>{{title}}</view>
  </view>
</template>

<script>
export default {
  props:{
    title:{
      type:String,
      default:'标题'
    }
  },
  data() {
    return {
    };
  },
  methods:{
  }
}
</script>

<style lang="scss">
@import "src/common/variable.scss";
.doc-header {
  display: flex;
  align-items: center;
  padding: 60px;
  height: 180px;

  &__title {
    position: relative;
    height: 90px;
    color: #333;
    font-size: 40px;
    font-weight: bold;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      display: inline-block;
      width: 120px;
      height: 2PX;
      border-radius: 1PX;
      //background-color: #6190E8;
      background-color: $color-brand;
    }
  }
}
</style>
