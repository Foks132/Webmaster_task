<script setup lang="ts">
import type { ITabsOption } from '@/interfaces/ITabsOption'
import type { PropType } from 'vue/dist/vue.js'
import Tab from './Tab.vue'

const emit = defineEmits<{
  change: [id: Number]
}>()
const slots = defineSlots<{
  default?: () => unknown
}>()
const props = defineProps({
  items: {
    type: Object as PropType<ITabsOption[]>,
    required: true,
  },
})
const selected = defineModel('selected', { type: Number, default: 1 })
function onChange(id: number) {
  emit('change', id)
  selected.value = id
}
</script>

<template>
  <div class="tab">
    <div class="tab__items">
      <Tab
        v-for="(item, index) in props.items"
        :key="index"
        :title="item.title"
        @click="onChange(item.id)"
        :selected="item.id === selected"
        >{{ item.text }}</Tab
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab {
  padding: 0px;
  .tab__items {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
}

@media (max-width: 1024px) {
  .tab {
    padding: 0px;
    .tab__items {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    }
  }
}
</style>
