import { Posts } from './Posts'
import { Profile } from './Profile'
import { Search } from './Search'
import { BlogContainer, PostsListContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <>
        <Profile />
        <Search />
        <PostsListContainer>
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
          <Posts />
        </PostsListContainer>
      </>
    </BlogContainer>
  )
}
