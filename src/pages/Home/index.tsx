import {
  Box,
  CadsContainer,
  Cart,
  Coffe,
  HomeArticle,
  HomeContainer,
  IconContainer,
  Timer,
} from './style'

import post from '../../assets/Imagem.coffee_delivery.svg'
import { Card } from '../../components/Card'

import { coffees } from '../../coffees/index'

export default function Home() {
  return (
    <HomeContainer>
      <section>
        <HomeArticle>
          <div>
            <h1>Econtre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </p>
            <div>
              <p>
                <IconContainer colors="yellowDark">
                  <Cart></Cart>
                </IconContainer>
                Compra simples e segura
              </p>
              <p>
                <IconContainer colors="baseText">
                  <Box />
                </IconContainer>
                Embalagem mantém o café intacto
              </p>
              <p>
                <IconContainer colors="yellow">
                  <Timer />
                </IconContainer>
                Entrega rápido e rastreada
              </p>
              <p>
                <IconContainer colors="purple">
                  <Coffe />
                </IconContainer>
                O café chega fresquinho até você
              </p>
            </div>
          </div>
          <img src={post} alt="copo-de-café" />
        </HomeArticle>
      </section>

      <CadsContainer>
        <section>
          <h2>Nossos cafés</h2>
          <div>
            {coffees.map((coffe) => {
              return <Card coffee={coffe} key={coffe.id} />
            })}
          </div>
        </section>
      </CadsContainer>
    </HomeContainer>
  )
}
