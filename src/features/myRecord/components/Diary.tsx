import { Box, Typography } from '@mui/material'
import { MyDiary } from 'src/models/myrecord'

interface DiaryProps {
  diary: MyDiary
}
const Diary: React.FC<DiaryProps> = ({ diary }) => {
  return (
    <Box className='diary'>
      <Typography variant='h3'>{diary.date}</Typography>
      <Typography variant='h5'>{diary.mydiaryTime}</Typography>
      <Typography component='p'>{diary.mydiaryTitle}</Typography>
      <Typography component='p'>{diary.mydiaryDes}</Typography>
    </Box>
  )
}

export default Diary
