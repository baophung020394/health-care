import MyRecord from '@features/myRecord'
import { Box } from '@mui/material'
import withLayout from '@pages/Layouts/withLayout'

const MyRecordPage: React.FC = () => {
  return (
    <Box className='my-record-page'>
      <MyRecord />
    </Box>
  )
}

export default withLayout(MyRecordPage)
