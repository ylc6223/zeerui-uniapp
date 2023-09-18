<template>
  <view class="at-action-sheet__item" :class="customClass" @click="handleClick">
    <slot></slot>
  </view>
</template>

<script>
export default {
  emits: ['click'],
  props: {
    customClass: {
      type: [Array, String],
      default: () => ''
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
@import "src/common/variable.scss";
</style>
