// 컴포넌트 작성시 파일명은 대문자로 시작
// 화살표 함수나 function 함수로 작성
// 함수명은 파일명으로 똑같이 작성(대체적으로 이렇게 많이 사용)
// 외부에서 컴포넌트를 사용하기 위해 마지막에 무조건 export 해준다

import PropTypes from 'prop-types'

const MyComponent = (props) => {
   // 여기서 선언도 가능
   const { name = '기본이름', job, forNumber, children } = props
   return (
      <div>
         <div>안녕하세요. 제 이름은 {props.name} 입니다.</div>
         <div>
            제 직업은 {props.job}입니다. 숫자는 {props.forNumber}
         </div>
         <div> children 값은 {props.children}입니다.</div>

         <div>안녕하세요. 제 이름은 {name} 입니다.</div>
         <div>
            제 직업은 {job}입니다. 숫자는 {forNumber}
         </div>
         <div> children 값은 {children}입니다.</div>
      </div>
   )
}

MyComponent.defaultProps = {
   name: '기본이름', // 받아오는 값이 없으면 값을 적용시켜줌
   job: '학생',
}

MyComponent.propTypes = {
   name: PropTypes.string.isRequired, // 해당 변수의 자료형을 필수값으로 요구한다 강한 경고문 출력
   forNumber: PropTypes.number, // 자료형이 맞지 않으면 warning 정도의 경고문 출력
}

export default MyComponent
