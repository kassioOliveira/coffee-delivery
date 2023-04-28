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

export default function Address() {
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

        <form>
          <ZipCodeInput type="text" name="Zip-Code" placeholder="CEP" />
          <RoadInput placeholder="Rua" />

          <FormContainer>
            <div>
              <NumberInput type="number" name="number" placeholder="Numero" />
              <ComplementInput placeholder="Complemento" />
            </div>
            <div>
              <NeighborhoodInput
                type="text"
                name="district"
                placeholder="Bairro"
              />
              <div>
                <CityInput type="text" placeholder="Cidade" />
                <StateInput type="text" placeholder="UF" />
              </div>
            </div>
          </FormContainer>
        </form>
      </div>
    </AddressContainer>
  )
}
