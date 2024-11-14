import Button from '@mui/material/Button'
import { styled } from '@mui/material'

const CustomButton = styled(Button)(({ theme }) => {
   console.log(theme)
   return {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      paddind: theme.spacing(2), // 1spacing = 8px
      '&:hover': {
         backgroundColor: theme.palette.secondary.dark,
      },
   }
})
function MUI2_4() {
   return <CustomButton>Styled Button</CustomButton>
}

export default MUI2_4
