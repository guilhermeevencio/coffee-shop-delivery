import { useContext } from 'react'
import { AppContext, ICartItem } from '../../context/AppContext'
import { CartContainer, AddAndRemoveButtons, StyledText } from './style'

export function CartButtons(props: ICartItem) {
  const { cartItems, setCartItems } = useContext(AppContext)

  function handleAddToCart(): void {
    const cartItem = cartItems.find((item) => item.title === props.title)
    if (cartItem) {
      cartItem.quantity += 1
      const newCartItemArray = [...cartItems]
      setCartItems(newCartItemArray)
    }
  }

  function handleRemoveFromCart(): void {
    const cartItem = cartItems.find((item) => item.title === props.title)
    if (cartItem && cartItem.quantity > 1) {
      cartItem.quantity -= 1
      const newCartItemArray = [...cartItems]
      setCartItems(newCartItemArray)
    }
  }

  return (
    <CartContainer>
      <AddAndRemoveButtons type="button" onClick={handleRemoveFromCart}>
        -
      </AddAndRemoveButtons>

      <StyledText>{props.quantity}</StyledText>

      <AddAndRemoveButtons type="button" onClick={handleAddToCart}>
        +
      </AddAndRemoveButtons>
    </CartContainer>
  )
}
