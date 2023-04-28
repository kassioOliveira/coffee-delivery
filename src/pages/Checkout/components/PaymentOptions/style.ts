import styled from 'styled-components'

import { BsBank, BsCash } from 'react-icons/bs'
import { CiCreditCard1 } from 'react-icons/ci'
import { TfiMoney } from 'react-icons/tfi'

export const PaymentOptionsContainer = styled.div`
  border-radius: 8px;
  width: 100%;
  padding: 2px;
  height: 12.5rem;
  background: ${(Props) => Props.theme['base-card']};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  > div:first-child {
    width: 85%;
    display: flex;
    flex-direction: column;
    > span {
      color: ${(props) => props.theme['base-title']};
      display: flex;
      align-items: center;
    }
    > p {
      color: ${(props) => props.theme['base-subtitle']};
      text-align: left;
      margin-left: 1.5rem;

      font-size: 0.9rem;
    }
  }
`

export const ButtonsContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;

  > button {
    border: none;
    padding: 15px 5px;
    width: 32%;
    height: 80%;
    border-radius: 8px;
    font-size: 0.7rem;
    justify-content: left;
    display: flex;
    align-items: center;
    gap: 5px;
    text-transform: uppercase;
    text-align: left;
    cursor: pointer;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    @media (max-width: 576px) {
      justify-content: center;
    }
  }

  > button:first-child {
    padding: 15px 0px;
    text-align: left;
    gap: 0;
  }
`

export const Money = styled(TfiMoney)`
  color: ${(props) => props.theme.purple};
  font-size: 2rem;
`

export const CreditCard = styled(CiCreditCard1)`
  color: ${(props) => props.theme.purple};
  font-size: 2rem;
  @media (max-width: 576px) {
    font-size: 3rem;
  }
`

export const Bank = styled(BsBank)`
  color: ${(props) => props.theme.purple};
  font-size: 1.5rem;
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`

export const Cash = styled(BsCash)`
  color: ${(props) => props.theme.purple};
  font-size: 1.8rem;
  @media (max-width: 576px) {
    font-size: 2.5rem;
  }
`
