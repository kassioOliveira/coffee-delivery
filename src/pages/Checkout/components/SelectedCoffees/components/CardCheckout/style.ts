import styled from 'styled-components'
import { FaRegTrashAlt } from 'react-icons/fa'

export const CardCheckoutContainer = styled.div`
  height: 6.25rem;
  border-bottom: 2px solid ${(props) => props.theme['base-button']};
  display: flex;
  align-items: start;
  justify-content: space-evenly;
  margin: 15px 0;

  @media (max-width: 576px) {
    height: 80px;
    margin: 10px 0;
  }

  img {
    width: 80px;
    @media (max-width: 576px) {
      width: 50px;
    }
  }

  > div {
    width: 55%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;

    @media (max-width: 576px) {
      height: 100%;
      width: 40%;
    }

    @media (max-width: 400px) {
      height: 100%;
      width: 55%;
      align-items: center;

      > span {
        color: ${(props) => props.theme['base-title']};
        @media (max-width: 576px) {
          text-align: center;
          font-size: 0.9rem;
        }
      }
    }

    > div {
      height: 70%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 10px;

      @media (max-width: 400px) {
        justify-content: center;
        text-align: center;
      }

      > button {
        padding: 8px 10px;
        border-radius: 8px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        font-size: 0.9rem;
        cursor: pointer;
        color: ${(props) => props.theme['base-text']};
        background: ${(props) => props.theme['base-button']};
        :hover {
          background: ${(props) => props.theme['base-hover']};
        }

        @media (max-width: 576px) {
          font-size: 0.8rem;
          padding: 8px 3.5px;
        }
      }
    }
  }

  > strong {
    color: ${(props) => props.theme['base-title']};

    @media (max-width: 400px) {
      font-size: 0.9rem;
    }
  }
`
export const Trash = styled(FaRegTrashAlt)`
  font-size: 12px;
  cursor: pointer;
  color: ${(props) => props.theme.purple};

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }
`
