import styled from 'styled-components'

export const HeaderContainer = styled.div`
  z-index: 1;
  position: sticky;
  top: 0;
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  background: ${(props) => props.theme.background};

  img {
    height: 40px;
  }
`

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`

export const LocationDiv = styled.div`
  width: 143px;
  height: 38px;
  padding: 0.5rem;
  gap: 0.25rem;
  background: ${(props) => props.theme['purple-light']};
  display: flex;
  align-items: center;
  border-radius: 6px;

  img {
    width: 1rem;
  }

  p {
    font-size: 14px;
  }
`

export const CartItemsContainer = styled.div`
  width: 38px;
  height: 38px;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`
