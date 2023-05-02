import { useWindowSize } from '../../../../hooks/useWindowSize'
import {
  Bank,
  ButtonsContainer,
  Cash,
  CreditCard,
  Money,
  PaymentMethodButton,
  PaymentOptionsContainer,
} from './style'

interface PaymentProps {
  handlePaymentMethod: (method: string) => void
  method: string
}

export function PaymentOptions({ handlePaymentMethod, method }: PaymentProps) {
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
        <PaymentMethodButton
          type="button"
          title="Cartão de crédito"
          selected={method === 'crédito'}
          onClick={() => handlePaymentMethod('crédito')}
        >
          <CreditCard />
          {size.width && (size.width > 575 ? 'Cartão de crédito' : '')}
        </PaymentMethodButton>
        <PaymentMethodButton
          type="button"
          title="Cartão de débito"
          selected={method === 'débito'}
          onClick={() => handlePaymentMethod('débito')}
        >
          <Bank /> {size.width && (size.width > 575 ? 'Cartão de débito' : '')}
        </PaymentMethodButton>
        <PaymentMethodButton
          type="button"
          title="Dinheiro"
          selected={method === 'Dinheiro'}
          onClick={() => handlePaymentMethod('Dinheiro')}
        >
          <Cash />
          {size.width && (size.width > 575 ? 'Dinheiro' : '')}
        </PaymentMethodButton>
      </ButtonsContainer>
    </PaymentOptionsContainer>
  )
}
