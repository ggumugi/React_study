import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieDetails } from '../features/movies/moviesSlice'

import Grid from '@mui/material/Grid2'
import Rating from '@mui/material/Rating'

function MovieDetail() {
   const { movieId } = useParams()
   const dispatch = useDispatch()
   const { movieDetails, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      if (movieId) {
         dispatch(fetchMovieDetails(movieId))
      }
   }, [dispatch, movieId])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error : {error}</p>

   return (
      <>
         {/* movieDetails의 초기 값이 null 이기 때문에 &&연산자를 통해  movieDetails의 값이 있을 때만 작동하게 한다*/}
         {movieDetails && (
            <Grid container spacing={2}>
               <Grid size={3}>
                  <img src={`https://image.tmdb.org/t/p/w400${movieDetails.poster_path}`} alt={movieDetails.title} width="270" />
               </Grid>
               <Grid size={9}>
                  <h2 style={{ marginBottom: '10px' }}>{movieDetails.title}</h2>

                  <h3 style={{ marginTop: '10px' }}>줄거리</h3>
                  <p>{movieDetails.overview}</p>

                  <h3 style={{ marginTop: '10px' }}>장르</h3>
                  <p>{movieDetails.genres.map((gen) => `${gen.name}`).join(', ')}</p>
                  <h3 style={{ marginTop: '10px' }}>개봉일</h3>
                  <p>{movieDetails.release_date}</p>
                  <h3 style={{ marginTop: '10px' }}>평점</h3>
                  <p>
                     <Rating name="read-only" value={movieDetails.vote_average / 2} readOnly />
                  </p>
               </Grid>
            </Grid>
         )}
      </>
   )
}

export default MovieDetail
