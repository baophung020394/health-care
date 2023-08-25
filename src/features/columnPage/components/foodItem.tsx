import ImageCustom from '@components/Image'
import { Box, Typography } from '@mui/material'
import { Food } from 'src/models/food'
interface FoodProps {
  food: Food
}
const FoodItem: React.FC<FoodProps> = ({ food }) => {
  return (
    <Box className='food'>
      <Box className='food__media'>
        <Box className='food__image'>
          <ImageCustom alt='' src={food.foodImage} />
        </Box>
        <Typography component='p' className='food__text'>
          {food.date} <Typography component='span'>{food.foodTime}</Typography>
        </Typography>
      </Box>
      <Box className='food__card'>
        <Typography component='p' className='food__card--text'>
          {food.foodDescription}
        </Typography>
        <Box className='food__hashtag'>
          <Typography component='p' className='food__hashtag--tag'>
            #魚料理
          </Typography>
          <Typography component='p' className='food__hashtag--tag'>
            #和食
          </Typography>
          <Typography component='p' className='food__hashtag--tag'>
            #DHA
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default FoodItem
