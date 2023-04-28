import { DoubleButtonContainer, Minus, Plus } from './style'

interface IButtonsResize {
  resize?: Boolean
}

export function DoubleButton({ resize }: IButtonsResize) {
  return (
    <DoubleButtonContainer resize={!!resize}>
      <button type="button">
        <Minus />
      </button>
      <strong>1</strong>
      <button type="button">
        <Plus />
      </button>
    </DoubleButtonContainer>
  )
}
