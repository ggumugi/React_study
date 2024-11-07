import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice' // counterSlice.reducer를 가져옴
import userSlice from './userSlice' // userSlice.reducer

const store = configureStore({
   reducer: {
      counter: counterSlice,
      user: userSlice,
   },
})

export default store
