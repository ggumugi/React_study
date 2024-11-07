import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
   name: 'counterSlice', // slice의 이름 지정
   initialState: { value: 0 }, // state의 초기값
   reducers: {
      // reducer
      up: (state, action) => {
         state.value += action.payload
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})

export default counterSlice.reducer // reducer를 내보냄

export const { up, down } = counterSlice.actions // reducers 안에 정의한 up, down 함수를 내보냄
