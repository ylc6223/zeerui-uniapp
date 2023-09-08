<template>
  <view class="container">
    <view class="slogan flex flex-col justify-center items-center">
      <image class="w-40 h-40" src="/static/ZeerUI.png"></image>
      <text class="text-lg text-blue-700">{{ title }}</text>
    </view>
    <view class="content">
      <view class="py-4 px-4 mb-4 shadow-lg flex items-center justify-between" v-for="(item,idx) in showList" :key="idx"
            @click="navigateTo(item.path,$event)">
        <view class="flex items-center">
          <view class="shrink-0 w-10 h-10 rounded-full flex items-center justify-center">
            <zui-icon name="like"></zui-icon>
          </view>
          <view class="ml-4">
            <text class="text-lg text-blue-500 block">{{ item.title }}</text>
            <text class="text-sm text-gray-500 block">{{ item.desc }}</text>
          </view>
        </view>
        <view class="shrink-0 flex items-center justify-center w-10 h-10  bg-sky-600 rounded-full">
          <zui-icon name="arrowright" color="#FFF"></zui-icon>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import ZuiCard from "@/components/zeerui/zui-card/zui-card.vue";
import ZuiIcon from "@/components/zeerui/zui-icon/zui-icon.vue";
import ZuiButton from "@/components/zeerui/zui-button/zui-button.vue";

export default {
  components: {ZuiButton, ZuiIcon, ZuiCard},
  data() {
    return {
      title: 'Zeer UI',
      cardHeader: {
        bgcolor: "#fff", //背景颜色
        line: true, //是否去掉底部线条
      },
      showList: [
        {
          icon: '',
          title: '基础',
          desc: '包含颜色、文本、图标等',
          path: '/pages/base-component/base-component'
        },
        {
          icon: '',
          title: '视图',
          desc: '包含通告栏、标签、徽标等',
          path: '/pages/view-component/view-component'
        },
        {
          icon: '',
          title: '操作反馈',
          desc: '包含对话框、进度条、动作面板等',
          path: '/pages/feedback-component/feedback-component'
        },
        {
          icon: '',
          title: '表单',
          desc: '包含输入框、单选框、复选框等',
          path: '/pages/form-component/form-component'
        }, {
          icon: '',
          title: '导航',
          desc: '包含标签栏、导航栏、分段器等',
          path: '/pages/navigation-component/navigation-component'
        }
      ]
    }
  },
  onLoad() {

  },
  methods: {
    navigateTo(url, e) {
      uni.navigateTo({
        url: url,
        success: function () {
          console.log(url)
        }
      })
    }
  }
}
</script>

<style scoped>
.content {
  margin: 0 30rpx;
}
</style>
