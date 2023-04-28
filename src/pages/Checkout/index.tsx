import { CheckoutContainer } from './style'

import { PaymentOptions } from './components/PaymentOptions'
import SelectedCoffes from './components/SelectedCoffees'
import Address from './components/Address'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <Address />
        <PaymentOptions />
      </div>
      <SelectedCoffes />
    </CheckoutContainer>
  )
}
