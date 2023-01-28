import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

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

export const StyledText = styled.p`
  background-color: transparent;
  text-align: center;
  width: 32px;
  border: none;
`
