<script setup lang="ts">
const emit = defineEmits(['click'])
const slots = defineSlots<{
  default?: () => unknown
}>()
</script>
<template>
  <button class="button" @click="onClick">
    <p v-if="slots.default" class="button__text"><slot>wqe</slot></p>
  </button>
</template>
<style lang="scss" scoped>
.button {
  display: flex;
  background: rgb(0 120 238);
  height: 50px;
  border: none;
  align-items: center;
  justify-content: center;
  width: -webkit-fill-available;
  min-width: 36px;
  padding: 6px;
  font-weight: 400;
  border-radius: 5px;
  cursor: pointer;

  .button__text {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
  }

  &:hover {
    color: #000;
    background: rgb(6, 129, 252);
    transition: background 0.3s;
  }
}

@media (max-width: 1024px) {
  .button {

    height: 42.79px;
    width: 336px;
    .button__text {
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
