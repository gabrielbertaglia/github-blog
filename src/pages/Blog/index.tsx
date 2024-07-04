import { Posts } from './Posts'
import { Profile } from './Profile'
import { Search } from './Search'
import { BlogContainer, PostsListContainer } from './styles'
import { useGithub } from '../../hooks/useGithub'
import { Spinner } from '../../components/Spinner'
import { useEffect, useState } from 'react'

export function Blog() {
  const [loadingPosts, setLoadingPosts] = useState(true)
  const { posts, fetchPosts } = useGithub()

  useEffect(() => {
    async function getPosts() {
      try {
        setLoadingPosts(true)
        fetchPosts()
      } finally {
        setLoadingPosts(false)
      }
    }
    getPosts()
  }, [fetchPosts])

  return (
    <BlogContainer>
      <>
        <Profile />
        <Search />
        {loadingPosts ? (
          <Spinner />
        ) : (
          <PostsListContainer>
            {posts.map((post) => {
              return <Posts key={post.number} post={post} />
            })}
          </PostsListContainer>
        )}
      </>
    </BlogContainer>
  )
}
