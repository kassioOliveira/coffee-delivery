import { createContext, useReducer, ReactNode } from 'react'

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

interface OrdersContextProps {
  orders: OrderProps[]
  cart: CoffeeType[]
  productsPrice: number
  deliveryPrice: number
  totalPrice: number
  addCoffeeToCart: (coffee: CoffeeType, amount: number) => void
  updateAmountItemCart: (coffee: CoffeeType, amount: number) => void
  removeCoffeeFromCart: (coffeeId: string) => void
  //  completeCurrentOrder: (orderData: OrderData) => void;
}

interface CurrentOrder {
  cart: CoffeeType[] | []
  totalPrice: number
  deliveryPrice: number
  productsPrice: number
}

interface OrdersState {
  orders: []
  currentOrder: CurrentOrder
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

          return {
            orders,
            currentOrder: {
              cart: newCart,
              totalPrice: 0,
              deliveryPrice: 0,
              productsPrice: 0,
            },
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

          return {
            orders,
            currentOrder: {
              cart: newCart,
              totalPrice: 0,
              deliveryPrice: 0,
              productsPrice: 0,
            },
          }
        }
        case 'REMOVE_ITEM_FROM_CART': {
          const { orders, currentOrder } = state

          const { cart } = currentOrder

          const newCart = cart.filter((coffee: CoffeeType) => {
            return coffee.id !== action.payload.id
          })

          return {
            orders,
            currentOrder: {
              cart: newCart,
              totalPrice: 0,
              deliveryPrice: 0,
              productsPrice: 0,
            },
          }
        }
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
  )

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

  return (
    <OrdersContext.Provider
      value={{
        addCoffeeToCart,
        updateAmountItemCart,
        removeCoffeeFromCart,
        cart: ordersState?.currentOrder.cart,
      }}
    >
      {children}
    </OrdersContext.Provider>
  )
}
