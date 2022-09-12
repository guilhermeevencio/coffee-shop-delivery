import React from 'react'
import { CoffeeMock } from '../../helpers/mocks/coffeeMock'
import {
  CartInfoContainer,
  PriceContainer,
  ProductCardContainer,
  CartContainer,
  CartIconContainer,
} from './styles'
import { ShoppingCart } from 'phosphor-react'

export function ProductCard(props: CoffeeMock) {
  return (
    <ProductCardContainer>
      <img src={props.image} alt={props.title} />
      <div>
        {props.tag.map((tag) => (
          <span key={props.title}>{tag}</span>
        ))}
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <CartInfoContainer>
        <PriceContainer>
          <p>R$</p>
          <h2>
            {`${props.price.toLocaleString('pt-br', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`}
          </h2>
        </PriceContainer>
        <CartContainer>
          <div>
            <button type="button">-</button>
            <p>1</p>
            <button type="button">+</button>
          </div>
          <CartIconContainer>
            <ShoppingCart size={22} weight="fill" />
          </CartIconContainer>
        </CartContainer>
      </CartInfoContainer>
    </ProductCardContainer>
  )
}
