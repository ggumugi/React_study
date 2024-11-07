import React, { useReducer } from 'react'

function ReducerCounter2() {
   // 매개변수 두개 = (현재 state, dispatch에서 전달받은 action) -> 리액트에서 알아서 할당해줌

   const countReducer = (oldCount, action) => {
      if (action === 'up') return oldCount + 1
      else if (action === 'down') return oldCount - 1
      else if (action === 'reset') return 0
   }

   // [state값, dispatch로 사용할 함수 이름]=(reducer로 이용할 함수 이름, 초기값)
   const [count, countDispatch] = useReducer(countReducer, 0)

   // dispatch 함수 : 이벤트가 발생시 reducer 함수를 실행시키고 action을 전달
   const down = () => countDispatch('down')
   const reset = () => countDispatch('reset')
   const up = () => countDispatch('up')
   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value="+" onClick={up} />
         <p>{count}</p>
      </>
   )
}

export default ReducerCounter2
