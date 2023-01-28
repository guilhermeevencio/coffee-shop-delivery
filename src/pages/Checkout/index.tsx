/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
import {
  MapPinLine,
  Money,
  Bank,
  CreditCard,
  CurrencyDollar,
} from 'phosphor-react'
import { CheckoutProduct } from '../../components/CheckoutProduct'
import { CheckoutContainer } from './style'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import { AppContext, IFormData } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'

enum FormActionsTypes {
  cep = 'CEP',
  street = 'STREET',
  streetNumber = 'STREET_NUMBER',
  complement = 'COMPLEMENT',
  district = 'DISTRICT',
  city = 'CITY',
  uf = 'UF',
  paymentMethod = 'PAYMENT_METHOD',
}

interface IFormAction {
  type: FormActionsTypes
  payload: string
}

function formReducer(state: IFormData, action: IFormAction) {
  const { type, payload } = action

  switch (type) {
    case FormActionsTypes.cep:
      return {
        ...state,
        cep: payload,
      }
    case FormActionsTypes.street:
      return {
        ...state,
        street: payload,
      }
    case FormActionsTypes.streetNumber:
      return {
        ...state,
        streetNumber: payload,
      }
    case FormActionsTypes.complement:
      return {
        ...state,
        complement: payload,
      }
    case FormActionsTypes.city:
      return {
        ...state,
        city: payload,
      }
    case FormActionsTypes.district:
      return {
        ...state,
        district: payload,
      }
    case FormActionsTypes.uf:
      return {
        ...state,
        ud: payload,
      }
    case FormActionsTypes.paymentMethod:
      return {
        ...state,
        paymentMethod: payload,
      }
    default:
      return state
  }
}

export const initialState: IFormData = {
  cep: '',
  street: '',
  streetNumber: '',
  complement: '',
  district: '',
  city: 'Porto Alegre',
  uf: 'RS',
  paymentMethod: 'Dinheiro',
}

export function Checkout() {
  const { cartItems, setFormData } = useContext(AppContext)
  const [totalCart, setTotalCart] = useState(0)
  const [formState, dispatch] = useReducer(formReducer, initialState)
  const navigate = useNavigate()

  useEffect(() => {
    let total = 0
    cartItems.forEach((item) => {
      total += item.price * item.quantity
    })
    setTotalCart(total)
  }, [cartItems])

  useEffect(() => {
    console.log(formState)
  }, [formState])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const payload = event.currentTarget.value
    const inputId = event.currentTarget.id
    const type = FormActionsTypes[inputId as keyof typeof FormActionsTypes]
    dispatch({ type, payload })
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const action = event.currentTarget.className
    const payload = event.currentTarget.name
    const type = FormActionsTypes[action as keyof typeof FormActionsTypes]
    dispatch({ type, payload })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormData(formState)
    navigate('/success')
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Complete seu pedido</h3>
          <div>
            <div>
              <MapPinLine />
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>

            <input
              type="number"
              id="cep"
              placeholder="CEP"
              onChange={handleChange}
            />
            <input
              type="text"
              id="street"
              placeholder="Rua"
              onChange={handleChange}
            />
            <div>
              <input
                type="number"
                id="streetNumber"
                placeholder="Número"
                onChange={handleChange}
              />
              <input
                type="text"
                id="complement"
                placeholder="Complemento"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                id="district"
                placeholder="Bairro"
                onChange={handleChange}
              />
              <input
                type="text"
                id="city"
                placeholder="Cidade"
                value="Porto Alegre"
                disabled
              />
              <input type="text" id="uf" placeholder="UF" value="RS" disabled />
            </div>
          </div>
          <div>
            <CurrencyDollar />
            <p>Pagamento</p>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
            <div>
              <button
                type="button"
                id="credit"
                className="paymentMethod"
                onClick={handleClick}
                name="Cartão de Crédito"
              >
                <CreditCard />
                Cartão de Crédito
              </button>
              <button
                type="button"
                id="debit"
                className="paymentMethod"
                onClick={handleClick}
                name="Cartão de Débito"
              >
                <Bank />
                Cartão de Débito
              </button>
              <button
                type="button"
                id="cash"
                className="paymentMethod"
                onClick={handleClick}
                name="Dinheiro"
              >
                <Money />
                Dinheiro
              </button>
            </div>
          </div>
        </div>
        <div>
          <h3>Cafés selecinados</h3>
          <div>
            {cartItems.map((item) => (
              <CheckoutProduct {...item} key={item.title} />
            ))}
            <div>
              <p>
                Total de Itens:{' '}
                {totalCart.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
              <p>Entrega: R$ 3,50</p>
              <p>
                Total:{' '}
                {(totalCart + 3.5).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
            </div>
            <button type="submit">Confirmar Pedido</button>
          </div>
        </div>
      </form>
    </CheckoutContainer>
  )
}
