import { Cart, HeaderComponent } from './style'
import { HiLocationMarker } from 'react-icons/hi'

import logo from '../../assets/Logo.coffee_delivery.svg'

export function Header() {
  return (
    <HeaderComponent>
      <img src={logo} alt="logo" />
      <div>
        <strong>
          <HiLocationMarker size={30} /> porto alegre
        </strong>
        <span data-count={`3`}>
          <Cart />
        </span>
      </div>
    </HeaderComponent>
  )
}
