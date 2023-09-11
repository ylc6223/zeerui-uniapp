<template>
  <view
      v-if="show"
      :class="rootClasses"
  >
    <!-- close icon -->
    <view
        v-if="close_"
        class="at-noticebar__close"
        @tap="onClose"
    >
      <text class="at-icon at-icon-close" />
    </view>

    <!-- content -->
    <view class="at-noticebar__content">
      <!-- icon -->
      <view
          v-if="icon"
          class="at-noticebar__content-icon"
      >
        <text :class="iconClasses" />
      </view>

      <!-- text -->
      <view class="at-noticebar__content-text">
        <!-- default content slot -->
        <view
            :id="animationElId"
            :animation="animationData"
            :class="innerContentClasses"
            :style="animationStyle"
        >
          <slot />
        </view>

        <!-- show more content -->
        <view
            v-if="showMore_"
            class="at-noticebar__more"
            @tap="onGotoMore"
        >
          <text class="text">{{ moreText }}</text>

          <view class="at-noticebar__more-icon">
            <text class="at-icon at-icon-chevron-right" />
          </view>
        </view>
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
    showMore: {
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
    icon: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      timeout: null,
      interval: null,
      dura: 15,
      show: true,
      close_: this.marquee ? false : this.close,
      showMore_: !this.single ? false : this.showMore,
      animationElId: `J_${Math.ceil(Math.random() * 10e5).toString(36)}`,
      animationData: {
        actions: [{}]
      },
      isWEAPP: uni.getSystemInfoSync().platform === 'weapp',
      isALIPAY: uni.getSystemInfoSync().platform === 'alipay',
      isWEB: uni.getSystemInfoSync().platform === 'web',
    }
  },
  computed: {
    rootClasses() {
      return {
        'at-noticebar': true,
        'at-noticebar--marquee': this.marquee,
        'at-noticebar--weapp': this.marquee && (!this.isWEB),
        'at-noticebar--single': !this.marquee && this.single

      }
    },
    iconClasses() {
      return {
        'at-noticebar__content-inner': true,
        [`${this.animationElId}`]: this.marquee
      }
    }
    ,
    innerContentClasses() {
      return {
        'at-icon': true,
        [`at-icon-${this.icon}`]: Boolean(this.icon)
      }
    }
    ,
    animationStyle() {
      const style = {};
      if (this.marquee) {
        style['animation-duration'] = `${this.dura}s`;
        style['-webkit-animation-duration'] = `${this.dura}s`;
      }
      return style;
    }
    ,
  },
  methods: {
    onClose(event) {
      this.show = false;
      this.$emit('close', event);
    },
    onGotoMore(event) {
      this.$emit('goto-more', event);
    },
    initWebAnimation() {
      const self = this
      const elem = document.querySelector(`.${self.animationElId}`)

      if (!elem) return

      const width = elem.getBoundingClientRect().width
      self.dura = width / +self.speed
    },
    initMiniAppAnimation() {
      const self = this
      const query = uni.createSelectorQuery()
      query
          .select(`.${self.animationElId}`)
          .boundingClientRect()
          .exec(res => {
            const queryRes = res[0]
            if (!queryRes) return

            const {width} = queryRes
            const dura = width / +self.speed

            const animation = uni.createAnimation({
              duration: dura * 1000,
            })

            const resetAnimation = uni.createAnimation({
              duration: 0,
            })

            const resetOpacityAnimation = uni.createAnimation({
              duration: 0,
            })

            const animateBody = () => {
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

            animateBody()
            self.interval = setInterval(animateBody, dura * 1000 + 1000)
          })
    },
    initAnimation() {
      const self = this
      self.timeout = setTimeout(() => {
        self.timeout = null

        if (self.isWEB) self.initWebAnimation()
        else self.initMiniAppAnimation()
      }, 100)
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
  },
  mounted() {
    if (!this.marquee) return
    this.initAnimation()
  },
}
</script>

<style scoped lang="scss">
//@import "../../../common/variable.scss";

.panel__content {
  .bar-item {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.at-noticebar {
  position: relative;
  //padding: $spacing-v-sm $spacing-h-lg;
  padding: 12px 24px;
  //color: $at-noticebar-text-color;
  color: #DE8C17;
  font-size: 0;
  //background: $at-noticebar-bg-color;
  background: #FCF6ED;
}

@keyframes marquee {
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
