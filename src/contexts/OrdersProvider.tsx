import { createContext, useReducer, ReactNode, useEffect } from 'react'
import { getNewOrderInfo } from '../utils/get-new-order-info'
import { toast } from 'react-toastify'

export type CoffeeType = {
  title: string
  tags: string[]
  amount: number
  description: string
  srcImg: string
  price: string
  id: string
}

interface OrderProps {
  totalPrice: number
  cart: CoffeeType[]
  date: string
  paymentPreference: string
  road: string
  number: string
  city: string
  estate: string
  id: string
  district: string
}

type OrderData = {
  CEP: string
  road: string
  number: string
  complement: string
  district: string
  city: string
  estate: string
  date: string
  id: string
  paymentPreference: string
}

interface OrdersContextProps {
  orders: OrderProps[]
  cart: CoffeeType[]
  productsPrice: number
  deliveryPrice: number
  totalPrice: number
  addCoffeeToCart: (coffee: CoffeeType, amount: number) => void
  updateAmountItemCart: (coffee: CoffeeType, amount: number) => void
  removeCoffeeFromCart: (coffeeId: string) => void
  completeCurrentOrder: (orderData: OrderData) => void
}

interface CurrentOrder {
  cart: CoffeeType[] | []
  totalPrice: number
  deliveryPrice: number
  productsPrice: number
}

export const OrdersContext = createContext({} as OrdersContextProps)

interface OrdersContextProviderProps {
  children: ReactNode
}

export const OrdersProvider = ({ children }: OrdersContextProviderProps) => {
  const [ordersState, dispatch] = useReducer(
    (state: any, action: any) => {
      switch (action.type) {
        case 'ADD_COFFEE_TO_CART': {
          const { orders, currentOrder } = state

          const { cart } = currentOrder

          const newCart = cart.filter((coffee: CoffeeType) => {
            return coffee.id !== action.payload.id
          })

          newCart.push(action.payload)

          const newCurrentOrder = getNewOrderInfo(newCart)
          toast.success('Café adicionando ao carrinho com sucesso!', {
            toastId: 'success1',
          })
          return {
            orders,
            currentOrder: newCurrentOrder,
          }
        }
        case 'UPDATE_AMOUNT_ITEM_CART': {
          const { orders, currentOrder } = state

          const { cart } = currentOrder

          const newCart = cart.map((coffee: CoffeeType) => {
            if (coffee.id === action.payload.id) {
              coffee.amount = action.payload.amount
              return coffee
            } else {
              return coffee
            }
          })

          const newCurrentOrder = getNewOrderInfo(newCart)

          return {
            orders,
            currentOrder: newCurrentOrder,
          }
        }
        case 'REMOVE_ITEM_FROM_CART': {
          const { orders, currentOrder } = state

          const { cart } = currentOrder

          const newCart = cart.filter((coffee: CoffeeType) => {
            return coffee.id !== action.payload.id
          })

          const newCurrentOrder = getNewOrderInfo(newCart)
          toast.success('Café removido do carrinho com sucesso!', {
            toastId: 'removed1',
          })
          return {
            orders,
            currentOrder: newCurrentOrder,
          }
        }
        case 'CONFIRM_ORDER': {
          const { orders, currentOrder } = state

          const { cart, totalPrice } = currentOrder

          const newCompleteOrder = {
            cart,
            totalPrice,
            ...action.payload.orderData,
          }

          return {
            orders: [...orders, newCompleteOrder],
            currentOrder: {
              cart: [],
              totalPrice: 0,
              deliveryPrice: 0,
              productsPrice: 0,
            },
          }
        }

        default:
          return state
      }
    },
    {
      orders: [],
      currentOrder: {
        cart: [],
        totalPrice: 0,
        deliveryPrice: 0,
        productsPrice: 0,
      },
    },

    () => {
      const storedStateAsJSON = localStorage.getItem('@coffee-delivery/orders')

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return {
        orders: [],
        currentOrder: {
          cart: [],
          totalPrice: 0,
          deliveryPrice: 0,
          productsPrice: 0,
        },
      }
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(ordersState)

    localStorage.setItem('@coffee-delivery/orders', stateJSON)
  }, [ordersState])

  const { orders } = ordersState as { orders: OrderProps[] }
  const { currentOrder } = ordersState as {
    currentOrder: CurrentOrder
  }

  const { cart, deliveryPrice, productsPrice, totalPrice } = currentOrder

  function addCoffeeToCart(coffee: CoffeeType, amount: number) {
    dispatch({
      type: 'ADD_COFFEE_TO_CART',
      payload: {
        ...coffee,
        amount,
      },
    })
  }

  function updateAmountItemCart(coffee: CoffeeType, amount: number) {
    dispatch({
      type: 'UPDATE_AMOUNT_ITEM_CART',
      payload: {
        ...coffee,
        amount,
      },
    })
  }

  function removeCoffeeFromCart(CoffeId: string) {
    dispatch({
      type: 'REMOVE_ITEM_FROM_CART',
      payload: {
        id: CoffeId,
      },
    })
  }

  function completeCurrentOrder(orderData: OrderData) {
    dispatch({
      type: 'CONFIRM_ORDER',
      payload: {
        cart,
        orderData,
      },
    })
  }

  return (
    <OrdersContext.Provider
      value={{
        orders,
        addCoffeeToCart,
        updateAmountItemCart,
        removeCoffeeFromCart,
        completeCurrentOrder,
        cart,
        deliveryPrice,
        productsPrice,
        totalPrice,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}
