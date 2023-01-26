import styled from 'styled-components'

export const CartInfoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ProductCardContainer = styled.div`
  position: relative;
  height: 19.375rem;
  width: 16rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 20px 20px;
  gap: 8px;

  h3 {
    font-size: 1.25rem;
  }

  img {
    transform: translateY(-20px);
    width: 120px;
    width: 120px;
  }
  p {
    font-size: 14px;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
  span {
    padding: 4px 8px;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 10px;
  }
`

export const PriceContainer = styled.div`
  p {
    font-size: 14px;
  }
  h2 {
    font-size: 1.5rem;
  }
`

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;

  div {
    background: ${(props) => props.theme['base-button']};
    height: 38px;
    gap: 4px;
    padding: 8px;
    width: 72px;
    border-radius: 6px;

    p {
      font-size: 1rem;
    }

    button: {
      border: none;
    }
  }
`
export const AddAndRemoveButtons = styled.button`
  border: none;
  background: none;
  border-radius: 6px;
  font-size: 1.5rem;
  width: 12px;
  cursor: pointer;
`

export const StyledInput = styled.input`
  background-color: transparent;
  text-align: center;
  width: 32px;
  border: none;
`

export const CartIconContainer = styled.section`
  width: 38px;
  height: 38px;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 1rem;
`

export const AddToCartButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.white};
  cursor: pointer;
  /* border: 1px solid green;
  text-decoration: none;
  width: 100%;
  height: 100%;
  /* width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 1rem; */
`
