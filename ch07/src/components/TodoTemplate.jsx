import './css/TodoTemplate.css'

function TodoTemplate({ children }) {
   // children = 투두 인서트, 리스트 컴포넌트
   return (
      <div className="TodoTemplate">
         <div className="app-title">TODO LIST</div>
         <div className="content">{children}</div>
      </div>
   )
}

export default TodoTemplate
