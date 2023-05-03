import styled from 'styled-components'

import { CiLocationOn } from 'react-icons/ci'
import { RiTimerFill } from 'react-icons/ri'
import { TfiMoney } from 'react-icons/tfi'

export const SuccessContainer = styled.main`
  margin-top: 9.375rem;

  section {
    display: flex;
    justify-content: center;
    align-items: end;

    @media (max-width: 992px) {
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    article {
      max-width: 70%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      @media (max-width: 768px) {
        width: 100%;
      }
      h1 {
        text-align: center;
        font-size: 2.7rem;
        color: ${(props) => props.theme['yellow-dark']};

        @media (max-width: 576px) {
          text-align: center;
          font-size: 2.5rem;
        }
      }
      > p {
        text-align: center;
        font-size: 1.5rem;
        @media (max-width: 576px) {
          font-size: 1.4rem;
          text-align: center;
        }
      }

      > div {
        height: 300px;
        width: 80%;

        margin: 0 auto;
        border: double 1px transparent;
        border-image-slice: 1;
        border-radius: 5px 30px;
        background-image: linear-gradient(
            ${(props) => props.theme.background},
            ${(props) => props.theme.background}
          ),
          radial-gradient(
            circle at top left,
            ${(props) => props.theme['yellow-dark']},
            ${(props) => props.theme.purple}
          );
        background-origin: border-box;
        background-clip: content-box, border-box;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        @media (max-width: 576px) {
          width: 100%;
          margin: 0 auto;
        }

        > div {
          display: flex;
          align-items: center;

          gap: 10px;
          span:first-child {
            padding: 10px 10px;
            border-radius: 50%;
            margin-left: 10px;
            display: flex;
            align-items: center;
            justify-content: center;

            @media (max-width: 992px) {
              margin-left: 5px;
            }

            @media (max-width: 576px) {
              padding: 7px;
            }
          }
          p {
            font-size: 1.3rem;
            @media (max-width: 576px) {
              font-size: 1.1rem;
            }
          }
        }

        > div:first-child {
          > span {
            background-color: ${(props) => props.theme.purple};
          }
        }

        > div:nth-child(2) {
          > span {
            background-color: ${(props) => props.theme.yellow};
          }
        }

        > div:nth-child(3) {
          > span {
            background-color: ${(props) => props.theme['yellow-dark']};
          }
        }

        p {
          font-size: 1.2rem;
        }
      }
    }

    img {
      width: 700px;

      @media (max-width: 992px) {
        margin-top: 50px;
        width: 600px;
      }

      @media (max-width: 768px) {
        width: 500px;
      }

      @media (max-width: 576px) {
        width: 400px;
      }

      @media (max-width: 430px) {
        width: 350px;
      }

      @media (max-width: 375px) {
        width: 300px;
      }
    }
  }
`

export const LocationSuccess = styled(CiLocationOn)`
  color: ${(props) => props.theme.white};
  font-size: 1.8rem;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`

export const TimerDelivery = styled(RiTimerFill)`
  color: ${(props) => props.theme.white};
  font-size: 1.8rem;
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`

export const MoneyDelivery = styled(TfiMoney)`
  color: ${(props) => props.theme.white};

  font-size: 1.8rem;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`
