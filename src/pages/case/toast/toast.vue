<template>
  <view class="container">
    <DocsHeader title="Toase 轻提示"></DocsHeader>
    <view class="doc-body">
      <view class="panel">
        <view class="panel__title text-lg font-bold pl-6 text-blue-500">基本案例</view>
        <view class="panel__content">
          <view class="my-4">
            <zui-button @click="handleClick(0,$event)">文本Toast</zui-button>
          </view>
          <view class="my-4">
            <zui-button @click="handleClick(1,$event)"> 文本 + ICON</zui-button>
          </view>
        </view>
      </view>
      <view class="panel">
        <view class="panel__title text-lg font-bold pl-6 text-blue-500">自定义图片</view>
        <view class="panel__content">
          <zui-button @click="handleClick(2,$event)">自定义图片 Toast</zui-button>
        </view>
      </view>
      <view class="panel">
        <view class="panel__title text-lg font-bold pl-6 text-blue-500">添加遮罩层</view>
        <view class="panel__content">
          <zui-button @click="handleClick(3,$event)">添加遮罩层 Toast</zui-button>
        </view>
      </view>
      <view class="panel">
        <view class="panel__title text-lg font-bold pl-6 text-blue-500">Error Toast</view>
        <view class="panel__content">
          <zui-button @click="handleClick(4,$event)">错误提示 Toast</zui-button>
        </view>
      </view>
      <view class="panel">
        <view class="panel__title text-lg font-bold pl-6 text-blue-500">Success Toast</view>
        <view class="panel__content">
          <zui-button @click="handleClick(5,$event)">错误提示 Toast</zui-button>
        </view>
      </view>
      <view class="panel">
        <view class="panel__title text-lg font-bold pl-6 text-blue-500">Success Toast</view>
        <view class="panel__content">
          <zui-button @click="handleClick(6,$event)">加载中 Toast</zui-button>
        </view>
      </view>
    </view>
    <zui-toast ref="toast" :is-opened="isOpen" @close="handleClose" :text="text" :icon="icon" :image="image"
               :has-mask="hasMask" :status="status"
               :duration="duration"></zui-toast>
  </view>
</template>

<script>


export default {
  data() {
    return {
      text: '',
      isOpen: false,
      icon: '',
      image: '',
      hasMask: false,
      duration: 1500,
      status: ''
    }
  },
  methods: {
    handleClick(idx, e) {
      if (this.isOpen) {
        this.isOpen = false
        return
      }
      this.isOpen = true
      switch (idx) {
        case 0:
          this.text = '文本内容'
          this.icon = ''
          this.image = ''
          this.hasMask = false
          this.status = ''
          break;
        case 1:
          this.text = '文本内容'
          this.icon = 'check1'
          this.image = ''
          this.hasMask = false
          this.status = ''
          break;
        case 2:
          this.text = 'ZeerUI'
          this.icon = ''
          this.image = '/static/images/icon.png'
          this.hasMask = false
          this.status = ''
          break;
        case 3:
          this.text = '透明遮罩层的作用在于不可点击下面的元素'
          this.icon = ''
          this.image = ''
          this.hasMask = true
          this.status = ''
          break;
        case 4:
          this.text = '错误提示'
          this.icon = ''
          this.image = ''
          this.hasMask = true
          this.status = 'error'
          break;
        case 5:
          this.text = '正确提示'
          this.icon = ''
          this.image = ''
          this.hasMask = true
          this.status = 'success'
          break;
        case 6:
          this.text = '加载中'
          this.icon = ''
          this.image = ''
          this.hasMask = true
          this.status = 'loading'
          break;
        default:
          break
      }
    },
    handleClose() {
      this.isOpen = false
    }
  }
};
</script>

<style>
.container {
  box-sizing: border-box;
}
</style>
