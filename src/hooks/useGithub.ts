import { useContext } from 'react'
import { GithubContext } from '../contexts/GithubContext'

export function useGithub() {
  const ctx = useContext(GithubContext)
  return ctx
}
