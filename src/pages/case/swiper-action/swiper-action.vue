<template>
  <view class="container">
    <DocsHeader title="Swiper-Action 滑动菜单"></DocsHeader>
    <view class="doc-body">
      <view class="panel">
        <view class="panel__title text-lg px-6 py-4 font-bold pl-6 text-blue-500">基本使用</view>
        <view class="panel__content no-padding">
          <view class="my-2">
            <zui-swipe-action :actions="actions" @click="handlerButton">
              <template v-slot:content>
                <view class="text-lg px-6 py-4">基本使用</view>
              </template>
            </zui-swipe-action>
          </view>
        </view>
      </view>
      <view class="panel">
        <view class="panel__title text-lg px-6 py-4 font-bold pl-6 text-blue-500">点击按钮时不关闭</view>
        <view class="panel__content no-padding">
          <view class="my-2">
            <zui-swipe-action :actions="actions2" :closable="false" @click="handlerButton2">
              <template v-slot:content>
                <view class="text-lg px-6 py-4">点击按钮时不关闭</view>
              </template>
            </zui-swipe-action>
          </view>
        </view>
      </view>
      <view class="panel">
        <view class="panel__title text-lg px-6 py-4 font-bold pl-6 text-blue-500">禁止滑动展示</view>
        <view class="panel__content no-padding">
          <view class="my-2">
            <zui-swipe-action :actions="actions2" :closable="false" forbid @click="handlerButton2">
              <template v-slot:content>
                <view class="text-lg px-6 py-4">禁止滑动展示</view>
              </template>
            </zui-swipe-action>
          </view>
        </view>
      </view>
      <view class="panel">
        <view class="panel__title text-lg px-6 py-4 font-bold pl-6 text-blue-500">使用变量控制开关</view>
        <view class="panel__content no-padding">
          <switch color="#19be6b" class="ml-4" @change="switchChange"></switch>
          <view class="my-2">
            <zui-swipe-action :actions="actions2" :open="open" @click="handlerButton2">
              <template v-slot:content>
                <view class="text-lg px-6 py-4">使用变量控制开关</view>
              </template>
            </zui-swipe-action>
          </view>
        </view>
      </view>
      <view class="panel">
        <view class="panel__title text-lg px-6 py-4 font-bold pl-6 text-blue-500">可同时并存多个菜单</view>
        <view class="panel__content no-padding">
          <view class="my-2">
            <zui-swipe-action :actions="actions2" :showMask="false" @click="handlerButton2">
              <template v-slot:content>
                <view class="text-lg px-6 py-4">打开关闭互不影响</view>
              </template>
            </zui-swipe-action>
          </view>
          <view class="my-2">
            <zui-swipe-action :actions="actions2" :showMask="false" @click="handlerButton2">
              <template v-slot:content>
                <view class="text-lg px-6 py-4">打开关闭互不影响</view>
              </template>
            </zui-swipe-action>
          </view>
          <view class="my-2">
            <zui-swipe-action :actions="actions2" :showMask="false" @click="handlerButton2">
              <template v-slot:content>
                <view class="text-lg px-6 py-4">打开关闭互不影响</view>
              </template>
            </zui-swipe-action>
          </view>
        </view>
      </view>
      <view class="panel">
        <view class="panel__title text-lg px-6 py-4 font-bold pl-6 text-blue-500">自定义菜单</view>
        <view class="panel__content no-padding">
          <view class="my-2">
            <zui-swipe-action :operateWidth="140">
              <template v-slot:content>
                <view class="text-lg px-6 py-4">自定义操作菜单，不传actions</view>
              </template>
              <template v-slot:button>
                <view class="bg-gray-50 box-border flex items-center justify-center px-4 w-full h-full">
                  <view class="bg-white w-12 h-12 shrink-0 flex items-center justify-center shrink-0 rounded-full  zui-custom-mr"
                        @tap="customBtn(0)">
                    <zui-icon name="star" color="#333" :size="20"></zui-icon>
                  </view>
                  <view class="bg-white w-12 h-12 shrink-0 flex items-center justify-center shrink-0 rounded-full " @tap="customBtn(1)">
                    <zui-icon name="close" color="#333" :size="18"></zui-icon>
                  </view>
                </view>
              </template>
            </zui-swipe-action>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      actions: [
        {
          name: '删除',
          color: '#fff',
          fontsize: 30, //单位rpx
          width: 70, //单位px
          background: '#ff4949'
        },
        {
          name: '修改',
          color: '#fff',
          fontsize: 30,
          width: 70,
          background: '#6190e8'
        },
        {
          name: '收藏',
          width: 70,
          fontsize: 30,
          color: '#fff',
          background: '#7f7f7f'
        }
      ],
      actions2: [
        {
          name: '普通',
          color: '#fff',
          fontsize: 30,
          width: 70,
          background: '#C8C7CD'
        },
        {
          name: '警示',
          color: '#fff',
          fontsize: 30, //单位rpx
          width: 70, //单位px
          background: '#ff4949'
        }
      ],
      open: false
    };
  },
  methods: {
    handlerButton(e) {
      let index = e.index;
      let item = e.item;
      let menuTxt = ['删除', '修改', '收藏'][index];
      this.zui.toast('您点击了【' + menuTxt + '】按钮');
    },
    handlerButton2(e) {
      let index = e.index + 1;
      this.zui.toast('您点击了按钮' + index);
    },
    customBtn(index) {
      index = index + 1;
      this.zui.toast('您点击了按钮' + index);
    },
    switchChange: function (e) {
      this.open = e.target.value;
    }
  }
};
</script>

<style>
.container {
  box-sizing: border-box;
}

.doc-body {
  background-color: #FAFAFA;
}

.zui-custom-btn_box {
//width: 140px; //height: 100%; //padding: 0 20rpx; //box-sizing: border-box; //display: flex; //align-items: center; //justify-content: center; //background-color: #fafafa;
}

.zui-custom-btn {
//width: 100rpx; //height: 100rpx; //border-radius: 50%; //background-color: #fff; //color: #333; //display: flex; //align-items: center; //justify-content: center; //flex-shrink: 0;
}

.zui-custom-mr {
  margin-right: 20rpx;
}
</style>
