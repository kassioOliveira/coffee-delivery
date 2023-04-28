import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'

export const CardContainer = styled.article`
  background: ${(props) => props.theme['base-card']};
  position: relative;
  width: 240px;
  height: 280px;
  border-top-right-radius: 10%;
  border-bottom-left-radius: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 20px 2px;
  @media (max-width: 1200px) {
    width: 230px;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-align: center;
  }

  header > div {
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 10px;
    padding: 2px 0;

    span {
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      font-size: 0.8rem;
      padding: 2px 7px;
      border-radius: 20px;
    }
  }

  img {
    margin: 0 auto;
    margin-top: -20%;
  }

  > div {
    padding: 0 1px;
    > p {
      text-align: center;
    }
  }

  footer {
    margin-bottom: 10px;
    width: 100%;
  }

  footer > div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px 10px;
    margin: 0 auto;

    > span {
      font-size: 0.9rem;
      strong {
        font-size: 1.5rem;
        margin-left: 3px;
        color: ${(props) => props.theme['base-subtitle']};
        font-family: 'Baloo 2', cursive;
      }
    }

    > button {
      border: none;
      padding: 10px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background: ${(props) => props.theme['purple-dark']};
      &:hover {
        background: ${(props) => props.theme.purple};
      }
    }
  }
`

export const CardCart = styled(FaShoppingCart)`
  font-size: 1.2rem;

  color: ${(props) => props.theme.white};
`
