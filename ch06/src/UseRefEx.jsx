import React, { useRef } from 'react'

function UseRefEx() {
   const inputRef = useRef(null)

   const handleClick = () => {
      // input 요소에 포커스를 설정합니다.
      inputRef.current.focus()
   }

   return (
      <div>
         {/* dom을 직접적으로 다루고 싶은 요소에 inputRef 적용 */}

         <input ref={inputRef} type="text" />
         <button onClick={handleClick}>Focus Input</button>
      </div>
   )
}

export default UseRefEx
