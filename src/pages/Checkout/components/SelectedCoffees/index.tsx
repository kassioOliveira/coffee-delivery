import CardCheckout from './components/CardCheckout'
import { Overview, SelectedCoffeesContainer } from './style'

export default function SelectedCoffes() {
  return (
    <SelectedCoffeesContainer>
      <h3>Cafés selecionados</h3>
      <article>
        <section>
          <div>
            <CardCheckout />
            <CardCheckout />
            <CardCheckout /> <CardCheckout />
          </div>

          <Overview>
            <div>
              <p>
                <span>Total de intens</span> <span>R$ 29,70</span>
              </p>
              <p>
                <span>Entrega</span> <span>R$ 3,70</span>
              </p>
              <p>
                <span>Total</span> <span>R$ 33,20</span>
              </p>
            </div>
            <button>Confirmar pedido</button>
          </Overview>
        </section>
      </article>
    </SelectedCoffeesContainer>
  )
}
