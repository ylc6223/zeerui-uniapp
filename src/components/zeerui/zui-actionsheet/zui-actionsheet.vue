<template>
  <view class="at-action-sheet" :class="[isOpened?'at-action-sheet--active':'']" @touchMove="handleTouchMove">
    <view @click="close" class='at-action-sheet__overlay'/>
    <view class='at-action-sheet__container'>
      <actionsheet-header v-if="title">{{ title }}</actionsheet-header>
      <actionsheet-body>
        <slot></slot>
      </actionsheet-body>
      <actionsheet-footer v-if="cancelText" @click="handleCancel">
        {{ cancelText }}
      </actionsheet-footer>
    </view>
  </view>
</template>

<script>
import ActionsheetHeader from "@/components/zeerui/zui-actionsheet/header/actionsheet-header.vue";
import ActionsheetBody from "@/components/zeerui/zui-actionsheet/body/actionsheet-body.vue";
import ActionsheetFooter from "@/components/zeerui/zui-actionsheet/footer/actionsheet-footer.vue";

export default {
  components: {ActionsheetFooter, ActionsheetBody, ActionsheetHeader},
  props: {
    customClass: {
      type: [Array, String],
      default: () => ''
    },
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    isOpened: {
      type: Boolean,
      default: false
    },
    onCancel: {
      type: Function
    }
  },
  computed: {},
  watch: {
    isOpened(newValue, oldValue) {
      if (newValue !== this.IsOpen) {
        this.IsOpen = newValue
        !newValue && this.handleClose()
      }
    }
  },
  data() {
    return {
      IsOpen: this.isOpened
    };
  },
  methods: {
    close() {
      this.IsOpen = false
      this.handleClose()
    },
    handleClose() {
      this.$emit('close')
    },
    handleCancel() {
      if (typeof this.onCancel === 'function') {
        return this.$emit('cancel')
      }
      this.close()
    },
    handleTouchMove(e) {
      e.stopPropagation()
      e.preventDefault()
    }
  }
}
</script>

<style lang="scss">
@import "src/common/variable.scss";
</style>
