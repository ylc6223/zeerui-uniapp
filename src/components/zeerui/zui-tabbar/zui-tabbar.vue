<template>
  <view class="zui-tabbar"
        :class="{ 'zui-tabbar-fixed': isFixed, 'zui-unlined': unlined, 'zui-backdrop__filter': backdropFilter }"
        :style="{ background: backgroundColor, zIndex: isFixed ? zIndex : 'auto' }">
    <block v-for="(item, index) in tabBar" :key="index">
      <view class="zui-tabbar-item" :class="{ 'zui-item-hump': item.hump }"
            :style="{ backgroundColor: item.hump && !backdropFilter ? backgroundColor : 'none' }"
            @tap="tabbarSwitch(index, item.hump, item.pagePath, item.verify)">
        <view class="zui-icon-box" :class="{ 'zui-tabbar-hump': item.hump }">
          <image :src="current == index ? item.selectedIconPath : item.iconPath"
                 :class="[item.hump ? '' : 'zui-tabbar-icon']" v-if="!item.name"></image>
          <zui-icon :name="current===index?item.activeName:item.name" :customPrefix="item.customPrefix || ''"
                    :size="item.iconSize || iconSize" unit="rpx" :color="current == index?getActiveColor:color"
                    v-else></zui-icon>
          <view :class="[item.isDot ? 'zui-badge-dot' : 'zui-badge']"
                :style="{ color: badgeColor, backgroundColor: getBadgeBgColor }" v-if="item.num">
            {{ item.isDot ? '' : item.num }}
          </view>
        </view>
        <view class="zui-text-scale" :class="{ 'zui-text-hump': item.hump }"
              :style="{ color: current == index ? getActiveColor : color }">{{ item.text }}</view>
      </view>
    </block>
    <view :style="{ background: backgroundColor }" :class="{ 'zui-hump-box': hump }"
          v-if="hump && !unlined && !backdropFilter"></view>
  </view>
</template>

<script>
// import zuiIcon from '@/components/thorui/zui-icon/zui-icon.vue'
export default {
  name: 'zuiTabbar',
  emits: ['click'],
  // components:{
  // 	zuiIcon
  // },
  props: {
    //当前索引
    current: {
      type: Number,
      default: 0
    },
    //字体颜色
    color: {
      type: String,
      default: '#666'
    },
    //字体选中颜色
    selectedColor: {
      type: String,
      default: ''
    },
    //背景颜色
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    },
    //是否需要中间凸起按钮
    hump: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: [Number, String],
      default: 52
    },
    //固定在底部
    isFixed: {
      type: Boolean,
      default: true
    },
    tabBar: {
      type: Array,
      default () {
        return [];
      }
    },
    //角标字体颜色
    badgeColor: {
      type: String,
      default: '#fff'
    },
    //角标背景颜色
    badgeBgColor: {
      type: String,
      default: ''
    },
    unlined: {
      type: Boolean,
      default: false
    },
    //是否开启高斯模糊效果[仅在支持的浏览器有效果]
    backdropFilter: {
      type: Boolean,
      default: false
    },
    //z-index
    zIndex: {
      type: [Number, String],
      default: 9999
    }
  },
  data() {
    return {};
  },
  computed:{
    getActiveColor(){
      return this.selectedColor || (uni && uni.$zui && uni.$zui.color.primary) || '#5677fc';
    },
    getBadgeBgColor(){
      return this.badgeBgColor || (uni && uni.$zui && uni.$zui.color.pink) || '#f74d54';
    }
  },
  methods: {
    tabbarSwitch(index, hump, pagePath, verify) {
      this.$emit('click', {
        index: index,
        hump: hump,
        pagePath: pagePath,
        verify: verify
      });
    }
  }
};
</script>

<style scoped>
.zui-tabbar {
  width: 100%;
  height: 100rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.zui-backdrop__filter {
  /* Safari for macOS & iOS */
  -webkit-backdrop-filter: blur(15px);
  /* Google Chrome */
  backdrop-filter: blur(15px);
}

.zui-tabbar-fixed {
  position: fixed;
  left: 0;
  bottom: 0;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  box-sizing: content-box !important;
}

.zui-tabbar::before {
  content: ' ';
  width: 100%;
  border-top: 1px solid #b2b2b2;
  position: absolute;
  top: -1rpx;
  left: 0;
  transform: scaleY(0.5) translateZ(0);
  transform-origin: 0 0;
  display: block;
  z-index: 3;
}

.zui-tabbar-item {
  height: 100%;
  flex: 1;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 10rpx 0;
  box-sizing: border-box;
  z-index: 5;
}

.zui-icon-box {
  position: relative;
}

.zui-item-hump {
  height: 98rpx;
}

.zui-tabbar-icon {
  width: 52rpx;
  height: 52rpx;
  display: block;
}

.zui-hump-box {
  width: 120rpx;
  height: 120rpx;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -50rpx;
  border-radius: 50%;
  z-index: 4;
}

.zui-hump-box::after {
  content: ' ';
  height: 200%;
  width: 200%;
  border: 1px solid #b2b2b2;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(0.5) translateZ(0);
  transform-origin: 0 0;
  border-radius: 120rpx;
  box-sizing: border-box;
  display: block;
}

.zui-unlined::after {
  height: 0 !important;
}

.zui-tabbar-hump {
  width: 100rpx;
  height: 100rpx;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%) rotate(0deg);
  transform: translateX(-50%) rotate(0deg);
  top: -40rpx;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  border-radius: 50%;
  z-index: 5;
}

.zui-tabbar-hump image {
  width: 100rpx;
  height: 100rpx;
  display: block;
}

.zui-hump-active {
  -webkit-transform: translateX(-50%) rotate(135deg);
  transform: translateX(-50%) rotate(135deg);
}

.zui-text-scale {
  font-weight: bold;
  transform: scale(0.8);
  font-size: 25rpx;
  line-height: 28rpx;
  transform-origin: center 100%;
}

.zui-text-hump {
  position: absolute;
  left: 50%;
  bottom: 10rpx;
  transform: scale(0.8) translateX(-50%);
  transform-origin: 0 100%;
}

.zui-badge {
  position: absolute;
  font-size: 24rpx;
  height: 32rpx;
  min-width: 20rpx;
  padding: 0 6rpx;
  border-radius: 40rpx;
  right: 0;
  top: -5rpx;
  transform: translateX(70%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.zui-badge-dot {
  position: absolute;
  height: 16rpx;
  width: 16rpx;
  border-radius: 50%;
  right: -4rpx;
  top: -4rpx;
}
</style>