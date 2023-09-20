<template>
  <view class="at-action-sheet__header" :class="customClass">
    <slot></slot>
  </view>
</template>

<script>
export default {
  props: {
    customClass: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {};
  },
}
</script>

<style lang="scss">
@import "src/common/variable.scss";
</style>
