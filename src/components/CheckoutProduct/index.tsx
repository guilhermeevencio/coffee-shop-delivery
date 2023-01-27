import { ICartItem } from '../../context/AppContext'
import { CheckoutProductContainer, ButtonsContainer } from './style'

export function CheckoutProduct(props: ICartItem) {
  return (
    <CheckoutProductContainer>
      <img src={props.image} alt="foto do café" />
      <div>
        <p>{props.title}</p>
        <ButtonsContainer>
          <p>- 0 +</p>
          <button>Remover</button>
        </ButtonsContainer>
      </div>
      <p>
        {(props.quantity * props.price).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
    </CheckoutProductContainer>
  )
}
