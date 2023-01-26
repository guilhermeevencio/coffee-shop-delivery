import { ICartItem } from '../../context/AppContext'

export function CheckoutProduct(props: ICartItem) {
  return (
    <div>
      <img src={props.image} alt="foto do café" />
      <div>
        <p>{props.title}</p>
        <p>- 0 +</p>
        <button>Remover</button>
      </div>
      <p>{props.quantity * props.price}</p>
    </div>
  )
}
