import Column from '@features/columnPage'
import { Box } from '@mui/material'
import withLayout from '@pages/Layouts/withLayout'

const ColumnPage: React.FC = () => {
  return (
    <Box className='column-page'>
      <Column />
    </Box>
  )
}

export default withLayout(ColumnPage)
