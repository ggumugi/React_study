import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies, getMovieDetails, getMovieCredits, searchMovie } from '../../api/tmdbApi'

// createAsyncThunk의 async 함수에서 매개변수로 값을 여러개 받으려면 객체 혹은 배열로 받아야 한다
// 인기, 현재 상영중, 개봉 예정 영화 목록을 api로 부터 가져옴
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ category, page }) => {
   const response = await getMovies(category, page)
   return response.data.results
})

// 영화 상세 정보 가져오기
export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movieId) => {
   const response = await getMovieDetails(movieId)
   return response.data
})

// 출연 배우 정보 가져오기
export const fetchMovieCredits = createAsyncThunk('movies/fetchMovieCredits', async (movieId) => {
   const response = await getMovieCredits(movieId)
   return response.data
})

// 검색어로 영화 검색
export const fetchSearch = createAsyncThunk('movies/fetchSearch', async ({ query, page }) => {
   const response = await searchMovie(query, page)
   return response.data.results
})

const moviesSlice = createSlice({
   name: 'movies',
   initialState: {
      loading: false,
      movies: [], // 영화정보
      movieDetails: null, // 상세정보
      movieCredits: null, // 배우 정보
      error: null,
      searchResults: [],
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false

            // 페이지가 1일 때 새로운 데이터로 state 업데이트
            if (action.meta.arg.page === 1) {
               state.movies = action.payload
            } else {
               // 페이지가 2 이상 일 때 + 새로운 데이터로 state 업데이트
               state.movies = [...state.movies, ...action.payload]
            }
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchMovieDetails.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.loading = false
            state.movieDetails = action.payload
         })
         .addCase(fetchMovieDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchMovieCredits.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovieCredits.fulfilled, (state, action) => {
            state.loading = false
            state.movieCredits = action.payload
         })
         .addCase(fetchMovieCredits.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
         .addCase(fetchSearch.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchSearch.fulfilled, (state, action) => {
            state.loading = false

            if (action.meta.arg.page === 1) {
               state.searchResults = action.payload
            } else {
               // 페이지가 2 이상 일 때 + 새로운 데이터로 state 업데이트
               state.searchResults = [...state.searchResults, ...action.payload]
            }
         })
         .addCase(fetchSearch.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default moviesSlice.reducer
