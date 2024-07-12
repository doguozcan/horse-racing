import { createStore } from 'vuex'
import adjectivesList from '../assets/adjectivesList'
import nounsList from '../assets/nounsList'
import colorsList from '@/assets/colorsList'

export default createStore({
  state: {
    horses: [],
    program: [],
    currentResult: [],
    results: [],
    resultIndex: 0
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
          suitability.push(Math.ceil(Math.random()))
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
    startRace(state) {
      // the average speed of a horse is approximately 48 km/h reference:https://www.hoofinhorse.com/horse-speed/
      // this means that an average horse can run approximately 13 meters per second
      // bold pilot's (gazi race's record holder) average speed was 16.41 meters per second reference: https://en.wikipedia.org/wiki/Bold_Pilot
      // in my algorithm, I will consider three more factors than just the condition
      // the first condition is a chance factor: a horse may perform exceptionally well and run one of its best races
      // the second condition is the fatigue factor: despite a horse's good health condition, it may be tired due to previous races
      // the third and the final factor is track suitability: a horse may perform well over shorter distances but may not perform as well over longer distances or vice-versa or well on both distances
      // we need to fine-tune these conditions carefully to ensure a fair race
      // current speed of the horse should be like this
      // average horse speed (which is 13) + (condition * 0.03) - (fatigue * 0.2) + suitability + chance (values might be change)

      // if the rounds are not finished yet
      while (state.results.length < state.program.length) {
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

        // a flag to check if the loop is over
        let roundNotFinished = true

        // while the round continues
        while (roundNotFinished) {
          // round not finished turns to false for now
          roundNotFinished = false
          for (let horseIndex = 0; horseIndex < state.currentResult.length; horseIndex++) {
            if (state.currentResult[horseIndex].meter < state.program[state.resultIndex].length) {
              state.currentResult[horseIndex].time += 1
              state.currentResult[horseIndex].meter +=
                13 +
                state.currentResult[horseIndex].horse.condition * 0.03 -
                state.currentResult[horseIndex].horse.totalRaces * 0.2 +
                state.currentResult[horseIndex].horse.suitability[state.resultIndex] +
                Math.random()

              // if current horse not finished its round, continue
              roundNotFinished = true
            }
          }
        }

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
      }

      console.log(state.results[0][0].meter, state.results[0][0].time)
      console.log(state.results[0][0].horse)

      console.log(state.results[0][1].meter, state.results[0][1].time)
      console.log(state.results[0][1].horse)

      console.log(state.results[0][2].meter, state.results[0][2].time)
      console.log(state.results[0][2].horse)

      console.log(state.results[0][3].meter, state.results[0][3].time)
      console.log(state.results[0][3].horse)

      console.log(state.results[0][4].meter, state.results[0][4].time)
      console.log(state.results[0][4].horse)

      console.log(state.results[0][5].meter, state.results[0][5].time)
      console.log(state.results[0][5].horse)

      console.log(state.results[0][6].meter, state.results[0][6].time)
      console.log(state.results[0][6].horse)

      console.log(state.results[0][7].meter, state.results[0][7].time)
      console.log(state.results[0][7].horse)

      console.log(state.results[0][8].meter, state.results[0][8].time)
      console.log(state.results[0][8].horse)

      console.log(state.results[0][9].meter, state.results[0][9].time)
      console.log(state.results[0][9].horse)

      for (let i = 0; i < 20; i++) {
        console.log(state.horses[i])
      }
    }
  },
  getters: {
    horsesLength: (state) => state.horses.length,
    programLength: (state) => state.program.length
  }
})
