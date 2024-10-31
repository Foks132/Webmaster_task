<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  required: {
    type: Boolean,
    required: false,
  },
})
const value = defineModel('value', {
  type: String,
  required: true,
})
</script>
<template>
  <div class="input-control">
    <input
      class="input-control__input"
      :required="props.required"
      type="text"
      v-model="value"
    />
    <label class="input__label"
      >{{ props.label }}{{ props.required ? '*' : '' }}</label
    >
  </div>
</template>
<style lang="scss" scoped>
.input-control {
  position: relative;
  height: 45px;
  line-height: 45px;

  .input__label {
    position: absolute;
    z-index: 2;
    top: 0px;
    left: 19px;
    color: #adb6bf;
    font-size: 14px;
    transition: 0.2s ease;
  }

  input:focus + .input__label {
    transform: translate(0, -9px);
    font-size: 12px;
  }

  input:valid + .input__label {
    transform: translate(0, -9px);
    font-size: 12px;
  }

  .input-control__input {
    position: relative;
    display: flex;
    font-size: 14px;
    height: 45px;
    line-height: 45px;
    width: 295px;
    border-radius: 10px;
    border: none;
    padding: 0px 19px;
    box-sizing: border-box;
    padding: 10px 19px 0px 19px;
    z-index: 1;

    &::placeholder {
      font-size: 12px;
      color: #adb6bf;
    }
    &:hover {
      border: #0078ee solid 1px;
    }
    &[select] {
      border: #0078ee solid 1px;
    }
    &:focus-within {
      box-sizing: inherit;
      font-size: 14px;
      outline: none;
      border: #0078ee solid 1px;
      &::placeholder {
        color: transparent;
      }
    }
  }
}
</style>
