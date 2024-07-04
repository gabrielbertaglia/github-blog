import { useForm } from 'react-hook-form'
import { SearchContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useGithub } from '../../../hooks/useGithub'

const searchFromSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFromSchema>

export function Search() {
  const { fetchPosts, posts } = useGithub()

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFromSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await fetchPosts(data.query)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <strong>Publicações</strong>
        <span>{posts.length} publicações</span>
      </header>

      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchContainer>
  )
}
