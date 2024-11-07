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
   console.log(props)
   // 리액트 전통방ㅇ식으로 만든 컴포넌트를 감싸기로 사용하고 싶다면 아래와 같이 props.className 을 준다
   return <button className={props.className}>{props.children}</button>
}

// ReactButton 성질 그대로 가지고 오면서 폰트 사이즈 50px의 버튼을 만들고 싶다 -> 적용 안됨
const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`

const PrimaryButton = styled.button`
   color: ${(props) => (props.primary ? 'white' : 'blue')};
   background-color: ${(props) => (props.primary ? 'orange' : 'skyblue')};
   font-size: ${(props) => props.size || '10px'};

   &:hover {
      background-color: darkblue;
   }
`
/*
&는 현재 컴포넌트를 의미한다
가상클래스(:hover, :focus, :active)나 가상요소 (::before, ::after)와 결합해서 사용
*/

function ReactButton3() {
   return (
      <>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React Large</ReactLargeButton>
         <PrimaryButton>Normal</PrimaryButton>
         <PrimaryButton primary>Normal</PrimaryButton>
         <PrimaryButton size="20px">Normal</PrimaryButton>
      </>
   )
}

export default ReactButton3
