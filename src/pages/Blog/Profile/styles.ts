import styled from 'styled-components'
import { globalStyles } from '../../../styles/globalStyles'

export const ProfileContainer = styled.div`
  width: 100%;
  min-height: 13.25rem;
  background: ${(props) => props.theme.color['base-profile']};
  margin-top: -6rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;
  display: flex;
  gap: 2rem;
`

export const Picture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  object-fit: cover;
`

export const Details = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem 1.5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    ${globalStyles.fonts.titleL}
  }

  p {
    ${globalStyles.fonts.textM};
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    flex-wrap: wrap;

    margin-top: auto;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      ${globalStyles.fonts.textM}
    }

    svg {
      width: 1.125rem;
      height: 1.125rem;

      color: ${(props) => props.theme.color['base-label']};
    }
  }
`
