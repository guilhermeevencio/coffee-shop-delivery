import React, { useState } from 'react'
import { AppContext, ICartItem } from './AppContext'

type Props = {
  children: React.ReactNode
}

export function Provider({ children }: Props) {
  const [cartItems, setCartItems] = useState<ICartItem[] | null>(null)

  const contextValue = {
    cartItems,
    setCartItems,
  }

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}
