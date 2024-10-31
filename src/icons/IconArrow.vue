<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  color: {
    type: String,
    required: false,
    default() {
      return 'black'
    },
  },
  opacity: {
    type: Number,
    required: false,
    default() {
      return 1
    },
  },
  rotation: {
    type: String as PropType<'left' | 'top' | 'right' | 'bottom'>,
    required: false,
    default() {
      return 'bottom'
    },
  },
})
</script>
<template>
  <svg
    width="20px"
    height="20px"
    :fill="props.color"
    :fill-opacity="props.opacity"
    :rotation="props.rotation"
    xmlns="http://www.w3.org/2000/svg"
    class="icon-arrow"
  >
    <path
      d="M10.0006 10.9761L14.1254 6.85138L15.3039 8.02989L10.0006 13.3332L4.69727 8.02989L5.87578 6.85138L10.0006 10.9761Z"
    />
  </svg>
</template>

<style lang="scss" scoped>
.icon-arrow {
  &[rotation='left'] {
    transform: rotateZ(90deg);
  }

  &[rotation='top'] {
    transform: rotateZ(180deg);
  }

  &[rotation='right'] {
    transform: rotateZ(-90deg);
  }
}
</style>
