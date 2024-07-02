import { PostContainer, PostHeader } from './styles'

export function Posts() {
  return (
    <PostContainer to="post/1">
      <PostHeader>
        <strong>JavaScript data types and data structures</strong>
        <span>Há 1 dia atrás</span>
      </PostHeader>
      <span>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </span>
    </PostContainer>
  )
}
