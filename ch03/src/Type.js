const Type = (props) => {
   const { str, num, bool, arr, json, func } = props
   const result = func(1, 2)
   return (
      <div>
         <p>StringProps: {str}</p>
         <p>NumProps: {num}</p>
         <p>BoolProps: {bool.toString()}</p>
         <p>ArrProps: {arr.toString}</p>
         <p>JSONProps: {JSON.stringify(json)}</p>
         <p>FunctionProps: {result}</p>
      </div>
   )
}
export default Type
