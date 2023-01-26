import { coffeeInfoArray } from '../../helpers/mocks/coffeeMock'
import { ProductCard } from '../../components/ProductCard'
import { ProductsSectionContainer } from './styles'
import { AppContext } from '../../context/AppContext'
import { useContext, useEffect } from 'react'

const ProductsSection = () => {
  const { cartItems, setCartItems } = useContext(AppContext)

  // useEffect(() => {
  //   coffeeInfoArray.forEach((coffee) => {
  //     const { description, image, tag, title, price } = coffee
  //     const cartItem = { description, image, tag, title, price, quantity: 1 }
  //     setCartItems([...cartItems, cartItem])
  //   })
  // }, [])
  // console.log(cartItems)

  return (
    <ProductsSectionContainer>
      {coffeeInfoArray.map((coffee) => (
        <ProductCard {...coffee} key={coffee.title} />
      ))}
    </ProductsSectionContainer>
  )
}

export default ProductsSection
