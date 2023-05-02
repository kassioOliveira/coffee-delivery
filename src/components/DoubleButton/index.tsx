import { DoubleButtonContainer, Minus, Plus } from './style'

interface IButtonsResize {
  resize?: Boolean
  id: string
  amount: number
  increase: (id: string) => void
  decrease: (id: string) => void
}

export function DoubleButton({
  resize,
  id,
  amount,
  increase,
  decrease,
}: IButtonsResize) {
  function handleIncrease() {
    increase(id)
  }

  function handleDecrease() {
    decrease(id)
  }

  return (
    <DoubleButtonContainer resize={!!resize}>
      <button type="button" onClick={handleDecrease}>
        <Minus />
      </button>
      <strong>{amount}</strong>
      <button type="button" onClick={handleIncrease}>
        <Plus />
      </button>
    </DoubleButtonContainer>
  )
}
