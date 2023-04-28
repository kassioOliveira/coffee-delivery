import { useWindowSize } from '../../../../hooks/useWindowSize'
import {
  Bank,
  ButtonsContainer,
  Cash,
  CreditCard,
  Money,
  PaymentOptionsContainer,
} from './style'

export function PaymentOptions() {
  const size = useWindowSize()
  return (
    <PaymentOptionsContainer>
      <div>
        <span>
          <Money /> Pagamento
        </span>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </div>

      <ButtonsContainer>
        <button type="button" title="Cartão de crédito">
          <CreditCard />
          {size.width && (size.width > 575 ? 'Cartão de crédito' : '')}
        </button>
        <button type="button" title="Cartão de débito">
          <Bank /> {size.width && (size.width > 575 ? 'Cartão de débito' : '')}
        </button>
        <button type="button" title="Dinheiro">
          <Cash />
          {size.width && (size.width > 575 ? 'Dinheiro' : '')}
        </button>
      </ButtonsContainer>
    </PaymentOptionsContainer>
  )
}
