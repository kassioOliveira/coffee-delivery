import { CardCheckoutContainer, Trash } from './style'

import { DoubleButton } from '../../../../../../components/DoubleButton'
import { useWindowSize } from '../../../../../../hooks/useWindowSize'

import {
  CoffeeType,
  OrdersContext,
} from '../../../../../../contexts/OrdersProvider'
import { useContext, useEffect, useState } from 'react'

interface CardData {
  item: CoffeeType
}

export default function CardCheckout({ item }: CardData) {
  const size = useWindowSize()

  const { updateAmountItemCart, removeCoffeeFromCart } =
    useContext(OrdersContext)

  const [currentAmount, setCurrentAmount] = useState(0)

  useEffect(() => {
    setCurrentAmount(item.amount)
  }, [item.amount])

  function handleDecrease() {
    if (currentAmount === 1) {
      removeCoffeeFromCart(item.id)
      return
    }
    setCurrentAmount((state) => state - 1)

    updateAmountItemCart(item, currentAmount - 1)
  }

  function handleIncrease() {
    if (currentAmount === 9) {
      return
    }
    setCurrentAmount((state) => state + 1)
    updateAmountItemCart(item, currentAmount + 1)
  }

  return (
    <CardCheckoutContainer>
      <img src={item.srcImg} alt={item.title} />
      <div>
        <span>{item.title}</span>
        <div>
          <DoubleButton
            id={item.id}
            amount={currentAmount}
            increase={handleIncrease}
            decrease={handleDecrease}
            resize
          />
          <button onClick={() => removeCoffeeFromCart(item.id)}>
            <Trash />
            {size.width && (size.width > 400 ? 'Remover' : '')}
          </button>
        </div>
      </div>
      <strong>R$ {item.price}</strong>
    </CardCheckoutContainer>
  )
}
