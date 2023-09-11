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
<!--            <zui-notice-bar>-->
<!--              [多行]-->
<!--              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏-->
<!--            </zui-notice-bar>-->
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>跑马灯</view>
        <view class='panel__content'>
          <view class='bar-item'>
<!--            <zui-notice-bar marquee>-->
<!--              [纯文字]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]-->
<!--            </zui-notice-bar>-->
          </view>
          <view class='bar-item'>
<!--            <zui-notice-bar marquee icon='volume-plus'>-->
<!--              [带icon]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]-->
<!--            </zui-notice-bar>-->
          </view>
          <view class='bar-item'>
<!--            <zui-notice-bar marquee>-->
<!--              [超长文本]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]-->
<!--            </zui-notice-bar>-->
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>图标</view>
        <view class='panel__content'>
          <view class='bar-item'>
<!--            <zui-notice-bar icon='volume-plus' single>-->
<!--              [单行]-->
<!--              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏-->
<!--            </zui-notice-bar>-->
          </view>
          <view class='bar-item'>
<!--            <zui-notice-bar icon='volume-plus'>-->
<!--              [多行]-->
<!--              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏-->
<!--            </zui-notice-bar>-->
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>查看更多</view>
        <view class='panel__content'>
          <view class='bar-item'>
<!--            <zui-notice-bar-->
<!--                showMore-->
<!--                single-->
<!--                onGotoMore={this.onGotoMore.bind(this)}-->
<!--            >-->
<!--              [单行]-->
<!--              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏-->
<!--            </zui-notice-bar>-->
          </view>
          <view class='bar-item'>
<!--            <zui-notice-bar-->
<!--                showMore-->
<!--                icon='volume-plus'-->
<!--                single-->
<!--                onGotoMore={this.onGotoMore.bind(this)}-->
<!--            >-->
<!--              [单行]-->
<!--              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏-->
<!--            </zui-notice-bar>-->
          </view>
          <view class='bar-item'>
<!--            <zui-notice-bar-->
<!--                showMore-->
<!--                moreText='更多内容'-->
<!--                onGotoMore={this.onGotoMore.bind(this)}-->
<!--            >-->
<!--              [多行]-->
<!--              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏-->
<!--            </zui-notice-bar>-->
          </view>
          <view class='bar-item'>
<!--            <zui-notice-bar-->
<!--                showMore-->
<!--                moreText='更多内容'-->
<!--                icon='volume-plus'-->
<!--                onGotoMore={this.onGotoMore.bind(this)}-->
<!--            >-->
<!--              [多行]-->
<!--              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏-->
<!--            </zui-notice-bar>-->
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>关闭按钮</view>
        <view class='panel__content'>
          <view class='bar-item'>
<!--            <zui-notice-bar close single>-->
<!--              [单行]-->
<!--              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏-->
<!--            </zui-notice-bar>-->
          </view>
          <view class='bar-item'>
<!--            <zui-notice-bar close icon='volume-plus' single>-->
<!--              [单行]-->
<!--              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏-->
<!--            </zui-notice-bar>-->
          </view>
          <view class='bar-item'>
<!--            <zui-notice-bar-->
<!--                close-->
<!--                onGotoMore={this.onGotoMore.bind(this)}-->
<!--                single-->
<!--                showMore-->
<!--            >-->
<!--              [单行]-->
<!--              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏-->
<!--            </zui-notice-bar>-->
          </view>
          <view class='bar-item'>
<!--            <zui-notice-bar-->
<!--                close-->
<!--                icon='volume-plus'-->
<!--                showMore-->
<!--                onGotoMore={this.onGotoMore.bind(this)}-->
<!--                single-->
<!--            >-->
<!--              [单行]-->
<!--              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏-->
<!--            </zui-notice-bar>-->
          </view>
          <view class='bar-item'>
<!--            <zui-notice-bar close>-->
<!--              [多行]-->
<!--              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏-->
<!--            </zui-notice-bar>-->
          </view>
          <view class='bar-item'>
<!--            <zui-notice-bar close>-->
<!--              [多行]-->
<!--              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏-->
<!--            </zui-notice-bar>-->
          </view>
          <view class='bar-item'>
<!--            <zui-notice-bar close icon='volume-plus'>-->
<!--              [多行]-->
<!--              这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏-->
<!--            </zui-notice-bar>-->
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
      icons: {
        main: [],
      }
    }
  }
}
</script>

<style scoped>

</style>
