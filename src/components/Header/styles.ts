import styled from 'styled-components'
import headerBg from '../../assets/headerBg.png'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 18.5rem;
  /* width: 100vw; */
  background: url(${headerBg}) no-repeat center;
  background-size: cover;

  img {
    width: 148px;
    height: 98px;
    margin-top: 4rem;
  }
`
