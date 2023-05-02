import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 30px;
  width: 80%;

  > h3 {
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  > article {
    width: 28rem;
    height: 29.875rem;
    border-top-right-radius: 7%;
    border-bottom-left-radius: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme['base-card']};
    margin: 0 auto;
    @media (max-width: 576px) {
      width: 90%;
      height: 25rem;
    }

    @media (max-width: 400px) {
      width: 100%;
    }

    > section {
      height: 85%;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      @media (max-width: 576px) {
        gap: 20px;
      }

      @media (max-width: 576px) {
        width: 95%;
      }

      @media (max-width: 376px) {
        width: 90%;
      }

      > div:first-child {
        height: 60%;
        overflow: auto;
      }
    }
  }
`

export const Overview = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  align-items: center;
  @media (max-width: 576px) {
    gap: 0;
  }

  > div:first-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    > p {
      display: flex;
      justify-content: space-between;

      @media (max-width: 576px) {
        font-size: 0.9rem;
      }
    }

    > p:nth-child(3) {
      border: none;
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-title']};
      font-weight: bold;

      @media (max-width: 576px) {
        font-size: 1.3rem;
      }
    }
  }

  > button {
    width: 100%;
    padding: 15px 0;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    text-transform: uppercase;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.yellow};

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    @media (max-width: 576px) {
      margin-top: 10px;
      padding: 10px;
    }
  }
`
