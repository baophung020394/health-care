import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const LazyTopPage = lazy(() => import('@pages/TopPage/'))
const LazyMyRecord = lazy(() => import('@pages/MyRecordPage/'))
const LazyColumnPage = lazy(() => import('@pages/ColumnPage/'))

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/tops' element={<LazyTopPage />} />
      <Route path='/myrecords' element={<LazyMyRecord />} />
      <Route path='/columns' element={<LazyColumnPage />} />
    </Routes>
  )
}

export default AppRoutes
