import React, { useState } from 'react'

function EventPractice() {
   const [username, setUsername] = useState('')
   const [message, setMessage] = useState('')

   const onChangeUsername = (e) => {
      setUsername(e.target.value)
   }
   const onChangeMessage = (e) => {
      setMessage(e.target.value)
   }

   const onClick = () => {
      alert(`첫 번째 입력값 : ${username}, 두 번째 입력값 : ${message}`)

      setUsername('')
      setMessage('')
   }
   // 엔터 키를 눌렀을 때도 실행하게 하기 위한 함수
   const onKeyDown = (e) => {
      console.log(e.key)
      if (e.key === 'Enter') {
         onClick()
      }
   }
   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChangeUsername} />
         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChangeMessage} onKeyDown={onKeyDown} />
         {/* disabled를 이용해 두 input창 모두 입력 됐을 때만 버튼 활성화 */}
         <button onClick={onClick} disabled={!username || !message}>
            확인
         </button>
      </div>
   )
}

export default EventPractice
