import styled from 'styled-components'

import { CiLocationOn } from 'react-icons/ci'

export const AddressContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: start;

  > div {
    border-radius: 8px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    align-items: center;
    background: ${(Props) => Props.theme['base-card']};

    > div {
      width: 90%;
      > span {
        margin-bottom: 2px;
        display: flex;
        align-items: center;
        gap: 5px;
      }

      > p {
        margin-left: 1.9rem;
        font-size: 0.9rem;
      }
    }
  }

  form {
    width: 90%;
    height: 70%;
    margin: 0px auto;
    padding: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    @media (max-width: 576px) {
      width: 90%;
      height: 80%;
    }
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 576px) {
      flex-direction: column-reverse;
      gap: 5px;
    }
    > div {
      width: 60%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      @media (max-width: 576px) {
        width: 100%;
      }
    }
  }
`

const InputBase = styled.input`
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-hover']};
  border-radius: 8px;
  padding: 10px;
  color: ${(props) => props.theme['base-label']};
  height: 42px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0;
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`

export const ZipCodeInput = styled(InputBase)`
  width: 30%;
`

export const RoadInput = styled(InputBase)`
  width: 100%;
`

export const NumberInput = styled(InputBase)`
  width: 30%;
`

export const ComplementInput = styled(InputBase)`
  width: 60%;
  @media (max-width: 576px) {
    width: 65%;
  }
`

export const NeighborhoodInput = styled(InputBase)`
  width: 30%;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const StateInput = styled(InputBase)`
  width: 15%;

  @media (max-width: 576px) {
    width: 25%;
  }
`

export const CityInput = styled(InputBase)`
  width: 70%;
  color: ${(props) => props.theme['base-subtitle']};

  /* @media (max-width: 576px) {
    width: 50%;
  } */
`

export const DeliveryAddress = styled(CiLocationOn)`
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 1.8rem;
`
