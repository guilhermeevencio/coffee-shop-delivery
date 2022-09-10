import styled from 'styled-components'

export const MainDiv = styled.div`
  height: 34rem;
  background: url('src/assets/Background-main.png');
  display: flex;
  align-items: center;
`

export const TextDiv = styled.div`
  gap: 2rem;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TextSection = styled.div`
  h1 {
    margin-left: 10rem;
    width: 36.75rem;
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    margin-left: 10rem;
    font-size: 1.25rem;
  }
`

export const IconsMainDiv = styled.div`
  height: 5.25rem;
  margin-left: 10rem;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 567px;
  gap: 0.5rem;
`

export const Icondescription = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &.description {
    p {
      margin-left: 0.75rem;
      font-size: 1rem;
    }
    img {
      margin: 0;
    }
  }
`

export const ImageDiv = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 22.5rem;
  }
`
