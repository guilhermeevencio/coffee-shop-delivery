import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'

import React from 'react'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" />
      </Route>
    </Routes>
  )
}
