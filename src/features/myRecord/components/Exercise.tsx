import { Box, Typography } from '@mui/material'
import { MyExercise } from 'src/models/myrecord'

interface ExcerciseProps {
  excercise: MyExercise
}
const Exercise: React.FC<ExcerciseProps> = ({ excercise }) => {
  return (
    <Box className='exercise'>
      <Box className='exercise__item'>
        <Box className='exercise__item--left'>
          <Typography variant='h4' component='h4'>
            {excercise.myexerciseTitle}
          </Typography>
          <Typography component='p'>{excercise.mydiaryKcal}</Typography>
        </Box>
        <Box className='exercise__item--right'>
          <Typography component='p'>{excercise.mydiaryTime}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Exercise
