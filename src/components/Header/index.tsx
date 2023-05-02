import { Link } from 'react-router-dom'

import { Cart, HeaderComponent } from './style'
import { HiLocationMarker } from 'react-icons/hi'

import logo from '../../assets/Logo.coffee_delivery.svg'
import { useContext } from 'react'
import { OrdersContext } from '../../contexts/OrdersProvider'

export function Header() {
  const { cart } = useContext(OrdersContext)

  return (
    <HeaderComponent>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div>
        <strong>
          <HiLocationMarker size={30} /> porto alegre
        </strong>
        <Link data-count={cart.length} to="/checkout">
          <Cart />
        </Link>
      </div>
    </HeaderComponent>
  )
}
