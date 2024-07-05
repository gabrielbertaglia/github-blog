import { useEffect, Dispatch, SetStateAction, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { SearchContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useGithub } from '../../../hooks/useGithub'
import { useDebounce } from '../../../hooks/useDebounce'
import { api } from '../../../lib/api'
import { useIsDisabled } from '../../../hooks/useIsDisabled'

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
  const { posts, setPosts } = useGithub()
  const { watch, control } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFromSchema),
  })

  const searchValue = watch('query', '')
  const debouncedSearchValue = useDebounce(searchValue, 1000)
  const [isDisabled, setIsDisabled] = useIsDisabled(debouncedSearchValue)

  useEffect(() => {
    const fetchData = async () => {
      if (isTyping) {
        try {
          setLoadingPosts(true)
          const response = await api.get(
            `/search/issues?q=${debouncedSearchValue}%20repo:${username}/${repo}`,
          )
          setPosts(response.data.items)
        } catch (err) {
          console.error('Erro ao buscar dados:', err)
          alert(
            'Ocorreu um erro ao buscar dados. Por favor, tente novamente mais tarde.',
          )
        } finally {
          setLoadingPosts(false)
          setIsDisabled(false)
          setIsTyping(false)
        }
      }
    }

    fetchData()
  }, [debouncedSearchValue, setLoadingPosts, setPosts, setIsDisabled, isTyping])

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
              setLoadingPosts(true)
              setIsTyping(true)
            }}
            disabled={isDisabled}
          />
        )}
      />
    </SearchContainer>
  )
}
