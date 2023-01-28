import React, { useState } from 'react'
import { coffeeInfoArray } from '../helpers/mocks/coffeeMock'
import { initialState } from '../pages/Checkout'
import { AppContext, ICartItem, IFormData } from './AppContext'

type Props = {
  children: React.ReactNode
}

export function Provider({ children }: Props) {
  const [cartItems, setCartItems] = useState<ICartItem[] | []>([
    { ...coffeeInfoArray[0], quantity: 2 },
    { ...coffeeInfoArray[4], quantity: 3 },
  ])
  const [formData, setFormData] = useState<IFormData>(initialState)

  const contextValue = {
    cartItems,
    setCartItems,
    formData,
    setFormData,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
