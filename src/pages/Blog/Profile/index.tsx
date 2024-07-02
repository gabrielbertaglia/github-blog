import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '../../../components/Link'
import { Details, Picture, ProfileContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <Picture src="https://github.com/gabrielbertaglia.png" />

      <Details>
        <header>
          <strong>Gabriel Bertaglia</strong>
          <Link href="">Github</Link>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            gabrielbertaglia
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Gabriel
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            32 seguidores
          </li>
        </ul>
      </Details>
    </ProfileContainer>
  )
}
