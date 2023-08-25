import BodyReCord from '@assets/images/myrecord/bodyrecord.png'
import MyDiaryImg from '@assets/images/myrecord/mydiary.png'
import Myexercise from '@assets/images/myrecord/myexercise.png'
import CustomButton from '@components/Button'
import ImageCustom from '@components/Image'
import ScrollToTopButton from '@components/SrollToTop'
import { Box, Container, Typography } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MyDiary, MyExercise } from 'src/models/myrecord'
import Chart from './components/Chart'
import ListMydiary from './components/ListMyDiary'
import ListMyExercise from './components/ListMyExercise'
import './myrecord.scss'

const MyRecord: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listMyDiary, setListMyDiary] = useState<MyDiary[]>([
    {
      mydiaryId: '1',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '2',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '3',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '4',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '5',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '6',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '7',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '8',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '9',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '10',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '11',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '12',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '13',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '14',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '15',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '16',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '17',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '18',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '19',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    },
    {
      mydiaryId: '20',
      date: '2021.05.21',
      mydiaryTime: ' 23:25',
      mydiaryDes:
        'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
      mydiaryTitle: '私の日記の記録が一部表示されます。'
    }
  ])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listMyexercise, setListMyexercise] = useState<MyExercise[]>([
    {
      myexerciseId: '1',
      myexerciseTitle: '家事全般（立位・軽い）',
      mydiaryKcal: '26kcal',
      mydiaryTime: '10min',
      date: '2021.05.21'
    },
    {
      myexerciseId: '2',
      myexerciseTitle: '家事全般（立位・軽い）',
      mydiaryKcal: '26kcal',
      mydiaryTime: '10min',
      date: '2021.05.21'
    },
    {
      myexerciseId: '3',
      myexerciseTitle: '家事全般（立位・軽い）',
      mydiaryKcal: '26kcal',
      mydiaryTime: '10min',
      date: '2021.05.21'
    },
    {
      myexerciseId: '4',
      myexerciseTitle: '家事全般（立位・軽い）',
      mydiaryKcal: '26kcal',
      mydiaryTime: '10min',
      date: '2021.05.21'
    },
    {
      myexerciseId: '5',
      myexerciseTitle: '家事全般（立位・軽い）',
      mydiaryKcal: '26kcal',
      mydiaryTime: '10min',
      date: '2021.05.21'
    },
    {
      myexerciseId: '6',
      myexerciseTitle: '家事全般（立位・軽い）',
      mydiaryKcal: '26kcal',
      mydiaryTime: '10min',
      date: '2021.05.21'
    },
    {
      myexerciseId: '7',
      myexerciseTitle: '家事全般（立位・軽い）',
      mydiaryKcal: '26kcal',
      mydiaryTime: '10min',
      date: '2021.05.21'
    },
    {
      myexerciseId: '8',
      myexerciseTitle: '家事全般（立位・軽い）',
      mydiaryKcal: '26kcal',
      mydiaryTime: '10min',
      date: '2021.05.21'
    },
    {
      myexerciseId: '9',
      myexerciseTitle: '家事全般（立位・軽い）',
      mydiaryKcal: '26kcal',
      mydiaryTime: '10min',
      date: '2021.05.21'
    },
    {
      myexerciseId: '1',
      myexerciseTitle: '家事全般（立位・軽い）',
      mydiaryKcal: '26kcal',
      mydiaryTime: '10min',
      date: '2021.05.21'
    },
    {
      myexerciseId: '1',
      myexerciseTitle: '家事全般（立位・軽い）',
      mydiaryKcal: '26kcal',
      mydiaryTime: '10min',
      date: '2021.05.21'
    },
    {
      myexerciseId: '10',
      myexerciseTitle: '家事全般（立位・軽い）',
      mydiaryKcal: '26kcal',
      mydiaryTime: '10min',
      date: '2021.05.21'
    },
    {
      myexerciseId: '11',
      myexerciseTitle: '家事全般（立位・軽い）',
      mydiaryKcal: '26kcal',
      mydiaryTime: '10min',
      date: '2021.05.21'
    }
  ])

  const [visibleMydiaryCount, setVisibleMydiaryCount] = useState<number>(8)
  // Hàm để lọc danh sách món ăn theo trạng thái

  // Danh sách món ăn hiển thị thực tế, dựa trên biến visibleFoodCount
  const mydirayToShow = listMyDiary.slice(0, visibleMydiaryCount)

  const handleLoadMore = () => {
    // Hiển thị thêm 8 món ăn
    setVisibleMydiaryCount((prevCount) => prevCount + 8)
  }

  return (
    <Container className='my-record-wrap'>
      <Box className='my-record-entry'>
        <Box className='entry-button'>
          <ImageCustom src={BodyReCord} alt='body-record' className='entry-button__image' />
          <Box className='entry-button__text'>
            <Typography variant='h3' component='h3'>
              BODY RECORD
            </Typography>
            <Link to='/'>自分のカラダの記録</Link>
          </Box>
        </Box>
        <Box className='entry-button'>
          <ImageCustom src={Myexercise} alt='body-record' className='entry-button__image' />
          <Box className='entry-button__text'>
            <Typography variant='h3' component='h3'>
              MY EXERCISE
            </Typography>
            <Link to='/'>自分の運動の記録</Link>
          </Box>
        </Box>
        <Box className='entry-button'>
          <ImageCustom src={MyDiaryImg} alt='body-record' className='entry-button__image' />
          <Box className='entry-button__text'>
            <Typography variant='h3' component='h3'>
              MY DIARY
            </Typography>
            <Link to='/'>自分の日記</Link>
          </Box>
        </Box>
      </Box>

      <Box className='my-record-chart'>
        <Box className='my-record-chart__box'>
          <Box className='box-heading'>
            <Typography variant='h5' component='h5' className='heading'>
              BODY RECORD
            </Typography>
            <Typography variant='h3' component='h3' className='heading'>
              2021.05.21
            </Typography>
          </Box>
        </Box>
        <Box>
          <Chart />
        </Box>
        <Box className='box-buttons'>
          <CustomButton
            text='日'
            className='box-buttons__button'
            backgroundColor='#ffffff'
            backgroundColorHover='transparent'
            boxShadow='none'
          />
          <CustomButton
            text='週'
            className='box-buttons__button'
            backgroundColor='#ffffff'
            backgroundColorHover='transparent'
            boxShadow='none'
          />
          <CustomButton
            text='月'
            className='box-buttons__button'
            backgroundColor='#ffffff'
            backgroundColorHover='transparent'
            boxShadow='none'
          />
          <CustomButton
            text='年'
            className='box-buttons__button box-buttons__button--active'
            backgroundColor='#ffffff'
            backgroundColorHover='transparent'
            boxShadow='none'
          />
        </Box>
      </Box>
      <Box className='my-record-exercise'>
        <Box className='my-record-exercise__box'>
          <Box className='box-heading'>
            <Typography variant='h5' component='h5' className='heading'>
              MY EXCERCISE
            </Typography>
            <Typography variant='h3' component='h3' className='heading'>
              2021.05.21
            </Typography>
          </Box>
          <ListMyExercise list={listMyexercise} />
        </Box>
      </Box>

      <Box className='my-record-diarys'>
        <Typography variant='h3' component='h3' className='heading'>
          MY DIARY
        </Typography>
        <ListMydiary list={mydirayToShow} />
        <Box className='btn-loadmore'>
          {mydirayToShow.length < listMyDiary.length && (
            <button className='btn-loadmore__button' onClick={handleLoadMore}>
              記録をもっと見る
            </button>
          )}
        </Box>
      </Box>
      <ScrollToTopButton />
    </Container>
  )
}

export default MyRecord
