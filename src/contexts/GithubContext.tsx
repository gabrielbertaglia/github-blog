import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/api'
import { Post } from '../@types/github-posts'
import { GithubUser } from '../@types/github-user'
import { useParams } from 'react-router-dom'

interface GithubProviderProps {
  children: ReactNode
}

export interface GithubContextType {
  posts: Post[]
  profile: GithubUser | undefined
  loadingProfile: boolean
  postDetails: Post
  fetchPosts: (query?: string) => Promise<void>
  fetchPostDetails: () => Promise<void>
}

const username = import.meta.env.VITE_GITHUB_USERNAME
const repo = import.meta.env.VITE_GITHUB_REPO

export const GithubContext = createContext({} as GithubContextType)

export function GithubProvider({ children }: GithubProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [profile, setProfile] = useState<GithubUser>({} as GithubUser)
  const [postDetails, setPostDetails] = useState({} as Post)
  const [loadingProfile, setLoadingProfile] = useState(true)

  const { id } = useParams()

  const fetchPosts = useCallback(async (query: string = '') => {
    try {
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repo}`,
      )
      console.log(response.data)
      setPosts(response.data.items)
    } catch (err) {
      alert(
        'Você excedeu o limite de chamadas por segundo da API do GitHub, aguarde um momento e tente novamente',
      )
    }
  }, [])

  const fetchUser = useCallback(async () => {
    try {
      setLoadingProfile(true)
      const response = await api.get(`/users/${username}`)
      setProfile(response.data)
    } finally {
      setLoadingProfile(false)
    }
  }, [])

  const fetchPostDetails = useCallback(async () => {
    try {
      const response = await api.get(`/repos/${username}/${repo}/issues/${id}`)
      setPostDetails(response.data)
    } catch (error) {
      console.log(error)
    }
  }, [id])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <GithubContext.Provider
      value={{
        posts,
        // loadingPosts,
        loadingProfile,
        postDetails,
        profile,
        fetchPosts,
        fetchPostDetails,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
