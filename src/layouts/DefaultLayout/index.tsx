import { Outlet } from 'react-router-dom'

import React from 'react'
import { Header } from '../../components/Header'

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default DefaultLayout
