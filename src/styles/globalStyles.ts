import { css } from 'styled-components'

export const globalStyles = {
  fonts: {
    titleL: css`
      font-size: 1.5rem;
      line-height: 1.3;
      font-weight: 700;
      color: ${(props) => props.theme.color['base-title']};
    `,
    titleM: css`
      font-size: 1.25rem;
      line-height: 1.6;
      font-weight: 700;
      color: ${(props) => props.theme.color['base-title']};
    `,
    titleS: css`
      font-size: 1.125rem;
      line-height: 1.6;
      font-weight: 700;
      color: ${(props) => props.theme.color['base-subtitle']};
    `,
    textM: css`
      font-size: 1rem;
      line-height: 1.6;
    `,
    textS: css`
      font-size: 0.75rem;
      line-height: 1.6;
      color: ${(props) => props.theme.color['base-span']};
    `,
    link: css`
      color: ${(props) => props.theme.color.blue};
      text-transform: uppercase;
      border: none;
      background: none;
      font-size: 0.75rem;
      line-height: 1.6rem;
      font-weight: 700;
      border-bottom: 1px solid transparent;
      height: 19px;
      line-height: 19px;

      &:hover {
        transition: 0.6s;
        border-color: ${(props) => props.theme.color.blue};
      }
    `,
    input: css`
      font-size: 1rem;
      line-height: 1.6;
      padding: 0.75rem 1rem;
      border-radius: 6px;
      background: ${(props) => props.theme.color['base-input']};
      border: 1px solid ${(props) => props.theme.color['base-border']};
      color: ${(props) => props.theme.color['base-text']};
      transition: 0.4s;
      &:focus {
        outline: none;
        -webkit-box-shadow: none;
        border-color: ${(props) => props.theme.color.blue};
      }
      &::placeholder {
        color: ${(props) => props.theme.color['base-label']};
      }
    `,
  },
}
