import { coffeeInfoArray } from '../../helpers/mocks/coffeeMock'
import { ProductCard } from '../../components/ProductCard'
import { ProductsSectionContainer } from './styles'

const ProductsSection = () => {
  return (
    <ProductsSectionContainer>
      {coffeeInfoArray.map((coffee) => (
        <ProductCard {...coffee} key={coffee.title} />
      ))}
    </ProductsSectionContainer>
  )
}

export default ProductsSection
