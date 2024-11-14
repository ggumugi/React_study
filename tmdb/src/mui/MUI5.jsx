import { Button } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
   palette: {
      primary: {
         main: '#1976d2',
      },
      secondary: {
         main: '#dc004e',
      },
   },
})

function MUI5() {
   return (
      <ThemeProvider theme={theme}>
         <Button variant="contained" color="primary">
            버튼
         </Button>
         <Button variant="outlined" color="secondary">
            버튼
         </Button>
      </ThemeProvider>
   )
}

export default MUI5
