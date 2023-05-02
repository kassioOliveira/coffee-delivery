import { useContext } from 'react'
import {
  AddressContainer,
  CityInput,
  ComplementInput,
  DeliveryAddress,
  FormContainer,
  NeighborhoodInput,
  NumberInput,
  RoadInput,
  StateInput,
  ZipCodeInput,
} from './style'

import { v4 as uuidv4 } from 'uuid'
import { format } from 'date-fns'

import { ptBR } from 'date-fns/locale'

import { useFormContext } from 'react-hook-form'
import { OrdersContext } from '../../../../contexts/OrdersProvider'
import { toast } from 'react-toastify'

interface AddressProps {
  method: string
  handlePaymentMethod: (method: string) => void
}

export default function Address({ method, handlePaymentMethod }: AddressProps) {
  const { register, handleSubmit, reset } = useFormContext()

  const { completeCurrentOrder } = useContext(OrdersContext)

  function handleAddAddress(data: any) {
    const newOrderData = {
      ...data,
      paymentPreference: method,
      date: format(new Date(), 'dd/MM/yyyy', { locale: ptBR }),
      id: uuidv4(),
    }
    if (method.length === 0) {
      toast.warning('Selecione um meio de pagamento!')
      return
    }
    completeCurrentOrder(newOrderData)
    handlePaymentMethod('')
    reset()
  }

  return (
    <AddressContainer>
      <h3>Complete seu pedido</h3>
      <div>
        <div>
          <span>
            <DeliveryAddress /> Endereço de entrega
          </span>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>

        <form onSubmit={handleSubmit(handleAddAddress)} id="completeOrderForm">
          <ZipCodeInput type="text" placeholder="CEP" {...register('CEP')} />
          <RoadInput placeholder="Rua" type="text" {...register('road')} />

          <FormContainer>
            <div>
              <NumberInput
                type="text"
                {...register('number')}
                placeholder="Número"
              />
              <ComplementInput
                placeholder="Complemento"
                type="text"
                {...register('complement')}
              />
            </div>
            <div>
              <NeighborhoodInput
                type="text"
                placeholder="Bairro"
                {...register('district')}
              />
              <div>
                <CityInput
                  type="text"
                  placeholder="Cidade"
                  {...register('city')}
                />
                <StateInput
                  type="text"
                  placeholder="UF"
                  {...register('estate')}
                />
              </div>
            </div>
          </FormContainer>
        </form>
      </div>
    </AddressContainer>
  )
}
