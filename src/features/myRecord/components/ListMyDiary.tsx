import { Box } from '@mui/material'
import { MyDiary } from 'src/models/myrecord'
import Diary from './Diary'

interface ListMydiaryProps {
  list: MyDiary[]
}
const ListMydiary: React.FC<ListMydiaryProps> = ({ list }) => {
  return (
    <Box className='list-diarys'>
      {list?.length > 0 ? list.map((diary: MyDiary) => <Diary diary={diary} key={diary.mydiaryId} />) : null}
    </Box>
  )
}

export default ListMydiary
