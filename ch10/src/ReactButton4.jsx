import styled from 'styled-components'
const StyledButton = styled.button`
   color: white;
   background-color: green;
`

const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

// 리액트 전통방식으로 만든 컴포넌트
const ReactButton = (props) => {
   return <button>{props.children}</button>
}

// ReactButton 성질 그대로 가지고 오면서 폰트 사이즈 50px의 버튼을 만들고 싶다 -> 적용 안됨
const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`

function ReactButton3() {
   return (
      <>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React Large</ReactLargeButton>
      </>
   )
}

export default ReactButton3
