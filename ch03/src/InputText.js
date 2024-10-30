import React, { useState } from 'react'

function InputText() {
   // 리액트에서 input 창에 입력한 값을 출력하는 방법
   const [text, setText] = useState('')

   return (
      <div>
         <input
            type="text"
            value={text}
            onChange={(e) => {
               console.log(e)
               setText(e.target.value)
            }}
         />
         <p>입력한 값 : {text}</p>
      </div>
   )
}

export default InputText
