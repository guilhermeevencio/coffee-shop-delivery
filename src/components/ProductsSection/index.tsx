import { coffeeInfoArray } from '../../helpers/mocks/coffeeMock'
import { ProductCard } from '../../components/ProductCard'

const ProductsSection = () => {
  return (
    <div>
      {coffeeInfoArray.map((coffee) => (
        <ProductCard {...coffee} key={coffee.title} />
      ))}
    </div>
  )
}

export default ProductsSection
