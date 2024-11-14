import './css/Banner.css'
import React, { useCallback, useState } from 'react'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'

function Banner() {
   const [searchQuery, setSearchQuery] = useState('')
   // useNavigate 훅 : 페이지를 이동 할 수 있게 해주는 훅, 특정 이벤트(버튼 클릭 등) 에서 페이지를 이동하는 등 필요한 때에 사용(spa방식 적용)
   const navigate = useNavigate()

   const handleChange = useCallback((e) => {
      setSearchQuery(e.target.value)
   }, [])

   const handleSearch = useCallback(
      (e) => {
         e.preventDefault()
         if (searchQuery.trim()) {
            navigate(`/search?query=${searchQuery}`) // 이동 경로 지정
         }
      },
      [searchQuery, navigate]
   )
   return (
      <div
         style={{
            width: '100%',
            height: '400px',
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(/images/banner.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
         }}
      >
         <div className="search">
            <h1 className="header_msg">환영합니다! 수백만 개의 영화를 지금 살펴보세요.</h1>
            <form className="search_form" onSubmit={handleSearch}>
               <TextField sx={{ backgroundColor: 'white' }} fullWidth label="영화검색" id="fullWidth" onChange={handleChange} />
               <Button sx={{ width: 100, height: 56, backgroundColor: 'white' }} variant="outlined" startIcon={<SearchIcon />} type="submit">
                  검색
               </Button>
            </form>
         </div>
      </div>
   )
}
export default Banner
