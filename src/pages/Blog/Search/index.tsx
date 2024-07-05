import { useEffect, Dispatch, SetStateAction, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { SearchContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useGithub } from '../../../hooks/useGithub'
import { useDebounce } from '../../../hooks/useDebounce'
import { api } from '../../../lib/api'

const username = import.meta.env.VITE_GITHUB_USERNAME
const repo = import.meta.env.VITE_GITHUB_REPO

interface SearchProps {
  setLoadingPosts: Dispatch<SetStateAction<boolean>>
}

const searchFromSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFromSchema>

export function Search({ setLoadingPosts }: SearchProps) {
  const [isTyping, setIsTyping] = useState(false)
  const { fetchPosts, posts, setPosts } = useGithub()
  const { watch, control } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFromSchema),
  })

  const searchValue = watch('query', '')
  const debouncedSearchValue = useDebounce(searchValue, 1000)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingPosts(true)

        if (isTyping) {
          // fetchPosts()
          const response = await api.get(
            `/search/issues?q=${debouncedSearchValue}%20repo:${username}/${repo}`,
          )
          setPosts(response.data.items)
        }
      } catch (err) {
        console.error('Erro ao buscar dados:', err)
        alert(
          'Ocorreu um erro ao buscar dados. Por favor, tente novamente mais tarde.',
        )
      } finally {
        setLoadingPosts(false)
      }
    }

    fetchData()
  }, [debouncedSearchValue, fetchPosts, isTyping, setLoadingPosts, setPosts])

  return (
    <SearchContainer>
      <header>
        <strong>Publicações</strong>
        <span>{posts.length} publicações</span>
      </header>
      <Controller
        name="query"
        control={control}
        render={({ field }) => (
          <input
            type="text"
            placeholder="Buscar conteúdo"
            {...field}
            onChange={(e) => {
              field.onChange(e)
              setLoadingPosts(true) // Define setLoadingPosts como true quando o usuário começa a digitar
              setIsTyping(true)
            }}
            onBlur={() => {
              field.onBlur()
              setLoadingPosts(false) // Define setLoadingPosts como false quando o usuário para de digitar
            }}
          />
        )}
      />
    </SearchContainer>
  )
}
