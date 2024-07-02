import { Link } from 'react-router-dom'
import { globalStyles } from './../../../styles/globalStyles'
import { styled } from 'styled-components'
export const PostContainer = styled(Link)`
  width: 100%;
  height: 16.25rem;

  border-radius: 18px;
  background: ${(props) => props.theme.color['base-post']};
  border: 2px solid ${(props) => props.theme.color['base-post']};
  padding: 2rem;
  &:hover {
    transition: 0.6s;
    border-color: ${(props) => props.theme.color['base-label']};
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
  }
`

export const PostHeader = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.25rem;

  strong {
    flex: 1;
    ${globalStyles.fonts.titleM}
  }
  span {
    width: max-content;
    ${globalStyles.fonts.textS}
  }
`
