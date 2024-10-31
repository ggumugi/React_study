import React, { useState } from 'react'

function EventPractice2() {
   // input 창이 여러개 일 때 대처하는 방법
   const [form, setForm] = useState({
      username: '',
      message: '',
   })

   const { username, message } = form

   const onChange = (e) => {
      // form state 안에 있는 값들을 바꿔줘야 한다

      const nextForm = {
         ...form,
         [e.target.name]: e.target.value,
      }
      setForm(nextForm)
   }

   const onClick = () => {
      alert(`첫 번째 입력값 : ${username}, 두 번째 입력값 : ${message}`)

      setForm({ username: '', message: '' })
   }
   // 엔터 키를 눌렀을 때도 실행하게 하기 위한 함수
   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }
   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChange} />
         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChange} onKeyDown={onKeyDown} />
         {/* disabled를 이용해 두 input창 모두 입력 됐을 때만 버튼 활성화 */}
         <button onClick={onClick} disabled={!username || !message}>
            확인
         </button>
      </div>
   )
}

export default EventPractice2
