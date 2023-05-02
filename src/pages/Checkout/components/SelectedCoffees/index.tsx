import { useContext } from 'react'
import CardCheckout from './components/CardCheckout'
import { Overview, SelectedCoffeesContainer } from './style'
import { OrdersContext } from '../../../../contexts/OrdersProvider'

export default function SelectedCoffes() {
  const { cart, deliveryPrice, totalPrice, productsPrice } =
    useContext(OrdersContext)

  const isCartEmpty = cart.length === 0
  const isButtonDisabled = isCartEmpty

  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>
      <article>
        <section>
          <div>
            {cart.length > 0 ? (
              cart.map((item) => {
                return <CardCheckout item={item} key={item.id} />
              })
            ) : (
              <h2>Sem items no carrinho</h2>
            )}
          </div>

          <Overview>
            <div>
              <p>
                <span>Total de intens</span> <span>R$ ${productsPrice}</span>
              </p>
              <p>
                <span>Entrega</span> <span>R$ {deliveryPrice}</span>
              </p>
              <p>
                <span>Total</span> <span>R$ {totalPrice}</span>
              </p>
            </div>
            <button
              disabled={isButtonDisabled}
              title={isButtonDisabled ? 'Adicione itens ao carrinho' : ''}
              type="submit"
              form="completeOrderForm"
            >
              Confirmar pedido
            </button>
          </Overview>
        </section>
      </article>
    </SelectedCoffeesContainer>
  )
}
