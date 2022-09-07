import { Outlet } from 'react-router-dom'

import React from 'react'

const DefaultLayout = () => {
  return (
    <div>
      {/* <Header /> */}
      <h3>DefaultLayout</h3>
      <Outlet />
    </div>
  )
}

export default DefaultLayout
