<template>
  <View @click="handleClick" class="at-action-sheet__footer" :class="customClass">
    <slot></slot>
  </View>
</template>

<script>
export default {
  props: {
    customClass: {
      type: [Array, String],
      default: () => '',
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
