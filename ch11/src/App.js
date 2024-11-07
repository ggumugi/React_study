//import ReducerCounter1 from './ReducerCounter1'
//import ReducerCounter2 from './ReducerCounter2'
//import ReducerCounter3 from './ReducerCounter3'
import { createStore } from 'redux'
import { Provider, useSelector, useDispatch } from 'react-redux'
import './App.css'

// reducer : state를 바꿔주는 역할
function reducer(currentState, action) {
   if (currentState === undefined) {
      return { number: 1 } // state 값을 업데이트
   }

   // currentState가 정의가 되었을 때 state가 업데이트 되는 부분
   const newState = { ...currentState }

   if (action.type === 'PLUS') {
      newState.number++
   }
   return newState // state 상태 업데이트
}

// store : reducer, state 저장하는 창고
const store = createStore(reducer)

function Left1() {
   return (
      <div>
         <h1>Left1 : </h1>
         <Left2></Left2>
      </div>
   )
}
function Left2() {
   return (
      <div>
         <h1>Left2 :</h1>
         <Left3></Left3>
      </div>
   )
}
function Left3() {
   //  function f(state) {
   //     return state.number
   //  }
   //  const number = useSelector(f)

   // useSelector : state의 값을 창고에서 가져오기 위한 함수
   // state={number:1}
   // 처음 사이트 접속 시 useSelector 에서 reducer를 실행시켜서 값을 가져온다
   const number = useSelector((state) => state.number)
   return (
      <div>
         <h1>Left3 : {number}</h1>
      </div>
   )
}

function Right1() {
   return (
      <div>
         <h1>Right1</h1>
         <Right2></Right2>
      </div>
   )
}
function Right2() {
   return (
      <div>
         <h1>Right2</h1>
         <Right3></Right3>
      </div>
   )
}
function Right3() {
   const dispatch = useDispatch()
   return (
      <div>
         <h1>Right3</h1>
         <input
            type="button"
            value="+"
            onClick={() => {
               dispatch({ type: 'PLUS' })
            }}
         />
      </div>
   )
}

function App() {
   return (
      <div className="container">
         <h1>Root : </h1>
         <div className="grid">
            {/* provider = store에 저장해둔 값을 사용하고 싶은 컴포넌트를 감싸주는 컴포넌트 */}
            <Provider store={store}>
               <Left1></Left1>
               <Right1></Right1>
            </Provider>
         </div>
      </div>
   )
}

export default App
