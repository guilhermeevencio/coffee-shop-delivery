import React from 'react'
import { CoffeeMock } from '../../helpers/mocks/coffeeMock'

export function ProductCard(props: CoffeeMock) {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      {props.tag.map((tag) => (
        <p key={tag}>{tag}</p>
      ))}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.price}</p>
    </div>
  )
}
