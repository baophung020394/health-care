import CustomButton from '@components/Button'
import BackgroundFilter from '@assets/images/filter/background-filter2.png'
import CupIcon from '@assets/images/filter/cup.svg'
import KnifeIcon from '@assets/images/filter/knife.svg'
import { Box } from '@mui/material'
import ImageCustom from '@components/Image'

interface FilterFoodProps {
  onFilterChange: (status: string | null) => void
}

const FilterFood: React.FC<FilterFoodProps> = ({ onFilterChange }) => {
  const handleFilterClick = (status: string) => {
    onFilterChange(status)
    window.dispatchEvent(new Event('scrollDownList'))
  }
  return (
    <Box className='filter-food'>
      <Box className='filter-food__button'>
        <ImageCustom src={BackgroundFilter} alt='' />
        <CustomButton
          text='Morning'
          icon={KnifeIcon}
          backgroundColor='transparent'
          backgroundColorHover='transparent'
          boxShadow='none'
          className='btn-filter'
          onClick={() => {
            handleFilterClick('morning')
            window.dispatchEvent(new Event('scrollDownList'))
          }}
        />
      </Box>
      <Box className='filter-food__button'>
        <ImageCustom src={BackgroundFilter} alt='' />
        <CustomButton
          text='Lunch'
          icon={KnifeIcon}
          backgroundColor='transparent'
          backgroundColorHover='transparent'
          boxShadow='none'
          className='btn-filter'
          onClick={() => {
            handleFilterClick('lunch')
            window.dispatchEvent(new Event('scrollDownList'))
          }}
        />
      </Box>
      <Box className='filter-food__button'>
        <ImageCustom src={BackgroundFilter} alt='' />
        <CustomButton
          text='Dinner'
          icon={KnifeIcon}
          backgroundColor='transparent'
          backgroundColorHover='transparent'
          boxShadow='none'
          className='btn-filter'
          onClick={() => {
            handleFilterClick('dinner')
            window.dispatchEvent(new Event('scrollDownList'))
          }}
        />
      </Box>
      <Box className='filter-food__button'>
        <ImageCustom src={BackgroundFilter} alt='' />
        <CustomButton
          text='Snack'
          icon={CupIcon}
          backgroundColor='transparent'
          backgroundColorHover='transparent'
          boxShadow='none'
          className='btn-filter'
          onClick={() => {
            handleFilterClick('snack')
            window.dispatchEvent(new Event('scrollDownList'))
          }}
        />
      </Box>
    </Box>
  )
}

export default FilterFood
