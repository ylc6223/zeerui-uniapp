<template>
  <view class='container'>
    <DocsHeader title='Badge 徽标'></DocsHeader>
    <view class='doc-body'>
      <view class='panel'>
        <view class='panel__title'>无内容</view>
        <view class='panel__content'>
          <view class="flex items-center">
            <zui-badge margin="0 40rpx 0 0" dot></zui-badge>
            <zui-badge margin="0 40rpx 0 0" type="warning" dot></zui-badge>
            <zui-badge margin="0 40rpx 0 0" type="green" dot></zui-badge>
            <zui-badge margin="0 40rpx 0 0" type="danger" dot></zui-badge>
            <zui-badge margin="0 40rpx 0 0" type="white" dot></zui-badge>
            <zui-badge margin="0 40rpx 0 0" type="black" dot></zui-badge>
            <zui-badge margin="0 40rpx 0 0" type="gray" dot></zui-badge>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>无内容(放大)</view>
        <view class='panel__content'>
          <view class="flex items-center">
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="1.2" dot></zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="1.2" type="warning" dot></zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="1.2" type="green" dot></zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="1.2" type="danger" dot></zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="1.2" type="white" dot></zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="1.2" type="black" dot></zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="1.2" type="gray" dot></zui-badge>
            </view>
          </view>

        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>无内容(缩小)</view>
        <view class='panel__content'>
          <view class="flex items-center">
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="0.8" dot></zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="0.8" type="warning" dot></zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="0.8" type="green" dot></zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="0.8" type="danger" dot></zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="0.8" type="white" dot></zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="0.8" type="black" dot></zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="0.8" type="gray" dot></zui-badge>
            </view>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>数字角标</view>
        <view class='panel__content'>
          <view class="flex items-center">
            <view class="zui-badge-box">
              <zui-badge>1</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge type="warning">2</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge type="green">3</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge type="danger">4</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge type="white">5</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge type="white_red">5</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge type="black">88</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge type="gray">99+</zui-badge>
            </view>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>数字角标(放大)</view>
        <view class='panel__content'>
          <view class="flex items-center">
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="1.2">1</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="1.2" type="warning">2</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="1.2" type="green">3</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="1.2" type="danger">4</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="1.2" type="white">5</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="1.2" type="white_red">5</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="1.2" type="black">88</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="1.2" type="gray">99+</zui-badge>
            </view>
          </view>
        </view>
      </view>

      <view class='panel'>
        <view class='panel__title'>数字角标(缩小)</view>
        <view class='panel__content'>
          <view class="flex items-center">
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="0.8">1</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="0.8" type="warning">2</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="0.8" type="green">3</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="0.8" type="danger">4</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="0.8" type="white">5</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="0.8" type="white_red">5</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="0.8" type="black">88</zui-badge>
            </view>
            <view class="zui-badge-box">
              <zui-badge :scaleRatio="0.8" type="gray">99+</zui-badge>
            </view>
          </view>
        </view>

        <view class='panel'>
          <view class='panel__title'>绝对定位</view>
          <view class='panel__content'>
            <view class="flex items-center">
              <view class="zui-badge-item">
                <zui-icon name="message"></zui-icon>
                <zui-badge type="danger" absolute :scaleRatio="0.8" translateX="40%" top="-6rpx">9</zui-badge>
              </view>
              <view class="zui-badge-item">
                <zui-icon name="message"></zui-icon>
                <zui-badge type="red" absolute :scaleRatio="0.8" translateX="40%" top="-6rpx">9</zui-badge>
              </view>
              <view class="zui-badge-item">
                <zui-icon name="message"></zui-icon>
                <zui-badge type="white_red" absolute :scaleRatio="0.8" translateX="40%" top="-6rpx">9</zui-badge>
              </view>

              <view class="zui-badge-item">
                <zui-icon name="message"></zui-icon>
                <zui-badge type="danger" dot absolute top="4rpx"></zui-badge>
              </view>
            </view>
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
  }
}
</script>
<style lang="scss">
.panel__content {
  .badge-item {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    .subitem {
      display: inline-block;
      margin-left: 40px;
    }
  }
}
.zui-title {
  padding: 30rpx 0;
  font-size: 32rpx;
  color: #333;
  font-weight: bold;
}

.zui-flex-box {
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 30rpx;
}

.zui-badge-box {
  padding-right: 40rpx;
}

.zui-badge-item {
  position: relative;
  margin-right: 80rpx;
}
</style>
