import React, { createContext } from 'react'
import { CoffeeMock } from '../helpers/mocks/coffeeMock'

export interface ICartItem extends CoffeeMock {
  quantity: number
}

export interface IFormData {
  cep: string
  street: string
  streetNumber: string
  complement?: string
  district: string
  city: string
  uf: string
  paymentMethod: string
}

export interface ICartContextType {
  cartItems: ICartItem[] | []
  setCartItems: React.Dispatch<React.SetStateAction<ICartItem[] | []>>
  formData: IFormData
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>
}

export const AppContext = createContext({
  cartItems: [],
  formData: {},
} as ICartContextType)
