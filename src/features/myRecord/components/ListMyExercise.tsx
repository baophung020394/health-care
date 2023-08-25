import { Box } from '@mui/material'
import { MyExercise } from 'src/models/myrecord'
import Exercise from './Exercise'

interface ListMyExerciseProps {
  list: MyExercise[]
}
const ListMyExercise: React.FC<ListMyExerciseProps> = ({ list }) => {
  return (
    <Box className='list-excercise'>
      {list?.length > 0
        ? list.map((excercise: MyExercise) => <Exercise excercise={excercise} key={excercise.myexerciseId} />)
        : null}
    </Box>
  )
}

export default ListMyExercise
