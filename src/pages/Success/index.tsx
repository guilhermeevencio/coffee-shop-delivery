import {
  HeaderText,
  SucessDiv,
  DetailsDiv,
  DetailsContainer,
  InfoWrapper,
} from './style'
import mapPinSuccess from '../../assets/map-pin-success.svg'
import time from '../../assets/time-icon.svg'
import moneyFill from '../../assets/money-fill.svg'
import illustration from '../../assets/success-illustration.svg'

export function Success() {
  return (
    <SucessDiv>
      <HeaderText>Uhu! Pedido confirmado</HeaderText>
      <p>Agora á só aguardar que logo o café chegará até você.</p>
      <InfoWrapper>
        <DetailsContainer>
          <DetailsDiv>
            <img src={mapPinSuccess} alt="pin" />
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102 </strong>
              <br />
              Farrapos - Porto Alegre, RS
            </p>
          </DetailsDiv>
          <DetailsDiv>
            <img src={time} alt="pin" />
            <p>
              Previsão de entrega <br />
              <strong>20 - 30 minutos</strong>
            </p>
          </DetailsDiv>
          <DetailsDiv>
            <img src={moneyFill} alt="pin" />
            <p>
              Pagamento na entrega <br />
              <strong>Cartão de crédito</strong>
            </p>
          </DetailsDiv>
        </DetailsContainer>
        <div>
          <img src={illustration} alt="moto delivery" />
        </div>
      </InfoWrapper>
    </SucessDiv>
  )
}
