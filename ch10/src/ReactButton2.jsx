import styled from 'styled-components'
// 스타일드 컴포넌트 적용 방법

// 벡틱 안에 css 작성
const StyledButton = styled.button`
   color: white;
   background-color: green;
`
function ReactButton2() {
   return <StyledButton>버튼</StyledButton>
}

export default ReactButton2
