import styled from 'styled-components'
import { FaBoxOpen, FaShoppingCart } from 'react-icons/fa'
import { RiTimerFill } from 'react-icons/ri'
import { FiCoffee } from 'react-icons/fi'

export const HomeContainer = styled.main`
  margin-top: 10rem;
  width: 100%;
  position: relative;
`

export const HomeArticle = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1200px) {
    justify-content: center;
    gap: 1rem;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 1.875rem;
    justify-content: center;
  }

  img {
    min-width: 250px;

    @media (max-width: 992px) {
      min-width: 100px;
      min-width: 400px;
    }

    @media (max-width: 768px) {
      min-width: 100px;
      min-width: 400px;
    }

    @media (max-width: 576px) {
      min-width: 100px;
      max-width: 350px;
    }
    @media (max-width: 375px) {
      min-width: 100px;
      max-width: 300px;
    }
  }

  div:first-child {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    @media (max-width: 950px) {
      width: 100%;
      padding: 10px;
    }
    h1 {
      width: 90%;
      text-align: center;
      line-height: 1.5;
      font-size: 3rem;

      @media (max-width: 576px) {
        font-size: 2rem;
      }
    }

    h1 + p {
      width: 90%;
      font-size: 1.5rem;
      text-align: center;
      @media (max-width: 576px) {
        font-size: 1rem;
      }
    }

    p + div {
      width: 100%;
      display: grid;
      grid-template-columns: max-content max-content;
      justify-content: space-around;
      align-items: center;
      row-gap: 10px;
      & > p {
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        @media (max-width: 768px) {
          font-size: 1rem;
        }
        @media (max-width: 576px) {
          font-size: 0.875rem;
        }
      }
      @media (max-width: 576px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
        width: 80%;
      }
    }
  }
`

const IconColors = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  baseText: 'base-text',
} as const

interface ColorsProps {
  colors: keyof typeof IconColors
}

export const IconContainer = styled.span<ColorsProps>`
  background: gray;
  display: inline-flex;

  padding: 5px;
  border-radius: 50%;
  background: ${(props) => props.theme[IconColors[props.colors]]};
`

export const Cart = styled(FaShoppingCart)`
  color: ${(props) => props.theme.white};
  font-size: 1.5625rem;
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
`
export const Timer = styled(RiTimerFill)`
  color: ${(props) => props.theme.white};
  font-size: 1.5625rem;
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
`

export const Box = styled(FaBoxOpen)`
  color: ${(props) => props.theme.white};
  font-size: 1.5625rem;
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
`

export const Coffe = styled(FiCoffee)`
  color: ${(props) => props.theme.white};
  font-size: 1.5625rem;
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
`

export const CadsContainer = styled.div`
  padding: 10px;

  section {
    margin: 0 auto;
    width: 90%;
  }

  section > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    gap: 50px;
    padding: 30px 0;
  }

  h2 {
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 20px;
  }
`
