import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDBmMWMzNTE4YzMwNjIyMTUzYjQ1YWFkMDRmZjM5ZiIsIm5iZiI6MTczMTI4Njg3Ni4yNDM2OTc0LCJzdWIiOiI2NzFhZThjYTRiZTE1NDY5ZTcwZGEwMzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.hEaFsYwdn3bJz-YxLy8fy94Cbd5_cyWiu1h8sInfYCI'

// api call을 준비하기 위한 axious 객체 생성
const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json', // JSON 형태로 response 데이터를 받겠다
      Authorization: AUTH_KEY, // 서버에 request 할 때 필요한 인증키
   },
})

// 인기 영화목록 가져오기
// getMovies 함수를 외부에서 사용하기 위해 export 키워즈 작성
export const getMovies = async (page = 1) => {
   const response = await tmdbApi.get('/movie/popular', {
      params: {
         language: 'ko-KR',
         page, // page: page 페이지가 계속 바뀌므로 매개변수로 page를 받아온다
         region: 'KR',
      },
   }) // 서버에 read 요청
   return response // 서버에 요청이 다 끝난 후에 결과데이터를 return
}

export default tmdbApi
