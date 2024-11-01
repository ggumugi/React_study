import React, { useState, useMemo, useCallback } from 'react'

const getAverage = (numbers) => {
   console.log('평균값 계산...')

   // numbers = [1, 2, 3] 일때

   if (numbers.length === 0) return 0
   const sum = numbers.reduce((a, b) => a + b) //누적합계
   return sum / numbers.length
}

function UseCallbackEx() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   // list state가 바뀔 때만 함수 실행

   const avg = useMemo(() => {
      return getAverage(list)
   }, [list])

   // 컴포넌트가 처음 렌더링 될 때만 함수 생성
   const onChange = useCallback((e) => {
      setNumber(e.target.value)
   }, [])
   // number,list state가 바뀔 때 만 함수 생성
   const onInsert = useCallback(() => {
      const nextList = list.concat(parseInt(number))
      setList(nextList)
      setNumber('')
   }, [number, list])

   return (
      <div>
         <input value={number} onChange={onChange}></input>
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value, index) => (
               <li key={index}>{value}</li>
            ))}
         </ul>
         <div>
            <b>평균값: {avg}</b>
         </div>
      </div>
   )
}

export default UseCallbackEx
