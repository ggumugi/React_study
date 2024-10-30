function App() {
   const name = '리액트'
   const style = {
      backgroundColor: 'red',
      color: 'black',
      fontSize: '48px',

      padding: 16,
   }
   return (
      <>
         <div style={style}>{name}</div>
      </>
   )
}

export default App
