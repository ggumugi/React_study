import './css/TodoInsert.css'
import { IoMdAddCircleOutline } from 'react-icons/io'
import React, { useCallback, useState } from 'react'

function TodoInsert({ onInsert }) {
   const [value, setValue] = useState('')

   const onChange = useCallback((e) => setValue(e.target.value), [value])
   const onSubmit = useCallback(
      (e) => {
         // submit 이벤트는 브라우저에서 새로고침을 발생시킴 -> 이를 방지하기 위해 사용
         e.preventDefault()
         onInsert(value)
         setValue('')
      },
      [value, onInsert] // 다른 함수를 사용할 경우 함수도 적어주면 좋다 onisert는 usecallback으로 정의된 함수이고 todos state에 의존한다 즉 todos가 변경될 때마다 함수도 새로 만들어지므로 사용
   )
   return (
      <form className="TodoInsert" onSubmit={onSubmit}>
         <input placeholder="할 일을 입력하세요." type="text" value={value} onChange={onChange} />
         <button type="submit">
            <IoMdAddCircleOutline />
         </button>
      </form>
   )
}

export default TodoInsert
