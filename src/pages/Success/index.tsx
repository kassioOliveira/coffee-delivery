import {
  LocationSuccess,
  MoneyDelivery,
  SuccessContainer,
  TimerDelivery,
} from './style'

import success from '../../assets/Illustration_success_delivery.svg'

export function Success() {
  return (
    <SuccessContainer>
      <section>
        <article>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só guardar que logo o café chegará até você</p>
          <div>
            <div>
              <span>
                <LocationSuccess />
              </span>
              <div>
                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </div>
            </div>

            <div>
              <span>
                <TimerDelivery />
              </span>
              <div>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <span>
                <MoneyDelivery />
              </span>
              <div>
                <p>Pagamento na entrega</p>
                <strong>Cartão de crédito</strong>
              </div>
            </div>
          </div>
        </article>
        <img src={success} alt="" />
      </section>
    </SuccessContainer>
  )
}
