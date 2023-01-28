import { useContext } from 'react'
import { AppContext, ICartItem } from '../../context/AppContext'
import { CartButtons } from '../CartButtons'
import { CheckoutProductContainer, ButtonsContainer } from './style'

export function CheckoutProduct(props: ICartItem) {
  const { cartItems, setCartItems } = useContext(AppContext)

  function handleRemoveItem() {
    const filteredItems = cartItems.filter((item) => item.title !== props.title)
    setCartItems(filteredItems)
  }
  return (
    <CheckoutProductContainer>
      <img src={props.image} alt="foto do café" />
      <div>
        <p>{props.title}</p>
        <ButtonsContainer>
          <CartButtons {...props} />
          <button type="button" onClick={handleRemoveItem}>
            Remover
          </button>
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
