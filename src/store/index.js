import { createStore } from 'vuex'
import adjectivesList from '../assets/adjectivesList'
import nounsList from '../assets/nounsList'
import colorsList from '@/assets/colorsList'

export default createStore({
  state: {
    horses: [],
    program: [],
    currentResult: [],
    currentTime: '0.0',
    results: [],
    resultIndex: 0,
    raceInterval: null
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

        // generate horses suitability for different lengths
        let suitability = []
        for (let i = 0; i < 6; i++) {
          suitability.push(Math.floor(Math.random() * 100))
        }

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
          suitability,
          totalRaces: 0,
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

      for (let roundIndex = 0; roundIndex < roundLengths.length; roundIndex++) {
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
    },
    setRaceInterval(state, data) {
      state.raceInterval = data
    },
    stopRace(state) {
      clearInterval(state.raceInterval)
      state.raceInterval = null
    },
    incrementCurrentTime(state) {
      state.currentTime = (parseFloat(state.currentTime) + 0.1).toFixed(1)
    }
  },
  actions: {
    async startRace({ state, commit }) {
      // the average speed of a horse is approximately 48 km/h reference:https://www.hoofinhorse.com/horse-speed/
      // this means that an average horse can run approximately 13 meters per second in other words 1.3 meters per 100ms
      // bold pilot's (gazi race's record holder) average speed was 16.41 meters per second reference: https://en.wikipedia.org/wiki/Bold_Pilot
      // in my algorithm, I will consider three more factors than just the condition
      // the first condition is a chance factor: a horse may perform exceptionally well and run one of its best races
      // the second condition is the fatigue factor: despite a horse's good health condition, it may be tired due to previous races
      // the third and the final factor is track suitability: a horse may perform well over shorter distances but may not perform as well over longer distances or vice-versa or well on both distances
      // we need to fine-tune these conditions carefully to ensure a fair race
      // current speed of the horse should be like this
      // average horse speed (which is 1.3 m in 100ms) + (condition * 0.004) - (fatigue * 0.01) + (suitability * 0.001) + chance (between 0 and 0.01) (values might be optimized)

      // if the rounds are not finished yet
      const interval = setInterval(() => {
        if (state.results.length < state.program.length) {
          // if the current round is not started yet
          if (state.currentResult.length === 0) {
            // fill currentResult values with appropriate program values
            for (let i = 0; i < state.program[state.resultIndex].horses.length; i++) {
              state.currentResult.push({
                horse: state.program[state.resultIndex].horses[i],
                meter: 0,
                time: 0
              })
            }
          }

          let roundOver = true

          for (let horseIndex = 0; horseIndex < state.currentResult.length; horseIndex++) {
            if (state.currentResult[horseIndex].meter < state.program[state.resultIndex].length) {
              state.currentResult[horseIndex].time += 1
              state.currentResult[horseIndex].meter +=
                1.3 +
                state.currentResult[horseIndex].horse.condition * 0.004 -
                state.currentResult[horseIndex].horse.totalRaces * 0.01 +
                state.currentResult[horseIndex].horse.suitability[state.resultIndex] * 0.001 +
                Math.random() * 0.01
              roundOver = false
            }
          }

          commit('incrementCurrentTime')

          if (roundOver) {
            // sort current result based on finish time
            state.currentResult.sort((a, b) => a.time - b.time)

            // increase the number of races of horses
            for (let horseIndex = 0; horseIndex < state.currentResult.length; horseIndex++) {
              const indexOfWantedHorse = state.horses.findIndex(
                (horse) => horse.name === state.currentResult[horseIndex].horse.name
              )

              state.horses[indexOfWantedHorse].totalRaces += 1
            }

            // jump right into the next round
            state.resultIndex += 1

            // append current results to final results array
            state.results.push(state.currentResult)

            // empty out the current results array
            state.currentResult = []

            state.currentTime = 0
          }
        } else {
          commit('stopRace')
        }
      }, 10)

      commit('setRaceInterval', interval)
    }
  },
  getters: {
    horsesLength: (state) => state.horses.length,
    programLength: (state) => state.program.length,
    resultsLength: (state) => state.results.length,
    getRaceInterval: (state) => state.raceInterval,
    getCurrentRoundLength: (state) => [1200, 1400, 1600, 1800, 2000, 2200][state.resultIndex]
  }
})
