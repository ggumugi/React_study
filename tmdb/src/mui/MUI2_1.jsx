import './MUI2_1.css'

import Button from '@mui/material/Button'

function MUI2_1() {
   return (
      <div>
         <Button variant="text" className="btn1">
            Text
         </Button>
         <Button variant="contained" className="btn2">
            버튼
         </Button>
         <Button variant="outlined" className="btn3">
            버튼
         </Button>
      </div>
   )
}

export default MUI2_1
