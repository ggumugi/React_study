// 커스터마이징 한 CSS 적용방법 3: sx props 사용(json 객체 형태로 사용)
// https://mui.com/material-ui/customization/how-to-customize/#the-sx-prop

// 컬러 팔레트
// https://mui.com/material-ui/customization/palette/

import { Box } from '@mui/material'

function MUI2_3() {
   return (
      <Box
         sx={{
            width: '100px',
            height: '100px',
            backgroundColor: 'primary.main',
            '&:hover': {
               backgroundColor: 'secondary.main',
            },
         }}
      >
         Hover to change color
      </Box>
   )
}

export default MUI2_3
