import PrivateRoute from '@components/PrivateRoute'
import PublicRoute from '@components/PublicRoute'
import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const LazyLoginPage = lazy(() => import('@pages/LoginPage/'))
const LazyTopPage = lazy(() => import('@pages/TopPage/'))
const LazyMyRecord = lazy(() => import('@pages/MyRecordPage/'))
const LazyColumnPage = lazy(() => import('@pages/ColumnPage/'))

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/login' element={<PublicRoute element={<LazyLoginPage />} />} />
      <Route path='/tops' element={<PrivateRoute element={<LazyTopPage />} />} />
      <Route path='/myrecords' element={<PrivateRoute element={<LazyMyRecord />} />} />
      <Route path='/columns' element={<LazyColumnPage />} />
      <Route path='*' element={<PrivateRoute element={<LazyTopPage />} />} />
    </Routes>
  )
}

export default AppRoutes
