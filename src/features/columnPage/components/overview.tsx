import { Box } from '@mui/material'
import CircularProgressBar from './circularProgressBar'
import BackgroundFood from '@assets/images/health/d01.jpg'
import ImageCustom from '@components/Image'

const Overview: React.FC = () => {
  return (
    <Box className='overview-food'>
      <Box className='overview-food__box'>
        <Box className='overview-food__image'>
          <ImageCustom
            src={BackgroundFood}
            alt='background'
            width='100%'
            height='auto'
            className='overview-food__img'
          />
        </Box>
        <Box className='overview-food__progress-bar'>
          <CircularProgressBar circleWidth={181} percentage={100} />
        </Box>
      </Box>
    </Box>
  )
}

export default Overview
