import { createStore } from 'redux'
import counterReducer from './counterReducer'

// store 에 reducer 저장
const store = createStore(counterReducer)

export default store
