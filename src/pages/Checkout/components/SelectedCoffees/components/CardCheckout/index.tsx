import { CardCheckoutContainer, Trash } from './style'

import image from '../../../../../../assets/Image.arabe.svg'
import { DoubleButton } from '../../../../../../components/DoubleButton'
import { useWindowSize } from '../../../../../../hooks/useWindowSize'

export default function CardCheckout() {
  const size = useWindowSize()

  return (
    <CardCheckoutContainer>
      <img src={image} alt="" />
      <div>
        <span>Expresso Tradicional</span>
        <div>
          <DoubleButton resize />
          <button>
            <Trash />
            {size.width && (size.width > 400 ? 'Remover' : '')}
          </button>
        </div>
      </div>
      <strong>R$ 9,90</strong>
    </CardCheckoutContainer>
  )
}
