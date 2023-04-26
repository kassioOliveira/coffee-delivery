import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'

export const HeaderComponent = styled.header`
  background: ${(props) => props.theme.background};
  height: 9.375rem;
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 6.25rem;
  }

  img {
    width: 8.125rem;

    @media (max-width: 768px) {
      width: 6rem;
    }
  }

  div {
    height: 4.375rem;
    width: 15.625rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 992px) {
      width: 9.375rem;
    }

    strong {
      display: flex;
      align-items: center;
      gap: 5px;
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      padding: 10px;
      border-radius: 5px;
      @media (max-width: 1024px) {
        font-size: 1rem;
        padding: 5px;
        gap: 2px;
      }
      @media (max-width: 992px) {
        font-size: 0.8rem;
        padding: 2px;
        gap: 2px;
      }
    }

    span {
      background: ${(props) => props.theme['yellow-light']};
      padding: 10px;
      border-radius: 5px;
      position: relative;
      &:after {
        content: attr(data-count);
        position: absolute;
        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme['yellow-dark']};
        top: -10px;
        right: -30%;
        border-radius: 50%;
        width: 1.6875rem;
        height: 1.6875rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        @media (max-width: 992px) {
          width: 1rem;
          height: 1rem;
          top: -8px;
          font-size: 0.7rem;
        }
      }
      @media (max-width: 992px) {
        padding: 5px;
      }
    }
  }
`

export const Cart = styled(FaShoppingCart)`
  font-size: 1.875rem;

  cursor: pointer;
  color: ${(props) => props.theme['yellow-dark']};

  @media (max-width: 1024px) {
    font-size: 1.4375rem;
  }
  @media (max-width: 992px) {
    font-size: 1.25rem;
  }
`
