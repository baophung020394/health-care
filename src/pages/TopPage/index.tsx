import Top from '@features/topPage'
import { Box } from '@mui/material'
import withLayout from '@pages/Layouts/withLayout'

const TopPage: React.FC = () => {
  return (
    <Box className='top-page'>
      <Top />
    </Box>
  )
}

export default withLayout(TopPage)
