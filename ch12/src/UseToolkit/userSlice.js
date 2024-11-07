import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
   name: 'user', // slice 이름 지정
   initialState: { name: '', age: 0 }, // state 초기값
   reducers: {
      setName: (state, action) => {
         state.name = action.payload
      },
      setAge: (state, action) => {
         state.age = action.payload
      },
   },
})

export default userSlice.reducer

export const { setName, setAge } = userSlice.actions
