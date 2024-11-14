import React, { useState, useEffect } from 'react'
import { getMovies } from '../../api/tmdbApi'
function MovieList() {
   const [movies, setMovies] = useState([]) /// response 된 인기영화 목록
   const [loading, setLoading] = useState(true) // 로딩 여부
   const [error, setError] = useState(null) // 에러 메시지

   useEffect(() => {
      const fetchMovies = async () => {
         try {
            setLoading(true)

            // getMovies 함수는 비동기 이므로 완전히 끝날 때 까지 기다렸다가 결과를 받아야 한다. -> await 사용
            const movieList = await getMovies(1) // 1 page 영화목록 가져오기
            console.log(movieList)
            setMovies(movieList.data.results) // 인기 영화 목록 movies state에 넣어줌
         } catch (e) {
            setError(e.message) // 에러 메시지를 error state에 담아둔다
         } finally {
            setLoading(false) // 로딩 완료의 의미
         }
      }

      fetchMovies()
   }, []) // 빈 배열은 시작할 때 한 번만

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error : {error}</p>

   return (
      <div>
         <h1>인기 영화</h1>
         <ul>
            {movies.map((movie) => (
               <li key={movie.id}>{movie.title}</li>
            ))}
         </ul>
      </div>
   )
}

export default MovieList
