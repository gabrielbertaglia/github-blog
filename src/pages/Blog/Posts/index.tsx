import { Post } from '../../../@types/github-posts'
import { relativeDateFormatter } from '../../../utils/formatter'
import { PostContainer, PostHeader } from './styles'

interface PostProps {
  post: Post
}

export function Posts({ post }: PostProps) {
  return (
    <PostContainer to={`/post/${post.number}`}>
      <PostHeader>
        <strong>{post.title}</strong>
        <span>{relativeDateFormatter(post.created_at)}</span>
      </PostHeader>
      <span>{post.body}</span>
    </PostContainer>
  )
}
