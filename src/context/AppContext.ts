import React, { createContext } from 'react'
import { CoffeeMock } from '../helpers/mocks/coffeeMock'

export interface ICartItem extends CoffeeMock {
  quantity: number
}

export interface ICartContextType {
  cartItems: ICartItem[] | []
  setCartItems: React.Dispatch<React.SetStateAction<ICartItem[] | []>>
}

export const AppContext = createContext({ cartItems: [] } as ICartContextType)
