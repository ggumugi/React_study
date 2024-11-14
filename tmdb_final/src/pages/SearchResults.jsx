// 검색 결과 화면
import '../styles/common.css'
import { Main, Wrap } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import React, { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearch } from '../features/movies/moviesSlice'
import { Button } from '@mui/material'
import MovieCard from '../components/MovieCard'

function SearchResults() {
   const [searchParams] = useSearchParams() // 쿼리 파라미터 가져오기
   const query = searchParams.get('query') // 쿼리 파라미터 값 추출

   const dispatch = useDispatch()
   const { searchResults, loading, error } = useSelector((state) => state.movies)

   const [page, setPage] = useState(1)

   // 검색어가 변경될 때마다 페이지 검색결과 초기화 및 새로운 검색 실행
   useEffect(() => {
      setPage(1)
      dispatch(fetchSearch({ query, page }))
   }, [query, dispatch])

   // 페이지가 변경 될 때마다 새로운 결과 로딩
   useEffect(() => {
      // 페이지가 2 이상일 때만 실행
      if (page > 1) {
         dispatch(fetchSearch({ query, page }))
      }
   }, [page, dispatch, query])

   // 더 보기 클릭시 페이지 증가
   const loadMore = useCallback(() => {
      setPage((prevPage) => prevPage + 1)
   }, [])

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
            {searchResults.length > 0 ? (
               <>
                  <MovieCard movies={searchResults} />
                  <Button variant="outlined" sx={{ margin: '20px auto', display: 'block', width: '500px' }} onClick={loadMore}>
                     더 보기
                  </Button>
               </>
            ) : (
               <h2>검색 결과가 없습니다.</h2>
            )}
         </Main>
         <Footer />
      </Wrap>
   )
}

export default SearchResults
