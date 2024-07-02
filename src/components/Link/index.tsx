import { ComponentProps } from 'react'
import { LinkContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

type LinkProps = ComponentProps<typeof LinkContainer>

export function Link({ children, ...rest }: LinkProps) {
  return (
    <LinkContainer {...rest}>
      {children}
      <FontAwesomeIcon icon={faUpRightFromSquare} />
    </LinkContainer>
  )
}
