function App() {
   return (
      // && 연산 (A && B) -> A가 true면 B를 렌더링, A가 false면 A를 렌더링
      <>
         <div>{'리액트' && <h1>리액트입니다</h1>}</div>
      </>
   )
}

export default App
