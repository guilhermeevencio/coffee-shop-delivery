import { Outlet } from 'react-router-dom'

import React from 'react'

const DefaultLayout = () => {
  return (
    <div>
      {/* <Header /> */}
      <Outlet />
    </div>
  )
}

export default DefaultLayout
