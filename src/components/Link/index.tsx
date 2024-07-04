import { ComponentProps, ReactNode } from 'react'
import { LinkContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

type LinkProps = ComponentProps<typeof LinkContainer> & {
  icon?: ReactNode
  variant?: 'iconLeft'
}

export function Link({ children, icon, ...rest }: LinkProps) {
  return (
    <LinkContainer {...rest}>
      {children}
      {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare} />}
    </LinkContainer>
  )
}
