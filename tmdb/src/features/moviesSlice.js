import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies } from '../api/tmdbApi'

// createAsyncThunk() : 영화 목록을 api로 부터 가져온다(비동기 액션 처리)
// createAsyncThunk(액션의 타입명 지정, 비동기 함수로 api 호출)
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
   const response = await getMovies()
   return response.data.results // action.payload
})

const moviesSlice = createSlice({
   name: 'moves',
   initialState: {
      loading: false, // 로딩 상태
      movies: [], // 영화 목록 데이터가 저장될 배열
      error: null, // 에러 메시지
   },
   reducers: {},

   // extraReducers : 비동기 액션의 각 state를 업데이트
   // 비동기 통신에 대한 액션처리는 createAsyncThunk가 해줌
   // 비동기 액션은 아래와 같이 크게 세 가지가 있음
   extraReducers: (builder) => {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
         }) // 데이터를 가져오는 동안
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            state.movies = action.payload // 비동기 통신 결과(영화 목록)
         }) // 가져오는데 성공
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message // 에러 메시지
         }) // 데이터 가져오기 실패
   },
})

export default moviesSlice.reducer
