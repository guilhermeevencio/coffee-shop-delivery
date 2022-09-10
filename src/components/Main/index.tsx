import {
  Icondescription,
  IconsMainDiv,
  ImageDiv,
  MainDiv,
  TextDiv,
  TextSection,
} from './style'

import cartDescription from '../../assets/cart-description.svg'
import coffeeDescription from '../../assets/coffee-description-icon.svg'
import descriptionTimer from '../../assets/description-timer.svg'
import packageDescription from '../../assets/package-description.svg'
import coffeeImage from '../../assets/coffee-image-main.svg'

const Main = () => {
  return (
    <MainDiv>
      <TextDiv>
        <TextSection>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </TextSection>
        <IconsMainDiv>
          <Icondescription className="description">
            <img src={cartDescription} alt="carrinho de compras" />
            <p>Compra simples e segura</p>
          </Icondescription>
          <Icondescription className="description">
            <img src={packageDescription} alt="pacote de compras" />
            <p>Embalagem mantém o café intacto</p>
          </Icondescription>
          <Icondescription className="description">
            <img src={descriptionTimer} alt="cronômetro" />
            <p>Embalagem mantém o café intacto</p>
          </Icondescription>
          <Icondescription className="description">
            <img src={coffeeDescription} alt="xícara de café" />
            <p>O café chega fresquinho até você</p>
          </Icondescription>
        </IconsMainDiv>
      </TextDiv>
      <ImageDiv>
        <img src={coffeeImage} alt="Copo de café" />
      </ImageDiv>
    </MainDiv>
  )
}

export default Main
