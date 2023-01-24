import styled from 'styled-components'

export const DetailsContainer = styled.div`
  border: 1px solid red;
  width: 536px;
  border-color: ${(props) => props.theme.purple};
  border-radius: 6px 36px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 2rem;
`

export const HeaderText = styled.h1`
  color: ${(props) => props.theme['yellow-dark']};
`

export const SucessDiv = styled.div`
  margin: 4rem 10rem 10rem 10rem;
  gap: 2rem;
`

export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`
