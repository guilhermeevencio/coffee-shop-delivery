import coffee from '../../assets/coffee-logo.svg'
import mapPinFill from '../../assets/map-pin-fill.svg'
import { Link } from 'react-router-dom'
import {
  CartItemsContainer,
  HeaderContainer,
  LocationDiv,
  NavContainer,
} from './style'
import { ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffee} alt="coffee cup" />
      <NavContainer>
        <LocationDiv>
          <img src={mapPinFill} alt="Location Pin" />
          <p>Porto Alegre, RS</p>
        </LocationDiv>
        <Link to="/checkout">
          <CartItemsContainer>
            <ShoppingCart size={22} weight="fill" />
          </CartItemsContainer>
        </Link>
      </NavContainer>
    </HeaderContainer>
  )
}
