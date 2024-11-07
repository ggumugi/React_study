import { Provider } from 'react-redux'
// import Counter from './NonToolkit/Counter'
// import storeNonToolkit from './NonToolkit/store'
import Counter from './UseToolkit/Counter'
import storeToolkit from './UseToolkit/store'
import User from './UseToolkit/User'

function App() {
   //  return (
   //     <Provider store={storeNonToolkit}>
   //        <Counter />
   //     </Provider>
   //  )
   return (
      <Provider store={storeToolkit}>
         <Counter />
         <User />
      </Provider>
   )
}

export default App
