import React, { createContext } from 'react'
import { CoffeeMock } from '../helpers/mocks/coffeeMock'

export interface ICartItem extends CoffeeMock {
  quantity: number
}

export interface ICart {
  cartItems: ICartItem[] | null
  setCartItems: React.Dispatch<React.SetStateAction<ICartItem[] | null>>
}

export const AppContext = createContext<ICart | null>(null)
