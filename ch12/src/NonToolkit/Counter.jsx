import { useDispatch, useSelector } from 'react-redux'

function Counter() {
   const dispatch = useDispatch()
   const counter = useSelector((state) => state.value)

   return (
      <div>
         <button
            onClick={() => {
               dispatch({ type: 'up', step: 2 })
            }}
         >
            +
         </button>
         {counter}
      </div>
   )
}

export default Counter
