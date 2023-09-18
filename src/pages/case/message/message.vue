<template>
  <view class="container">
    <!--顶部消息-->
    <zui-message ref="toast" :backgroundColor="backgroundColor" v-if="index == 0"></zui-message>
    <!--顶部消息-->

    <!--居中消息-->
    <zui-message position="center" :backgroundColor="backgroundColor" ref="toast" v-if="index == 1"></zui-message>
    <!--居中消息-->

    <!--底部消息-->
    <zui-message position="bottom" :backgroundColor="backgroundColor" ref="toast" v-if="index == 2"></zui-message>
    <!--底部消息-->
    <view class="zui-subsection">
      <view class="zui-subsection-item" :class="[index == 0 ? 'zui-active' : '']" data-index="0" @tap="switchTabs">顶部提示</view>
      <view class="zui-subsection-item" :class="[index == 1 ? 'zui-active' : '']" @tap="switchTabs" data-index="1">居中提示</view>
      <view class="zui-subsection-item zui-last-child" :class="[index == 2 ? 'zui-active' : '']" @tap="switchTabs" data-index="2">底部提示</view>
    </view>
    <button class="px-4 my-2 bg-blue-300 text-white rounded-md shadow-sm opacity-100" hover-class="bg-sky-500" data-index="0" @tap="showTips">一般提示</button>
    <button class="px-4 my-2 bg-blue-300 text-white rounded-md shadow-sm opacity-100" hover-class="bg-sky-500" data-index="1" @tap="showTips">成功提示</button>
    <button class="px-4 my-2 bg-blue-300 text-white rounded-md shadow-sm opacity-100" hover-class="bg-sky-500" data-index="2" @tap="showTips">警告提示</button>
    <button class="px-4 my-2 bg-blue-300 text-white rounded-md shadow-sm opacity-100" hover-class="bg-sky-500" data-index="3" @tap="showTips">错误提示</button>
    <button class="px-4 my-2 bg-blue-300 text-white rounded-md shadow-sm opacity-100" hover-class="bg-sky-500" data-index="4" @tap="showTips">其他提示</button>
    <button class="px-4 my-2 bg-blue-300 text-white rounded-md shadow-sm opacity-100" hover-class="bg-sky-500" data-index="5" @tap="showTips">长文字消息提示</button>
    <button class="px-4 my-2 bg-blue-300 text-white rounded-md shadow-sm opacity-100" hover-class="bg-sky-500" data-index="6" @tap="showTips">自定义时间消息提示</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      basicData: [
        {
          type: 'translucent',
          msg: '一般消息提示~'
        },
        {
          type: 'green',
          msg: '成功消息提示~'
        },
        {
          type: 'warning',
          msg: '警告消息提示~'
        },
        {
          type: 'danger',
          msg: '错误消息提示~'
        },
        {
          type: 'primary',
          msg: '其他消息提示~'
        },
        {
          type: 'primary',
          msg: '长文字消息提示，看不完信息？可自定义设置显示时间，建议提示信息不要过长'
        },
        {
          type: 'translucent',
          msg: '4S后关闭提示框',
          duration: 4000
        }
      ],
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      index: 0
    };
  },
  methods: {
    showTips: function(e) {
      const global = uni && uni.$zui && uni.$zui.color;
      const colors = {
        'primary': (global && global.primary) || '#6190E8',
        'white': '#fff',
        'danger': (global && global.danger) || '#FF4949',
        'warning': (global && global.warning) || '#FFC82C',
        'green': (global && global.success) || '#13CE66',
        'blue': (global && global.blue) || '#78A4FA',
        'gray': '#bfbfbf',
        'black': '#333333',
        'brown': '#ac9157',
        'gray-primary': '#f2f2f2',
        'gray-danger': '#f2f2f2',
        'gray-warning': '#f2f2f2',
        'gray-green': '#f2f2f2'
      }
      let index = e.currentTarget.dataset.index;
      // this.backgroundColor = { translucent: 'rgba(0, 0, 0, 0.7)', green: '#19be6b', warning: '#ff7900', danger: '#EB0909', primary: '$color-brand' }[this.basicData[index].type];
      this.backgroundColor = { translucent: 'rgba(0, 0, 0, 0.7)', green: colors.green, warning: colors.warning, danger: colors.danger, primary: colors.primary }[this.basicData[index].type];
      let options = {
        msg: this.basicData[index].msg,
        duration: this.basicData[index].duration || 2000
      };
      this.$refs.toast.showTips(options);
    },
    switchTabs: function(e) {
      this.index = e.currentTarget.dataset.index;
    }
  }
};
</script>

<style lang="scss">
@import "src/common/variable.scss";
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 60rpx 30rpx 100rpx 30rpx;
  box-sizing: border-box;
}

.zui-subsection {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20rpx 0 80rpx 0;
  border-radius: 10rpx;
  overflow: hidden;
  transform: translateZ(0);
  border: 0;
  position: relative;
  border: 1rpx solid $color-brand;
}

.zui-subsection-item {
  position: relative;
  z-index: 10;
}
.zui-subsection view {
  flex: 1;
  font-size: 28rpx;
  text-align: center;
  padding: 10rpx 30rpx;
  color: $color-brand;
  position: relative;
  border-right: 1rpx solid $color-brand;
}
.zui-last-child {
  border-right: 0 !important;
}

.zui-subsection .zui-active {
  background-color: $color-brand;
  color: #fff;
}
</style>