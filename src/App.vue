<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCardsDataStore } from './stores/cardsData'
import { useTabsDataStore } from './stores/tabsData'
import ItemBlockList from './components/TabList.vue'
import InfoBlock from './components/InfoBlock.vue'
import Button from './components/Button.vue'
import { ref } from 'vue'
import Input from './components/Input.vue'

const selected = ref(1)
const form = ref({
  input1: '',
  input2: '',
  input3: '',
})

const optionsDataStore = useCardsDataStore()
const { cards } = storeToRefs(optionsDataStore)
const tabsDataStore = useTabsDataStore()
const { tabs } = storeToRefs(tabsDataStore)
</script>

<template>
  <header>
    <div class="container">
      <ItemBlockList v-model:selected="selected" :items="tabs"></ItemBlockList>
      <InfoBlock :title="cards.find(x => x.id == selected)?.title">
        <template v-slot:default>
          <div v-if="selected === 1">
            Безусловно, начало повседневной работы по формированию позиции
            способствует подготовке и реализации модели развития.<br /><br />
            <ul class="disc">
              <li>Элемент ненумерованного списка</li>
              <li>Элемент ненумерованного списка</li>
            </ul>
            <br />
            Идейные соображения высшего порядка, а также постоянное
            информационно-пропагандистское обеспечение нашей деятельности
            выявляет срочную потребность приоретизации разума над эмоциями.<br /><br />
            <ol class="decimal">
              <li>Элемент ненумерованного списка</li>
              <li>Элемент ненумерованного списка</li>
            </ol>
            <br />
            Каждый из нас понимает очевидную вещь: выбранный нами инновационный
            путь в значительной степени обусловливает важность
          </div>
          <div style="padding-right: 10px" v-if="selected === 2">
            <form>
              <Input
                v-model:value="form.input1"
                label="Имя"
                :required="true"
              ></Input>
              <Input
                v-model:value="form.input2"
                label="Имя"
                :required="true"
              ></Input>
              <Input
                v-model:value="form.input3"
                label="Имя"
                :required="true"
              ></Input>
            </form>
          </div>
          <div style="padding-right: 10px" v-if="selected === 3"></div>
        </template>
        <template v-slot:button>
          <Button>Test</Button>
        </template>
      </InfoBlock>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: auto;
}
form {
  display: flex;
  flex-direction: column;
  row-gap: 26px;
}
.disc {
  li {
    list-style-type: disc;
  }
}
.decimal {
  li {
    list-style-type: decimal;
  }
}
.container {
  display: flex;
  position: relative;
  column-gap: 45px;
  row-gap: 45px;
  padding: 140px 0px;
}

@media (max-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    row-gap: 31px;
    padding: 151px 0px;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
