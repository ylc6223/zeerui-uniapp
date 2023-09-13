<template>
  <view class="container">
    <DocsHeader title="Toase 轻提示"></DocsHeader>
    <view class="doc-body">
      <view class="panel">
        <view class="panel__title text-lg font-bold pl-6 text-blue-500">弹框</view>
        <view class="panel__content">
          <zui-toast is-opened @click="toastClick" text="消息提示" icon="check1" :duration="3000*20"></zui-toast>
        </view>
      </view>
    </view>
  </view>
</template>

<script>

export default {
  data() {
    return {}
  },
  methods: {
    toastClick(e){
      console.log(e);
    }
  }
};
</script>

<style>
.container {
  box-sizing: border-box;
}
</style>
