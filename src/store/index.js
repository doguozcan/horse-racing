import { createStore } from 'vuex'
import adjectivesList from '../assets/adjectivesList'
import nounsList from '../assets/nounsList'
import colorsList from '@/assets/colorsList'

export default createStore({
  state: {
    horses: []
  },
  mutations: {
    generateHorses(state) {
      const adjectives = [...adjectivesList]
      const nouns = [...nounsList]
      const colors = [...colorsList]

      for (let i = 0; i < 20; i++) {
        // randomly generate adjective and noun indexes
        const adjectiveIndex = Math.floor(Math.random() * adjectives.length)
        const nounIndex = Math.floor(Math.random() * nouns.length)

        // randomly get adjective and noun values
        const adjective = adjectives[adjectiveIndex]
        const noun = nouns[nounIndex]

        // generate the name of the horse
        const name = `${adjective} ${noun}`

        // generate horses condition from a value between 1 and 100
        const condition = Math.ceil(Math.random() * 100)

        // randomly generate color index
        const colorIndex = Math.floor(Math.random() * colors.length)

        // randomly get color value name and color code values
        const { colorName, colorCode } = colors[colorIndex]

        // remove used values from arrays
        adjectives.splice(adjectiveIndex, 1)
        nouns.splice(nounIndex, 1)
        colors.splice(colorIndex, 1)

        // generate horse
        const horse = {
          name,
          condition,
          colorName,
          colorCode
        }

        // append horse to the horses array
        state.horses.push(horse)
      }
    }
  },
  getters: {
    horsesLength: (state) => state.horses.length
  }
})
