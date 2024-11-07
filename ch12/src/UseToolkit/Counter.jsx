import { useDispatch, useSelector } from 'react-redux'
import { up, down } from './counterSlice'

function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => {
      return state.counter.value // state.슬라이스 key 값.value
   })
   return (
      <div>
         <button
            onClick={() => {
               dispatch(up(2))
            }}
         >
            +
         </button>
         <button
            onClick={() => {
               dispatch(down(2))
            }}
         >
            -
         </button>
         {count}
      </div>
   )
}

export default Counter
