import styled from 'styled-components'

export const BlogContainer = styled.main`
  max-width: 864px;
  width: 100%;
  margin: 0 auto;
`

export const PostsListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  margin-bottom: 14rem;
`
