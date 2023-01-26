import { useContext, useState } from 'react'
import { CoffeeMock } from '../../helpers/mocks/coffeeMock'
import {
  CartInfoContainer,
  PriceContainer,
  ProductCardContainer,
  CartContainer,
  CartIconContainer,
  StyledInput,
  AddToCartButton,
  AddAndRemoveButtons,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { AppContext } from '../../context/AppContext'

export function ProductCard(props: CoffeeMock) {
  const [quantity, setQuantity] = useState(0)
  const { cartItems, setCartItems } = useContext(AppContext)

  function handleAddToCart(): void {
    setQuantity(quantity + 1)
  }

  function handleRemoveFromCart(): void {
    if (quantity > 0) setQuantity(quantity - 1)
  }

  function handleSubmit(): void {
    const cartItem = cartItems.find((item) => item.title === props.title)
    if (!cartItem && quantity > 0) {
      setCartItems([...cartItems, { ...props, quantity }])
    }
    if (cartItem) {
      cartItem.quantity = quantity
      const newCartItemArray = [...cartItems]
      setCartItems(newCartItemArray)
    }
  }

  return (
    <ProductCardContainer>
      <img src={props.image} alt={props.title} />
      <div>
        {props.tag.map((tag, index) => (
          <span key={`${props.title}-${index}`}>{tag}</span>
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
            <AddAndRemoveButtons type="button" onClick={handleRemoveFromCart}>
              -
            </AddAndRemoveButtons>

            <StyledInput
              type="number"
              onChange={({ target }) => setQuantity(Number(target.value))}
              value={quantity}
            />

            <AddAndRemoveButtons type="button" onClick={handleAddToCart}>
              +
            </AddAndRemoveButtons>
          </div>
          <CartIconContainer>
            <AddToCartButton type="button" onClick={handleSubmit}>
              <ShoppingCart size={22} weight="fill" />
            </AddToCartButton>
          </CartIconContainer>
        </CartContainer>
      </CartInfoContainer>
    </ProductCardContainer>
  )
}
