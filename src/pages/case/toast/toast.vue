<template>
  <view class="container">
    <DocsHeader title="Toase 轻提示"></DocsHeader>
    <view class="doc-body">
      <view class="panel">
        <view class="panel__title text-lg font-bold pl-6 text-blue-500">基本案例</view>
        <view class="panel__content">
          <zui-button @click="func1">文本Toast</zui-button>
        </view>
      </view>
      <view class="panel">
        <view class="panel__title text-lg font-bold pl-6 text-blue-500">自定义图片</view>
        <view class="panel__content">
        </view>
      </view>
      <view class="panel">
        <view class="panel__title text-lg font-bold pl-6 text-blue-500">添加遮罩层</view>
        <view class="panel__content">
        </view>
      </view>
      <view class="panel">
        <view class="panel__title text-lg font-bold pl-6 text-blue-500">Error Toast</view>
        <view class="panel__content">
        </view>
      </view>
      <view class="panel">
        <view class="panel__title text-lg font-bold pl-6 text-blue-500">Success Toast</view>
        <view class="panel__content">
        </view>
      </view>
      <view class="panel">
        <view class="panel__title text-lg font-bold pl-6 text-blue-500">Loading Toast</view>
        <view class="panel__content">
        </view>
      </view>
    </view>
    <zui-toast ref="toast" :is-opened="show" @click="toastClick" @close="toastClose" :text="text" icon="check1" :duration="3000"></zui-toast>
  </view>
</template>

<script>


export default {
  data() {
    return {
      text: '',
      show:false
    }
  },
  methods: {
    func1() {
      console.log('open toast')
      this.text = '文本内容'
      this.show = true
    },
    toastClick(e) {
      console.log(e);
      this.show = false
    },
    toastClose(){
      console.log('被关闭了')
    }
  }
};
</script>

<style>
.container {
  box-sizing: border-box;
}
</style>
