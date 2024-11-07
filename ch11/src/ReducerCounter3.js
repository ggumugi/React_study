import React, { useReducer, useState } from 'react'

function ReducerCounter3() {
   // 매개변수 두개 = (현재 state, dispatch에서 전달받은 action) -> 리액트에서 알아서 할당해줌

   const countReducer = (oldCount, action) => {
      if (action.type === 'up') return oldCount + action.number
      else if (action.type === 'down') return oldCount - action.number
      else if (action.type === 'reset') return 0
   }

   const [number, setNumber] = useState(1)

   const changeNumber = (e) => setNumber(Number(e.target.value))

   // [state값, dispatch로 사용할 함수 이름]=(reducer로 이용할 함수 이름, 초기값)
   const [count, countDispatch] = useReducer(countReducer, 0)

   // dispatch 함수 : 이벤트가 발생시 reducer 함수를 실행시키고 action을 전달
   // dispatch 에서 매개변수가 2개 이상의 값을 전달하고 싶을 땐 json 객체 형태로 전달, action은 type이라고 하는 key 값으로 전달
   const down = () => countDispatch({ type: 'down', number: number })
   const reset = () => countDispatch({ type: 'reset', number: number })
   const up = () => countDispatch({ type: 'up', number: number })
   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value="+" onClick={up} />
         <input type="text" value={number} onChange={changeNumber} />
         <span>{count}</span>
      </>
   )
}

export default ReducerCounter3
