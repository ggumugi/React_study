function App() {
   const name = undefined
   return (
      // || 연산 (A || B) -> A가 true 면 A를 렌더링, A가 false면 B를 렌더링
      <>
         <div>{name || '리액트'}</div>
      </>
   )
}

export default App
