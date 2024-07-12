import { createStore } from 'vuex'
import adjectivesList from '../assets/adjectivesList'
import nounsList from '../assets/nounsList'
import colorsList from '@/assets/colorsList'

export default createStore({
  state: {
    horses: [],
    program: []
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
    },
    generateProgram(state) {
      // define round lengths respectively
      const roundLengths = [1200, 1400, 1600, 1800, 2000, 2200]

      for (let roundIndex = 0; roundIndex < 6; roundIndex++) {
        // create a copy of horses
        const horsesCopy = state.horses.slice()

        // initialize empty horses array
        let tenHorses = []

        // select 10 horses randomly
        for (let horseIteration = 0; horseIteration < 10; horseIteration++) {
          // get horse index randomly
          const horseIndex = Math.floor(Math.random() * horsesCopy.length)

          // get randomly selected horse
          const randomHorse = horsesCopy[horseIndex]

          // append randomly selected horse in ten horses
          tenHorses.push(randomHorse)

          // remove selected horse from current array
          horsesCopy.splice(horseIndex, 1)
        }

        // after generating horses, generate current round
        state.program.push({ length: roundLengths[roundIndex], horses: tenHorses })
      }
    }
  },
  getters: {
    horsesLength: (state) => state.horses.length,
    programLength: (state) => state.program.length
  }
})
