<script setup lang="ts">
import IconArrow from '@/icons/IconArrow.vue'

const slots = defineSlots<{
  default?: () => unknown
}>()
const emit = defineEmits<{
  change: [id: number]
}>()
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  selected: {
    type: Boolean,
    required: false,
  },
})
</script>
<template>
  <div :selected="selected" class="item-block">
    <div class="item-block__container">
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <h3 class="item-block__title">{{ props.title }}</h3>
        <div class="item-block__button" :selected="selected">
          <IconArrow
            :selected="selected"
            class="item-block__button__icon"
            color="#FFFFFF"
            rotation="right"
          />
        </div>
      </div>
      <div v-if="slots.default" class="item-block__text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.item-block {
  position: relative;
  height: 140px;
  width: 718px;
  background-color: #f2f0f0;
  color: #000;
  cursor: pointer;

  .item-block__container {
    display: flex;
    flex-direction: column;
    user-select: none;
    padding: 20px 26px;
    row-gap: 26px;
  }

  .item-block__title {
    font-size: 24px;
    font-weight: 500;
  }
  .item-block__text {
    font-size: 16px;
    font-weight: 400;
  }
  .item-block__button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 27px;
    width: 27px;
    background: none;
    border-radius: 5px;

    .item-block__button__icon {
      fill: none;
      &[selected='true'] {
        fill: none;
      }
    }
    &[selected='true'] {
      background: none;
    }
  }

  &[selected='true'] {
    color: #fff;
    background-color: #0078ee;
  }
  &:hover {
    color: #fff;
    background-color: #0078ee;
    transition:
      background-color 0.3s,
      color 0.3s;
  }
}

@media (max-width: 1024px) {
  .item-block {
    height: 140px;
    width: 336px;

    .item-block__container {
      padding: 20px;
      row-gap: 30px;
    }

    .item-block__title {
      font-size: 20px;
    }
    .item-block__text {
      font-size: 12px;
      line-height: 14.76px;
      width: 296px;
    }
    .item-block__button {
      background: #0078ee;

      .item-block__button__icon {
        fill: #fff;
        &[selected='true'] {
          fill: #0078ee;
        }
      }
      &[selected='true'] {
        background: #fff;
      }
    }
  }
}
</style>
