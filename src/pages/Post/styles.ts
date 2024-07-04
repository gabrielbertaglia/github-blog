import styled from 'styled-components'
import { globalStyles } from '../../styles/globalStyles'

export const PostContainer = styled.main`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
`

export const PostContainerHeader = styled.div`
  margin-top: -6rem;
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: ${(props) => props.theme.color['base-profile']};
  display: flex;
  flex-direction: column;

  strong {
    padding: 1.25rem 0 0.5rem;
    ${globalStyles.fonts.titleL}
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      ${globalStyles.fonts.textM}

      span {
        color: ${(props) => props.theme.color['base-span']};
      }
    }

    svg {
      width: 1.125rem;
      height: 1.125rem;

      color: ${(props) => props.theme.color['base-label']};
    }
  }
`

export const PostHeader = styled.header`
  flex: 1;
  display: flex;
  justify-content: space-between;
`

export const PostContent = styled.div`
  max-width: 864px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  img {
    width: 100%;
    height: auto;
    max-width: 100%;
  }
  p {
    ${globalStyles.fonts.textM}
  }

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.color.white};
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  a {
    text-decoration: underline;
    font-style: italic;
    font-weight: 1.6;

    border: none;
    background: none;
    line-height: 1.6rem;
    font-weight: 700;

    &:hover {
      transition: 0.4s;
      color: ${(props) => props.theme.color.blue};
    }
  }
  pre {
    background: ${(props) => props.theme.color['base-post']};
    padding: 1rem;
    border-radius: 2px;

    div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'FiraCode', monospace !important;
        line-height: 1.6 !important;
      }
    }
  }
`
