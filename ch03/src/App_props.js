// import export 해주는 걸 어떤 이름으로 사용할건지 from 파일경로

// import MyComponent from './MyComponent'

import Type from './Type'
function App() {
   //  return (
   //     <MyComponent name="하서" job="강사" forNumber="1">
   //        맑음
   //     </MyComponent>
   //  )
   const func = (a, b) => {
      return a + b
   }
   return <Type str="react" num={200} bool={1 == 1} arr={[0, 1, 2]} json={{ react: '리액트', time: 2 }} func={func} />
}

export default App
