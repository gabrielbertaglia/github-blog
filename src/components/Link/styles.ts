import styled, { css } from 'styled-components'
import { globalStyles } from '../../styles/globalStyles'

interface LinkProps {
  variant?: 'iconLeft'
}

export const LinkContainer = styled.a<LinkProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${globalStyles.fonts.link}
  cursor: pointer;

  svg {
    width: 0%.75rem;
    height: 0%.75rem;
  }

  ${(props) =>
    props.variant === 'iconLeft' &&
    css`
      flex-direction: row-reverse;
    `}
`
