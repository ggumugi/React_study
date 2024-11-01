import React, { useState, useMemo } from 'react'

const getAverage = (numbers) => {
   console.log('평균값 계산...')
   // numbers = [1, 2, 3] 일때

   if (numbers.length === 0) return 0
   const sum = numbers.reduce((a, b) => a + b) //누적합계
   return sum / numbers.length
}

function UseMemoEx2() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   // list state가 바뀔 때만 함수 실행

   const avg = useMemo(() => getAverage(list), [list])

   const onChange = (e) => {
      setNumber(e.target.value)
   }

   const onInsert = (e) => {
      const nextList = list.concat(parseInt(number))
      setList(nextList)
      setNumber('')
   }

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

export default UseMemoEx2
