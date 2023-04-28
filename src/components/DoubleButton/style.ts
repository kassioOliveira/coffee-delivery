import { FaMinus, FaPlus } from 'react-icons/fa'
import styled, { css } from 'styled-components'

interface Props {
  resize?: Boolean
}

export const DoubleButtonContainer = styled.div<Props>`
  background: ${(props) => props.theme['base-button']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px 5px;
  border-radius: 10%;

  > button {
    background: transparent;
    border: none;
    padding: 8px 5px;
    cursor: pointer;
  }

  ${({ resize }) =>
    resize &&
    css`
      > button {
        padding: 4px 2px;
      }
    `}
`

export const Minus = styled(FaMinus)`
  font-size: 12px;
  color: ${(props) => props.theme.purple};
  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const Plus = styled(FaPlus)`
  font-size: 12px;
  color: ${(props) => props.theme.purple};
  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
