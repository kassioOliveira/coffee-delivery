import { useContext, useEffect, useState } from 'react'
import { CardCart, CardContainer } from './style'
import { DoubleButton } from '../DoubleButton'

import { coffees } from '../../coffees'
import { OrdersContext, CoffeeType } from '../../contexts/OrdersProvider'

interface CardCoffee {
  coffee: CoffeeType
}

export function Card({ coffee }: CardCoffee) {
  const { addCoffeeToCart } = useContext(OrdersContext)

  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    setTotalAmount(coffee.amount)
  }, [coffee.amount])

  function increaseQuantity(coffeeId: string) {
    coffees.map((coffe) => {
      if (coffe.id === coffeeId && totalAmount < 9) {
        const total = coffe.amount + 1
        coffe.amount = total

        setTotalAmount((state) => state + 1)
        return coffe
      } else {
        return coffe
      }
    })
  }

  function decreaseQuantity(coffeeId: string) {
    coffees.map((coffe) => {
      if (coffe.id === coffeeId) {
        if (coffe.amount) {
          const total = coffe.amount - 1
          coffe.amount = total

          setTotalAmount((state) => state - 1)
          return coffe
        }

        return coffe
      } else {
        return coffe
      }
    })
  }

  const isEmpty = totalAmount === 0

  return (
    <CardContainer>
      <header>
        <img src={coffee.srcImg} alt={coffee.title} />
        <div>
          {coffee.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h1>{coffee.title}</h1>
      </header>
      <div>
        <p>{coffee.description}</p>
      </div>
      <footer>
        <div>
          <span>
            R$
            <strong>{coffee.price}</strong>
          </span>
          <DoubleButton
            id={coffee.id}
            amount={totalAmount}
            increase={increaseQuantity}
            decrease={decreaseQuantity}
          />
          <button
            disabled={isEmpty}
            title={isEmpty ? 'Adicione uma quantidade' : ''}
            type="button"
            onClick={() => addCoffeeToCart(coffee, totalAmount)}
          >
            <CardCart />
          </button>
        </div>
      </footer>
    </CardContainer>
  )
}
