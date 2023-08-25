import Food2Img from '@assets/images/health/f1.jpg'
import Food3Img from '@assets/images/health/f2.jpg'
import Food4Img from '@assets/images/health/f3.jpg'
import Food1Img from '@assets/images/health/l02.jpg'
import ScrollToTopButton from '@components/SrollToTop'
import { Box, Container } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { Food } from 'src/models/food'
import Chart from './components/chart'
import FilterFood from './components/filterFood'
import ListFood from './components/listFood'
import Overview from './components/overview'
import './toppage.scss'

const Top: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listFoods, setListFoods] = useState<Food[]>([
    {
      foodId: '1',
      foodName: '',
      foodStatus: 'lunch',
      date: '05.21',
      foodImage: Food1Img
    },
    {
      foodId: '2',
      foodName: '',
      foodStatus: 'morning',
      date: '05.21',
      foodImage: Food2Img
    },
    {
      foodId: '3',
      foodName: '',
      foodStatus: 'dinner',
      date: '05.21',
      foodImage: Food3Img
    },
    {
      foodId: '4',
      foodName: '',
      foodStatus: 'lunch',
      date: '05.21',
      foodImage: Food4Img
    },
    {
      foodId: '5',
      foodName: '',
      foodStatus: 'snack',
      date: '05.21',
      foodImage: Food2Img
    },
    {
      foodId: '6',
      foodName: '',
      foodStatus: 'morning',
      date: '05.21',
      foodImage: Food1Img
    },
    {
      foodId: '7',
      foodName: '',
      foodStatus: 'lunch',
      date: '05.21',
      foodImage: Food2Img
    },
    {
      foodId: '8',
      foodName: '',
      foodStatus: 'snack',
      date: '05.21',
      foodImage: Food3Img
    },
    {
      foodId: '9',
      foodName: '',
      foodStatus: 'lunch',
      date: '05.21',
      foodImage: Food2Img
    },
    {
      foodId: '10',
      foodName: '',
      foodStatus: 'snack',
      date: '05.21',
      foodImage: Food3Img
    },
    {
      foodId: '11',
      foodName: '',
      foodStatus: 'lunch',
      date: '05.21',
      foodImage: Food2Img
    },
    {
      foodId: '12',
      foodName: '',
      foodStatus: 'snack',
      date: '05.21',
      foodImage: Food3Img
    },
    {
      foodId: '13',
      foodName: '',
      foodStatus: 'lunch',
      date: '05.21',
      foodImage: Food2Img
    },
    {
      foodId: '14',
      foodName: '',
      foodStatus: 'snack',
      date: '05.21',
      foodImage: Food3Img
    },
    {
      foodId: '15',
      foodName: '',
      foodStatus: 'lunch',
      date: '05.21',
      foodImage: Food2Img
    },
    {
      foodId: '16',
      foodName: '',
      foodStatus: 'snack',
      date: '05.21',
      foodImage: Food3Img
    },
    {
      foodId: '17',
      foodName: '',
      foodStatus: 'lunch',
      date: '05.21',
      foodImage: Food2Img
    },
    {
      foodId: '18',
      foodName: '',
      foodStatus: 'snack',
      date: '05.21',
      foodImage: Food3Img
    },
    {
      foodId: '19',
      foodName: '',
      foodStatus: 'lunch',
      date: '05.21',
      foodImage: Food2Img
    },
    {
      foodId: '20',
      foodName: '',
      foodStatus: 'snack',
      date: '05.21',
      foodImage: Food3Img
    },
    {
      foodId: '21',
      foodName: '',
      foodStatus: 'lunch',
      date: '05.21',
      foodImage: Food2Img
    },
    {
      foodId: '22',
      foodName: '',
      foodStatus: 'snack',
      date: '05.21',
      foodImage: Food3Img
    }
  ])

  const [filterStatus, setFilterStatus] = useState<string | null>(null)
  const listFoodRef = useRef<HTMLDivElement>(null)
  const [filterApplied, setFilterApplied] = useState<boolean>(false)
  const [visibleFoodCount, setVisibleFoodCount] = useState<number>(8)

  const filteredFoods = filterStatus ? listFoods.filter((food) => food.foodStatus === filterStatus) : listFoods

  const foodsToShow = filteredFoods.slice(0, visibleFoodCount)

  /**
   * Function load more
   */
  const handleLoadMore = () => {
    setVisibleFoodCount((prevCount) => prevCount + 8)
  }

  /**
   * Filter food by status
   * @param status
   */
  const handleFilterChange = (status: string | null) => {
    setFilterStatus(status)
    setFilterApplied(true)
    setVisibleFoodCount(8)
  }

  useEffect(() => {
    const handleScrollDownList = () => {
      if (listFoodRef.current) {
        listFoodRef.current.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('scrollDownList', handleScrollDownList)

    return () => {
      window.removeEventListener('scrollDownList', handleScrollDownList)
    }
  }, [])

  return (
    <Box className='tops'>
      <Box className='tops__top'>
        <Box className='overview-wrap'>
          <Overview />
        </Box>
        <Box className='chart-wrap'>
          <Chart />
        </Box>
      </Box>
      <Box className='tops__bottom'>
        <Container>
          <FilterFood onFilterChange={handleFilterChange} />
          {filterApplied && <div ref={listFoodRef} />}
          <ListFood list={foodsToShow} />
          <Box className='btn-loadmore'>
            {foodsToShow.length < filteredFoods.length && (
              <button className='btn-loadmore__button' onClick={handleLoadMore}>
                記録をもっと見る
              </button>
            )}
          </Box>
        </Container>
      </Box>
      <ScrollToTopButton />
    </Box>
  )
}

export default Top
