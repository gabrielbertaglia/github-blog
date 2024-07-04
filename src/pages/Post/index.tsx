/* eslint-disable @typescript-eslint/no-explicit-any */
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '../../components/Link'
import {
  PostContainer,
  PostContainerHeader,
  PostContent,
  PostHeader,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { useGithub } from '../../hooks/useGithub'
import { useEffect, useState } from 'react'
import { relativeDateFormatter } from '../../utils/formatter'
import { Spinner } from '../../components/Spinner'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export function Post() {
  const [loadingPostDetails, setLoadingPostDetails] = useState(true)

  const navigate = useNavigate()
  const { fetchPostDetails, postDetails } = useGithub()

  function handleGoBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function getPostDetails() {
      try {
        setLoadingPostDetails(true)
        await fetchPostDetails()
      } catch (error) {
        console.log(error)
      } finally {
        setLoadingPostDetails(false)
      }
    }
    getPostDetails()
  }, [fetchPostDetails])

  return (
    <PostContainer>
      <PostContainerHeader>
        {loadingPostDetails ? (
          <Spinner />
        ) : (
          <>
            <PostHeader>
              <Link
                variant="iconLeft"
                icon={<FontAwesomeIcon icon={faChevronLeft} />}
                onClick={handleGoBack}
              >
                Voltar
              </Link>
              <Link target="_blank" rel="noopener" href={postDetails.html_url}>
                Ver no Github
              </Link>
            </PostHeader>
            <strong>{postDetails.title}</strong>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                <span>{postDetails.user.login}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCalendar} />
                <span>{relativeDateFormatter(postDetails.created_at)}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faComment} />
                <span>{postDetails.comments} comentários</span>
              </li>
            </ul>
          </>
        )}
      </PostContainerHeader>
      <PostContent>
        <ReactMarkdown
          components={{
            code({ inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || '')

              return !inline && match ? (
                <SyntaxHighlighter
                  style={dracula}
                  PreTag="div"
                  language={match[1]}
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            },
          }}
        >
          {postDetails.body}
        </ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
