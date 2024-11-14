import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDBmMWMzNTE4YzMwNjIyMTUzYjQ1YWFkMDRmZjM5ZiIsIm5iZiI6MTczMTI4Njg3Ni4yNDM2OTc0LCJzdWIiOiI2NzFhZThjYTRiZTE1NDY5ZTcwZGEwMzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.hEaFsYwdn3bJz-YxLy8fy94Cbd5_cyWiu1h8sInfYCI'

const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json', // JSON 형태로 response 데이터를 받겠다
      Authorization: AUTH_KEY, // 서버에 request 할 때 필요한 인증키
   },
})

// 공통 api 호출 함수
const fetchFromApi = async (url, params = {}) => {
   try {
      const response = await tmdbApi.get(url, { params })
      return response
   } catch (e) {
      console.error('API 요청 오류 : ', e.message)
      throw e
   }
}

// 인기, 상영중, 개봉 예정 영화 가져오기
export const getMovies = (category = 'popular', page = 1) => {
   // 카테고리에 맞는 endpoint를 가져옴
   const endpoint = {
      popular: '/movie/popular',
      now_playing: '/movie/now_playing',
      upcoming: '/movie/upcoming',
   }[category]

   return fetchFromApi(endpoint, {
      language: 'ko-KR',
      page, // page: page 페이지가 계속 바뀌므로 매개변수로 page를 받아온다
      region: 'KR',
   })
}

// 인기, 방송 중인 tv 목록 가져오기
export const getTvs = (type, page = 1) => {
   const endpoint = {
      popular: '/tv/popular',
      on_the_air: '/tv/on_the_air',
   }[type]

   return fetchFromApi(endpoint, {
      language: 'ko-KR',
      page,
   })
}

// 영화 상세 정보 가져오기
export const getMovieDetails = (movieId) => {
   return fetchFromApi(`/movie/${movieId}`, { language: 'ko-KR' })
}

// 출연 배우 정보 가져오기
export const getMovieCredits = (movieId) => {
   return fetchFromApi(`/movie/${movieId}/credits`, { language: 'ko-KR' })
}

// 검색 api 호출
export const searchMovie = (query, page = 1) => {
   return fetchFromApi('/search/movie', {
      language: 'ko-KR',
      page,
      region: 'KR',
      query,
      include_adult: false,
   })
}

export default tmdbApi
