import { FormProvider, useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CheckoutContainer } from './style'
import { PaymentOptions } from './components/PaymentOptions'
import SelectedCoffes from './components/SelectedCoffees'
import Address from './components/Address'
import { useState } from 'react'

const AddressFormValidationSchema = zod.object({
  CEP: zod.string().regex(/^[0-9]{5}-[0-9]{3}$/),
  road: zod.string().min(10),
  number: zod.string().min(1).max(3),
  complement: zod.string().min(15),
  district: zod.string().min(10),
  city: zod.string(),
  estate: zod.string(),
})

export type AddressFormData = zod.infer<typeof AddressFormValidationSchema>

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('')

  const newAddressFormData = useForm<AddressFormData>({
    resolver: zodResolver(AddressFormValidationSchema),
    defaultValues: {
      CEP: '',
      road: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      estate: '',
    },
  })
  function handlePaymentMethod(method: string) {
    setPaymentMethod(method)
  }

  return (
    <CheckoutContainer>
      <FormProvider {...newAddressFormData}>
        <div>
          <Address
            method={paymentMethod}
            handlePaymentMethod={handlePaymentMethod}
          />
          <PaymentOptions
            handlePaymentMethod={handlePaymentMethod}
            method={paymentMethod}
          />
        </div>
        <SelectedCoffes />
      </FormProvider>
    </CheckoutContainer>
  )
}
