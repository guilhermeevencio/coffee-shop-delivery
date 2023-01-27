import {
  MapPinLine,
  Money,
  Bank,
  CreditCard,
  CurrencyDollar,
} from 'phosphor-react'
import { CheckoutProduct } from '../../components/CheckoutProduct'
import { CheckoutContainer } from './style'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'

export function Checkout() {
  const { cartItems } = useContext(AppContext)
  const [totalCart, setTotalCart] = useState(0)

  useEffect(() => {
    console.log(cartItems)

    let total = 0
    cartItems.forEach((item) => {
      total += item.price * item.quantity
    })
    setTotalCart(total)
    console.log(totalCart)
  }, [cartItems])
  return (
    <CheckoutContainer>
      <div>
        <h3>Complete seu pedido</h3>
        <div>
          <div>
            <MapPinLine />
            <p>Endereço de Entrega</p>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>

          <form>
            <input type="text" id="cep" placeholder="CEP" />
            <input type="text" id="rua" placeholder="Rua" />
            <div>
              <input type="number" id="numero" placeholder="Número" />
              <input type="text" id="complemento" placeholder="Complemento" />
            </div>
            <div>
              <input type="text" id="bairro" placeholder="Bairro" />
              <input type="text" id="cidade" placeholder="Cidade" />
              <input type="text" id="UF" placeholder="UF" />
            </div>
          </form>
        </div>
        <div>
          <CurrencyDollar />
          <p>Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <div>
            <button type="button">
              <CreditCard />
              Cartão de Crédito
            </button>
            <button type="button">
              <Bank />
              Cartão de Débito
            </button>
            <button type="button">
              <Money />
              Dinheiro
            </button>
          </div>
        </div>
      </div>
      <div>
        <h3>Cafés selecinados</h3>
        <div>
          {/* colocar aqui os itens que estão salvos no carrinho */}
          {cartItems.map((item) => (
            <CheckoutProduct {...item} key={item.title} />
          ))}
          <div>
            <p>
              Total de Itens:{' '}
              {totalCart.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
            <p>Entrega: R$ 3,50</p>
            <p>
              Total:{' '}
              {(totalCart + 3.5).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
          <button type="button">Confirmar Pedido</button>
        </div>
      </div>
    </CheckoutContainer>
  )
}
