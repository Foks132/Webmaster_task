import type { ICards } from '@/interfaces/ICards'
import { defineStore } from 'pinia'

export const useCardsDataStore = defineStore('cardsData', {
  state: () => ({
    /** @type {{ id: number, title: string }[]} */
    cards: [
      {
        id: 1,
        title: 'Контент таба 1',
      },
      {
        id: 2,
        title: 'Контент таба 2',
      },
      {
        id: 3,
        title: 'Контент таба 3',
      },
    ] as Array<ICards>,
  }),
  getters: {
    allCards(state) {
      return state.cards
    },
  },
})
