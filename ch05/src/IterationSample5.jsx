import React, { useState } from 'react'

function IterationSample5() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])

   const [inputText, setInputText] = useState('')
   const [nextId, setNextId] = useState(5)
   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>)
   const onChange = (e) => {
      setInputText(e.target.value)
   }

   const onClick = () => {
      const nextNames = names.concat({
         id: nextId,
         text: inputText,
      })
      setNames(nextNames)
      setNextId(nextId + 1)
      setInputText('')
   }
   return (
      <>
         <input type="text" value={inputText} onChange={onChange} />
         <button onClick={onClick}>추가</button>
         <ul>{nameList}</ul>
      </>
   )
}

export default IterationSample5
