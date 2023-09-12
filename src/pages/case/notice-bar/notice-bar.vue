<template>
  <view class='container'>
    <DocsHeader title='NoticeBar 通告栏'></DocsHeader>
    <view class='doc-body'>
      <view class='panel'>
        <view class='panel__title'>文字</view>
        <view class='panel__content'>
          <view class='bar-item'>
            <zui-notice-bar :single="true">
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </zui-notice-bar>
          </view>
          <view class='bar-item'>
            <zui-notice-bar>
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </zui-notice-bar>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>跑马灯</view>
        <view class='panel__content'>
          <view class='bar-item'>
            <zui-notice-bar marquee>
              [纯文字]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]
            </zui-notice-bar>
          </view>
          <view class='bar-item'>
            <zui-notice-bar marquee>
              [带icon]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]
            </zui-notice-bar>
          </view>
          <view class='bar-item'>
            <zui-notice-bar marquee>
              [超长文本]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]
            </zui-notice-bar>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>图标</view>
        <view class='panel__content'>
          <view class='bar-item'>
            <zui-notice-bar icon='notification' single>
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </zui-notice-bar>
          </view>
          <view class='bar-item'>
            <zui-notice-bar icon='notification'>
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </zui-notice-bar>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>查看更多</view>
        <view class='panel__content'>
          <view class='bar-item'>
            <zui-notice-bar
                showMore
                single
                @gotoMore="onGotoMore"
            >
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </zui-notice-bar>
          </view>
          <view class='bar-item'>
            <zui-notice-bar
                showMore
                icon='notice'
                single
                @gotoMore="onGotoMore"
            >
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </zui-notice-bar>
          </view>
          <view class='bar-item'>
            <zui-notice-bar
                showMore
                moreText='更多内容'
                @gotoMore="onGotoMore"
            >
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </zui-notice-bar>
          </view>
          <view class='bar-item'>
            <zui-notice-bar
                showMore
                moreText='更多内容'
                icon='notice'
                @gotoMore="onGotoMore"
            >
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </zui-notice-bar>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>关闭按钮</view>
        <view class='panel__content'>
          <view class='bar-item'>
            <zui-notice-bar close single>
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </zui-notice-bar>
          </view>
          <view class='bar-item'>
            <zui-notice-bar close icon='notice' single>
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </zui-notice-bar>
          </view>
          <view class='bar-item'>
            <zui-notice-bar
                close
                @gotoMore="onGotoMore"
                single
                showMore
            >
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </zui-notice-bar>
          </view>
          <view class='bar-item'>
            <zui-notice-bar
                close
                icon='notice'
                showMore
                @gotoMore="onGotoMore"
                single
            >
              [单行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </zui-notice-bar>
          </view>
          <view class='bar-item'>
            <zui-notice-bar close>
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </zui-notice-bar>
          </view>
          <view class='bar-item'>
            <zui-notice-bar close>
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </zui-notice-bar>
          </view>
          <view class='bar-item'>
            <zui-notice-bar close icon='notice'>
              [多行]
              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
            </zui-notice-bar>
          </view>
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
    onGotoMore() {
      if (uni.getSystemInfoSync().platform === 'web') {
        alert('您点击了更多!')
        return
      }
      this.zui.toast('您点击了更多')
    }
  }
}
</script>

<style scoped lang="scss">
.panel__content {
  .bar-item {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
