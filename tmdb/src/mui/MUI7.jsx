import React, { useState } from 'react'
import { Button, Box } from '@mui/material'

function MUI7() {
   const [color, setColor] = useState('primary')
   const handleClick = () => {
      setColor((prevColor) => (prevColor === 'primary' ? 'secondary' : 'primary'))
   }

   return (
      <Box>
         <Button variant="contained" color={color} onClick={handleClick}>
            Toggle
         </Button>
      </Box>
   )
}

export default MUI7
