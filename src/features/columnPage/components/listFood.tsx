import { Box } from '@mui/material'
import { Food } from 'src/models/food'
import FoodItem from './foodItem'

interface ListFoodProps {
  list: Food[]
}
const ListFood: React.FC<ListFoodProps> = ({ list }) => {
  return (
    <Box className='list-food'>
      {list?.length > 0 ? list.map((food: Food) => <FoodItem food={food} key={food.foodId} />) : null}
    </Box>
  )
}

export default ListFood
