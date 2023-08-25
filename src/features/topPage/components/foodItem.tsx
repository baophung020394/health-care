import ImageCustom from '@components/Image'
import { Box, Typography } from '@mui/material'
import { Food } from 'src/models/food'
interface FoodProps {
  food: Food
}
const FoodItem: React.FC<FoodProps> = ({ food }) => {
  return (
    <Box className='food'>
      <Box className='food__image'>
        <ImageCustom alt='' src={food.foodImage} />
      </Box>
      <Typography component='p' className='food__text'>
        {food.date}.<Typography component='span'>{food.foodStatus}</Typography>
      </Typography>
    </Box>
  )
}

export default FoodItem
