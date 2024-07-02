import styled from 'styled-components'
import { globalStyles } from '../../../styles/globalStyles'

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
  margin-bottom: 3rem;
  gap: 0.75rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      ${globalStyles.fonts.titleS}
    }
    span {
      ${globalStyles.fonts.textS}
    }
  }
  input {
    ${globalStyles.fonts.input}
  }
`
