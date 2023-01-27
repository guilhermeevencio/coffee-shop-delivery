import React, { useState } from 'react'
import { coffeeInfoArray } from '../helpers/mocks/coffeeMock'
import { AppContext, ICartItem } from './AppContext'

type Props = {
  children: React.ReactNode
}

export function Provider({ children }: Props) {
  const [cartItems, setCartItems] = useState<ICartItem[] | []>([
    { ...coffeeInfoArray[0], quantity: 2 },
    { ...coffeeInfoArray[4], quantity: 3 },
  ])

  const contextValue = {
    cartItems,
    setCartItems,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
