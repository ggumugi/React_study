// 인기 영화, 현재 상영중 영화, 개봉 예정 영화 결과를 보여주는 페이지
import { useState, useEffect, useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../features/movies/moviesSlice'

import '../styles/common.css'
import { Main, Wrap } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Button from '@mui/material/Button'
import MovieCard from '../components/MovieCard'

function MovieCategory({ category }) {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   /*
   메뉴 클릭시 MovieCategory 컴포넌트는 재 렌더링 x -> 같은 컴포넌트를 사용하기 때문에 react-router-dom에서 경로가 바뀌어도 새로운 컴포넌트를 렌더링 하지 않는다. 따라서 state는 최초로 카테고리 메뉴중 하나를 클릭 시 처음에만 1로 지정되고 이후 다른 메뉴 클릭 시 1로 초기화 되지 않는다
   -> 그래서 반드시 useEffect를 사용해 1로 초기화 하여야 한다

   메인 페이지에서 최초로 메뉴 선택을 눌렀을 때 컴포넌트가 렌더링 되면서 1, 2번 useEffect 모두 실행된다

   1번 useEffect 에서 page 가 바뀌면 2번 useEffect가 실행되고 
   이후 다른 메뉴 클릭 시 컴포넌트가 동일하여 재 렌더링은 발생하지 않기 때문에 api 를 두 번 가져오는 현상이 발생하지 않는다

   따라서 최초 실행 시 에만 1,2번 모두 실행되는 것을 막으면 중복으로 api를 불러 오는 것을 막을 수 있다
   */

   const [page, setPage] = useState({
      popular: 1,
      now_playing: 1,
      upcoming: 1,
   })
   const isFirstLoad = useRef(true)

   // 1번 useEffect
   // 카테고리가 변경 될 때 마다 해당 카테고리의 페이지를 1로 초기화
   useEffect(() => {
      if (isFirstLoad.current) {
         isFirstLoad.current = false
         return
      }

      setPage((prevPage) => ({
         ...prevPage,
         [category]: 1,
      }))
   }, [category])

   // 2번 useEffect
   // page가 변할 때마다 영화 데이터 로딩
   useEffect(() => {
      //category는 프롭스 값
      dispatch(fetchMovies({ category, page: page[category] }))
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [dispatch, page])

   const loadMore = useCallback(() => {
      setPage((prevPage) => ({
         ...prevPage,
         [category]: prevPage[category] + 1,
      }))
   }, [category])

   if (loading && page === 1) {
      return (
         <Wrap>
            <Menu>
               <Main>
                  <h2>Loading...</h2>
               </Main>
            </Menu>
         </Wrap>
      )
   }

   if (error) {
      return (
         <Wrap>
            <Menu>
               <Main>
                  <h2>Error...</h2>
               </Main>
            </Menu>
         </Wrap>
      )
   }

   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            <MovieCard movies={movies} />
            <Button variant="outlined" sx={{ margin: '20px auto', display: 'block', width: '500px' }} onClick={loadMore}>
               더 보기
            </Button>
         </Main>
         <Footer />
      </Wrap>
   )
}

export default MovieCategory
