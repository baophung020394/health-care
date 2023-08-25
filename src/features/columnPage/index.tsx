import Food2Img from '@assets/images/health/f1.jpg'
import Food3Img from '@assets/images/health/f2.jpg'
import Food4Img from '@assets/images/health/f3.jpg'
import Food1Img from '@assets/images/health/l02.jpg'
import ScrollToTopButton from '@components/SrollToTop'
import { Box, Container, Typography } from '@mui/material'
import { useState } from 'react'
import { Food } from 'src/models/food'
import './columnpage.scss'
import ListFood from './components/listFood'

const Column: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listFoods, setListFoods] = useState<Food[]>([
    {
      foodId: '1',
      foodName: '',
      foodStatus: 'lunch',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food1Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '2',
      foodName: '',
      foodStatus: 'morning',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food2Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '3',
      foodName: '',
      foodStatus: 'dinner',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food3Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '4',
      foodName: '',
      foodStatus: 'lunch',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food4Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '5',
      foodName: '',
      foodStatus: 'snack',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food2Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '6',
      foodName: '',
      foodStatus: 'morning',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food1Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '7',
      foodName: '',
      foodStatus: 'lunch',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food2Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '8',
      foodName: '',
      foodStatus: 'snack',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food3Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '9',
      foodName: '',
      foodStatus: 'lunch',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food2Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '10',
      foodName: '',
      foodStatus: 'snack',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food3Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '11',
      foodName: '',
      foodStatus: 'lunch',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food2Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '12',
      foodName: '',
      foodStatus: 'snack',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food3Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '13',
      foodName: '',
      foodStatus: 'lunch',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food2Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '14',
      foodName: '',
      foodStatus: 'snack',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food3Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '15',
      foodName: '',
      foodStatus: 'lunch',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food2Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '16',
      foodName: '',
      foodStatus: 'snack',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food3Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '17',
      foodName: '',
      foodStatus: 'lunch',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food2Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '18',
      foodName: '',
      foodStatus: 'snack',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food3Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '19',
      foodName: '',
      foodStatus: 'lunch',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food2Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '20',
      foodName: '',
      foodStatus: 'snack',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food3Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '21',
      foodName: '',
      foodStatus: 'lunch',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food2Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    },
    {
      foodId: '22',
      foodName: '',
      foodStatus: 'snack',
      date: '2021.05.17',
      foodTime: '23:25',
      foodImage: Food3Img,
      foodDescription: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
    }
  ])

  const [visibleFoodCount, setVisibleFoodCount] = useState<number>(8)
  // Hàm để lọc danh sách món ăn theo trạng thái

  // Danh sách món ăn hiển thị thực tế, dựa trên biến visibleFoodCount
  const foodsToShow = listFoods.slice(0, visibleFoodCount)

  const handleLoadMore = () => {
    // Hiển thị thêm 8 món ăn
    setVisibleFoodCount((prevCount) => prevCount + 8)
  }

  return (
    <Box className='columns'>
      <Box className='columns__top'>
        <Box className='columns__top__boxs'>
          <Box className='col__box'>
            <Typography component='h3' variant='h3'>
              RECOMMENDED COLUMN
            </Typography>
            <div className='col__line'></div>
            <Typography component='p'>オススメ</Typography>
          </Box>
          <Box className='col__box'>
            <Typography component='h3' variant='h3'>
              RECOMMENDED DIET
            </Typography>
            <div className='col__line'></div>
            <Typography component='p'>ダイエット</Typography>
          </Box>
          <Box className='col__box'>
            <Typography component='h3' variant='h3'>
              RECOMMENDED BEAUTY
            </Typography>
            <div className='col__line'></div>
            <Typography component='p'>美容</Typography>
          </Box>
          <Box className='col__box'>
            <Typography component='h3' variant='h3'>
              RECOMMENDED HEALTH
            </Typography>
            <div className='col__line'></div>
            <Typography component='p'>健康</Typography>
          </Box>
        </Box>
      </Box>
      <Box className='columns__bottom'>
        <Container>
          <ListFood list={foodsToShow} />
          <Box className='btn-loadmore'>
            {foodsToShow.length < listFoods.length && (
              <button className='btn-loadmore__button' onClick={handleLoadMore}>
                コラムをもっと見る
              </button>
            )}
          </Box>
        </Container>
      </Box>
      <ScrollToTopButton />
    </Box>
  )
}

export default Column
