import styled from 'styled-components'
import { globalStyles } from '../../styles/globalStyles'

export const LinkContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${globalStyles.fonts.link}

  svg {
    width: 0%.75rem;
    height: 0%.75rem;
  }
`
