// 영화 포스터 슬라이더

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchMovies } from '../../features/movies/moviesSlice'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import '../css/PosterSlider.css'

// import required modules
import { Navigation, Autoplay } from 'swiper/modules'

function PosterSlider() {
   const dispatch = useDispatch()
   const { movies, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispatch(fetchMovies({ category: 'now_playing', page: 1 }))
   }, [dispatch])

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error : {error}</p>
   return (
      <>
         <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
         >
            {movies.map((movie) => (
               <SwiperSlide key={movie.id}>
                  <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}

export default PosterSlider
