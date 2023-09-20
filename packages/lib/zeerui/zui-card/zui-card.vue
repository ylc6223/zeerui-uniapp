<template>
  <view class="zui-card-class zui-card" :class="[full?'zui-card-full':'',border?'zui-card-border':'']"
        @tap="handleClick" @longtap="longTap">
    <slot>
      <view class="zui-card-header" :class="{'zui-header-line':header.line}"
            :style="{background:header.bgcolor || '#fff'}">
        <view class="zui-header-left">
          <image :src="image.url" class="zui-header-thumb" :class="{'zui-thumb-circle':image.circle}"
                 mode="widthFix" v-if="image.url"
                 :style="{height:(image.height || 60)+'rpx',width:(image.width || 60)+'rpx'}"></image>
          <text class="zui-header-title"
                :style="{fontSize:(title.size || 30)+'rpx',color:(title.color || '#7A7A7A')}"
                v-if="title.text">{{title.text}}</text>
        </view>
        <view class="zui-header-right" :style="{fontSize:(tag.size || 24)+'rpx',color:(tag.color || '#b2b2b2')}"
              v-if="tag.text">
          {{tag.text}}
        </view>
      </view>
    </slot>
    <view class="zui-card-body">
      <slot name="body"></slot>
    </view>
    <view class="zui-card-footer">
      <slot name="footer"></slot>
    </view>
  </view>
</template>

<script>
export default {
  name: "zuiCard",
  emits: ['click', 'longclick'],
  props: {
    //是否铺满
    full: {
      type: Boolean,
      default: false
    },
    image: {
      type: Object,
      default: function() {
        return {
          url: "", //图片地址
          height: 60, //图片高度
          width: 60, //图片宽度
          circle: false
        }
      }
    },
    //标题
    title: {
      type: Object,
      default: function() {
        return {
          text: "", //标题文字
          size: 30, //字体大小
          color: "#7A7A7A" //字体颜色
        }
      }
    },
    //标签，时间等
    tag: {
      type: Object,
      default: function() {
        return {
          text: "", //标签文字
          size: 24, //字体大小
          color: "#b2b2b2" //字体颜色
        }
      }
    },
    header: {
      type: Object,
      default: function() {
        return {
          bgcolor: "#fff", //背景颜色
          line: false //是否去掉底部线条
        }
      }
    },
    //是否设置外边框
    border: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', {
        index: this.index
      });
    },
    longTap() {
      this.$emit('longclick', {
        index: this.index
      });
    }
  }
}
</script>

<style scoped>
.zui-card {
  margin: 0 30rpx;
  font-size: 28rpx;
  background-color: #fff;
  border-radius: 10rpx;
  box-shadow: 0 0 10rpx #eee;
  box-sizing: border-box;
  overflow: hidden;
}

.zui-card-full {
  margin: 0 !important;
  border-radius: 0 !important;
}

.zui-card-full::after {
  border-radius: 0 !important;
}

.zui-card-border {
  position: relative;
  box-shadow: none !important
}

.zui-card-border::after {
  content: ' ';
  position: absolute;
  height: 200%;
  width: 200%;
  border: 1px solid #ddd;
  transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  left: 0;
  top: 0;
  border-radius: 20rpx;
  box-sizing: border-box;
  pointer-events: none;
}

.zui-card-header {
  width: 100%;
  padding: 20rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  border-top-left-radius: 10rpx;
  border-top-right-radius: 10rpx;
}

.zui-card-header::after {
  content: '';
  position: absolute;
  border-bottom: 1rpx solid #eaeef1;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  bottom: 0;
  right: 0;
  left: 0;
  pointer-events: none;
}

.zui-header-line::after {
  border-bottom: 0 !important;
}

.zui-header-thumb {
  height: 60rpx;
  width: 60rpx;
  vertical-align: middle;
  margin-right: 20rpx;
  border-radius: 6rpx;
}

.zui-thumb-circle {
  border-radius: 50% !important;
}

.zui-header-title {
  display: inline-block;
  font-size: 30rpx;
  color: #7a7a7a;
  vertical-align: middle;
  max-width: 460rpx;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.zui-header-right {
  font-size: 24rpx;
  color: #b2b2b2;
}

.zui-card-body {
  font-size: 32rpx;
  color: #262b3a;
  box-sizing: border-box;
}

.zui-card-footer {
  font-size: 28rpx;
  color: #596d96;
  border-bottom-left-radius: 10rpx;
  border-bottom-right-radius: 10rpx;
  box-sizing: border-box;
}
</style>