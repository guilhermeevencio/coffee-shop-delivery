import { MapPinLine } from 'phosphor-react'

export function Checkout() {
  return (
    <div>
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
          <p>Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
          <div>
            <button type="button">Cartão de Crédito</button>
            <button type="button">Cartão de Débito</button>
            <button type="button">Dinheiro</button>
          </div>
        </div>
      </div>
      <div>
        <h3>Cafés selecinados</h3>
        <div>
          {/* colocar aqui os itens que estão salvos no carrinho */}
          <div>
            <p>Total de Itens</p>
            <p>Entrega</p>
            <p>Total</p>
          </div>
          <button type="button">Confirmar Pedido</button>
        </div>
      </div>
    </div>
  )
}
