<script setup lang="ts">
const slots = defineSlots<{
  default?: () => unknown
  button?: () => unknown
}>()
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
})
</script>
<template>
  <div class="info-block">
    <div v-if="slots.default" class="info-block__content">
      <h1 class="info-block__content__title">{{ props.title }}</h1>
      <div class="info-block__content__text">
        <slot></slot>
      </div>
    </div>
    <div v-if="slots.button" class="info-block__button">
      <slot name="button"><button></button></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.info-block {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #f2f0f0;
  height: 460px;
  width: 716px;
  padding: 20px;

  .info-block__content {
    display: flex;
    flex-direction: column;
    row-gap: 17px;
    margin-bottom: 20px;
    color: #000000;
    overflow-y: auto;
    margin-bottom: 70px;

    .info-block__content__title {
      font-size: 32px;
      font-weight: 500;
      color: #2b3343;
    }

    .info-block__content__text {
      padding-right: 10px;
      font-size: 18px;
      line-height: 22.63px;
      font-weight: 400;
    }

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      width: 4px;
      border-radius: 5px;
      background-color: #adb6bf66;
    }

    &::-webkit-scrollbar-thumb {
      width: 46px;
      background: #0078ee;
      border-radius: 12px;
    }
  }

  .info-block__button {
    position: absolute;
    width: -webkit-fill-available;
    padding: 0px 21px;
    margin: 0px;
    bottom: 30px;
    left: 0px;
  }
}

@media (max-width: 1024px) {
  .info-block {
    width: 337px;
    height: 392px;

    .info-block__content {
      .info-block__content__title {
        font-size: 22px;
      }

      .info-block__content__text {
        font-size: 14px;
        line-height: 17.6px;
      }
    }

    .info-block__button {
      padding: 0px;
      top: 336px;
    }
  }
}
</style>
