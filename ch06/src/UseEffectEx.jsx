import React, { useState, useEffect } from 'react'

function UseEffectEx() {
   const [name, setName] = useState('')
   const [nickname, setNickName] = useState('')

   // 1. 컴포넌트가 렌더링 될 때 마다 실행
   //    useEffect(() => {
   //       console.log('렌더링 완료')
   //       console.log(name, nickname)
   //    })

   // 2. 맨 처음 렌더링 될 때만 실행, 업데이트 시(리 렌더링) 실행 안됨
   //    useEffect(() => {
   //       console.log('렌더링 완료')
   //       console.log(name, nickname)
   //    }, [])

   // 3. 특정 값이 변경 될 때만 호출
   //    useEffect(() => {
   //       console.log('렌더링 완료')
   //       console.log(name, nickname)
   //    }, [name])

   // 4. 뒷 정리 함수
   useEffect(() => {
      console.log('렌더링 완료')
      console.log(name, nickname)
      // 렌더링 되기 바로 직전에 실행
      return () => {
         console.log('컴포넌트 업데이트 직전')
         console.log(name, nickname)
      }
   }, [name])

   const onChangeName = (e) => {
      setName(e.target.value)
   }
   const onChangeNickName = (e) => {
      setNickName(e.target.value)
   }

   return (
      <>
         <div>
            <input type="text" value={name} placeholder="name" onChange={onChangeName} />
            <input type="text" value={nickname} placeholder="nickname" onChange={onChangeNickName} />
         </div>
         <div>
            <div>
               <b>이름 : </b>
               {name}
            </div>
            <div>
               <b>닉네임 : </b>
               {nickname}
            </div>
         </div>
      </>
   )
}

export default UseEffectEx
