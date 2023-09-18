<template>
  <view class='container'>
    <DocsHeader title='ActionSheet 动作面板'></DocsHeader>
    <view class='doc-body'>
      <view class='panel'>
        <view class='panel__title'>无标题</view>
        <view class='panel__content'>
          <zui-button margin="36rpx 0 0" type="success" shape="circle" @click="handleClick(1,$event)">
            打开 ActionSheet
          </zui-button>
        </view>
      </view>
      <view class='panel'>
        <view class='panel__title'>含标题</view>
        <view class='panel__content'>
          <zui-button margin="36rpx 0 0" type="success" shape="circle" @click="handleClick(2,$event)">
            打开 ActionSheet
          </zui-button>
        </view>
      </view>
      <view class='panel'>
        <view class='panel__title'>自定义选项</view>
        <view class='panel__content'>
          <zui-button margin="36rpx 0 0" type="success" shape="circle" @click="handleClick(3,$event)">
            打开 ActionSheet
          </zui-button>
        </view>
      </view>
    </view>
    <zui-actionsheet
        cancelText='取消'
        :is-opened="isOpened1"
        @close="handleClose(1,$event)"
    >
      <actionsheet-item
          @click="zui.toast('点击了按钮一')"
      >
        按钮一
      </actionsheet-item>
      <actionsheet-item
          @click="zui.toast('点击了按钮二')"
      >
        按钮二
      </actionsheet-item>
    </zui-actionsheet>

    <zui-actionsheet
        cancelText='取消'
        :is-opened="isOpened2"
        @close="handleClose(2,$event)"
        title="清除位置信息后， 别人将不能查看到你"
    >
      <actionsheet-item
          @click="zui.toast('点击了按钮一')"
      >
        按钮一
      </actionsheet-item>
      <actionsheet-item
          @click="zui.toast('点击了按钮二')"
      >
        按钮二
      </actionsheet-item>
    </zui-actionsheet>
    <zui-actionsheet
        cancelText='取消'
        :is-opened="isOpened3"
        :on-cancel="handleCancel"
        @cancel="handleCancel"
        @close="handleClose(3,$event)"
        title="清除位置信息后， 别人将不能查看到你"
    >
      <actionsheet-item
          @click="zui.toast('点击了按钮一')"
      >
        按钮一
      </actionsheet-item>
      <actionsheet-item
          @click="zui.toast('点击了按钮二')"
      >
        按钮二
      </actionsheet-item>
      <actionsheet-item
          @click="zui.toast('成功清除位置')"
      >
        <text class="danger">
          清除位置信息并退出
        </text>
      </actionsheet-item>
    </zui-actionsheet>
  </view>
</template>
<script>
import ZuiActionsheet from "@/components/zeerui/zui-actionsheet/zui-actionsheet.vue";
import actionsheetItem from "@/components/zeerui/zui-actionsheet/body/actionsheet-item/actionsheet-item.vue";

export default {
  components: {actionsheetItem, ZuiActionsheet},
  data() {
    return {
      isOpened1: false,
      isOpened2: false,
      isOpened3: false,
    }
  },
  methods: {
    handleClick(idx, e) {
      this[`isOpened${idx}`] = true
    },
    handleClose(idx, e) {
      this[`isOpened${idx}`] = false
      this.zui.toast(`第 ${idx} 个Action Sheet已经关闭`)
    },
    handleCancel() {
      this.zui.toast('点击了取消按钮')
    }
  }
}
</script>
<style lang="scss">
@import "src/common/variable.scss";

$at-action-sheet-duration: 300ms;

.at-action-sheet {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: $zindex-action-sheet;
  visibility: hidden;
  transition: visibility $at-action-sheet-duration $timing-func;

  /* elements */
  &__overlay {
    @include overlay;

    opacity: 0;
    transition: opacity $at-action-sheet-duration ease-in;
  }

  &__container {
    position: absolute;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: $color-white;
    transform: translate3d(0, 100%, 0);
    transition: transform $at-action-sheet-duration $timing-func;
  }

  &__header {
    padding: $spacing-v-lg $spacing-h-lg;
    color: $color-black-3;
    font-size: $font-size-base;
    text-align: center;
    line-height: $line-height-zh;
    @include hairline-bottom();
  }

  &__footer {
    padding: $spacing-v-lg $spacing-h-lg;
    font-size: $font-size-xl;
    border-top: 12px solid rgba($color: $color-border-base, $alpha: 0.3);
    @include active();
  }

  &__body {
    text-align: center;
  }

  &__item {
    padding: $spacing-v-lg $spacing-h-lg;
    font-size: $font-size-xl;
    @include active();
    @include line(1);
    @include hairline-bottom-relative();
  }

  /* modifiers */
  &--active {
    visibility: visible;

    .at-action-sheet__overlay {
      opacity: 1;
    }

    .at-action-sheet__container {
      transform: translate3d(0, 0, 0);
    }
  }

  .danger {
    color: $color-error;
  }
}

</style>
