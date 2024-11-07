import styled from 'styled-components'
const StyledButton = styled.button`
   color: white;
   background-color: green;
`

const LargeButton = styled(StyledButton)`
   font-size: 50px;
`
function ReactButton3() {
   return (
      <>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
      </>
   )
}

export default ReactButton3
