import type { ITabs } from '@/interfaces/ITabs'
import { defineStore } from 'pinia'

export const useTabsDataStore = defineStore('tabsData', {
    state: () => ({
        /** @type {{ id: number, title: string, text: string }[]} */
        tabs: [
            {
                id: 1,
                title: 'Заголовок таба 1',
                text: 'Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов',
            },
            {
                id: 2,
                title: 'Заголовок таба 2',
                text: 'Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов',
            },
            {
                id: 3,
                title: 'Заголовок таба 3',
                text: 'Равным образом, высококачественный прототип будущего проекта способствует повышению качества анализа существующих паттернов',
            },
        ] as Array<ITabs>,
    }),
    getters: {
        allTabs(state) {
            return state.tabs
        },
    },
})
