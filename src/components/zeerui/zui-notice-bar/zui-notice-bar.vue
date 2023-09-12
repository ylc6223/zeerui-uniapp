<template>
  <view
      v-if="show"
      class="zui-noticebar"
      :class="{
        'zui-noticebar--marquee': marquee,
        'zui-noticebar--weapp': marquee && (isWEAPP || isALIPAY),
        'zui-noticebar--single': !marquee && single
      }"
      :style="customStyle"
  >
    <view
        v-if="close"
        class='zui-noticebar__close'
        @click="onClose"
    >
      <text class='zui-icon zui-icon-close1'></text>
    </view>
    <view class='zui-noticebar__content'>
      <view v-if="icon" class='zui-noticebar__content-icon'>
        <text class="zui-icon" :class="['zui-icon-'+icon]"></text>
      </view>
      <view class='zui-noticebar__content-text'>
        <view
            :id="animElemId"
            :animation="animationData"
            class="zui-noticebar__content-inner"
            :class="{animElemId:marquee}"
            :style="{
              'animation-duration':marquee?dura+'s':'0s'
            }"
        >
          <slot></slot>
        </view>
      </view>
    </view>
    <view
        v-if="showMORE"
        class='zui-noticebar__more'
        @click="onGotoMore"
    >
      <text class='text'>{{ moreText }}</text>
      <view class='zui-noticebar__more-icon'>
        <text class='zui-icon zui-icon-chevron-right'></text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'zui-notice-bar',
  emits: ['close', 'goto-more'],
  props: {
    close: {
      type: Boolean,
      default: false
    },
    single: {
      type: Boolean,
      default: false
    },
    marquee: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 100
    },
    moreText: {
      type: String,
      default: '查看详情'
    },
    showMore: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'notice'
    },
    customStyle: {
      type: Object,
      default: () => ({})
    },
  },
  data() {
    return {
      timeout: null,
      interval: null,
      show: true,
      colse: true,
      animElemId: `J_${Math.ceil(Math.random() * 10e5).toString(36)}`,
      animationData: {
        actions: [{}]
      },
      dura: 15,
      isWEAPP: uni.getSystemInfoSync().platform === 'weapp',
      isALIPAY: uni.getSystemInfoSync().platform === 'alipay',
      isWEB: uni.getSystemInfoSync().platform === 'web',
    }
  },
  computed: {
    showMORE() {
      return this.single
    },
  },
  methods: {
    onClose(e) {
      this.show = false;
      this.$emit('close', e);
    },
    onGotoMore(e) {
      this.$emit('goto-more', e);
    },
    initAnimation() {
      const self = this
      const isWEAPP = this.isWEAPP
      const isALIPAY = this.isALIPAY
      this.timeout = setTimeout(() => {
        self.timeout = null
        if (self.isWEB) {
          const speed = self.speed
          const elem = document.querySelector(`.${self.animElemId}`)
          if (!elem) return
          const width = elem.getBoundingClientRect().width
          const dura = width / +speed
          self.dura = dura
        } else if (isWEAPP || isALIPAY) {
          const query = uni.createSelectorQuery()
          query
              .select(`.${self.animElemId}`)
              .boundingClientRect()
              .exec(res => {
                const queryRes = res[0]
                if (!queryRes) return
                const {width} = queryRes
                const speed = self.speed
                const dura = width / +speed
                const animation = uni.createAnimation({
                  duration: dura * 1000,
                  timingFunction: 'linear'
                })
                const resetAnimation = uni.createAnimation({
                  duration: 0,
                  timingFunction: 'linear'
                })
                const resetOpacityAnimation = uni.createAnimation({
                  duration: 0,
                  timingFunction: 'linear'
                })
                const animBody = () => {
                  resetOpacityAnimation.opacity(0).step()
                  self.animationData = resetOpacityAnimation.export()

                  setTimeout(() => {
                    resetAnimation.translateX(0).step()
                    self.animationData = resetAnimation.export()
                  }, 300)

                  setTimeout(() => {
                    resetOpacityAnimation.opacity(1).step()
                    self.animationData = resetOpacityAnimation.export()
                  }, 600)

                  setTimeout(() => {
                    animation.translateX(-width).step()
                    self.animationData = animation.export()
                  }, 900)
                }
                animBody()
                self.interval = setInterval(animBody, dura * 1000 + 1000)
              })
        }
      }, 1000)
    }
  },
  watch: {
    $props: {
      handler() {
        if (!this.timeout) {
          this.interval && clearInterval(this.interval);
          this.initAnimation();
        }
      },
      deep: true,
    },
    marquee(newVal, oldVal) {
      if (newVal) {
        this.close = false
      }
    }
  },
  mounted() {
    if (!this.marquee) return
    this.initAnimation()
  },
}
</script>

<style scoped lang="scss">
@import "../../../common/variable.scss";

.zui-noticebar {
  position: relative;
  padding: $spacing-v-sm $spacing-h-lg;
  color: $at-noticebar-text-color;
  font-size: 0;
  background: $at-noticebar-bg-color;

  /* elements */
  &__content {
    line-height: $line-height-zh;
    word-break: break-all;
    word-wrap: break-word;

    &-icon {
      display: inline-block;
      margin-right: 12px;
      vertical-align: top;

      .zui-icon {
        font-size: $at-noticebar-icon-size;
        line-height: $at-noticebar-font-size * 1.5;
      }
    }

    &-text {
      display: inline;
      font-size: $at-noticebar-font-size;
    }

    &-inner {
      display: inline;
    }
  }

  &__close {
    position: absolute;
    top: 50%;
    left: $spacing-h-lg;
    width: $at-noticebar-btn-close-size;
    height: $at-noticebar-btn-close-size;
    transform: translate3d(0, -50%, 0);

    .zui-icon {
      color: $at-noticebar-btn-close-color;
      font-size: $at-noticebar-btn-close-size;
    }

    + .zui-noticebar__content {
      margin-left: 50px;
    }
  }

  &__more {
    color: $color-grey-2;
    font-size: 0;

    .text {
      font-size: $at-noticebar-font-size;
      line-height: $line-height-zh;
      vertical-align: middle;
    }

    &-icon {
      display: inline-block;
      width: $at-noticebar-font-size;
      vertical-align: middle;
      overflow: hidden;

      .zui-icon {
        font-size: $at-noticebar-font-size;
      }
    }
  }

  /* modifiers */
  &--single {
    display: flex;
    justify-content: space-between;

    .zui-noticebar__content {
      flex: 1;
      display: flex;
      flex-direction: row;
      overflow: hidden;

      &-text {
        display: flex;
        overflow: hidden;
      }

      &-inner {
        flex: 1;
        @include line(1);
      }
    }
  }

  &--marquee {
    .zui-noticebar__content {
      display: flex;
      flex-direction: row;
      justify-content: center;
      overflow: hidden;

      &-text {
        flex: 1;
        overflow: hidden;
      }

      &-inner {
        display: inline-block;
        white-space: nowrap;
        padding-left: 100%;
        height: $at-noticebar-font-size * 1.5;
        animation: marquee 1s linear infinite both;
        transform: translateZ(0);
      }
    }
  }

  &--more {
    .zui-noticebar__content {
      max-width: 525px;
    }
  }

  &--weapp {
    .zui-noticebar__content-inner {
      animation: none;
    }
  }
}

@keyframes marquee {
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
