import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  padding: 15px;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 0;
  }

  > div:first-child {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 30px;

    @media (max-width: 768px) {
      width: 90%;
    }
  }
`
