import Main from '../../components/Main'
import ProductsSection from '../../components/ProductsSection'
import { HomeContainer } from './style'

export function Home() {
  return (
    <HomeContainer>
      <Main />
      <ProductsSection />
    </HomeContainer>
  )
}
