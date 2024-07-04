import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '../../../components/Link'
import { Details, Picture, ProfileContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { useGithub } from '../../../hooks/useGithub'
import { Spinner } from '../../../components/Spinner'

export function Profile() {
  const { profile, loadingProfile } = useGithub()

  return (
    <ProfileContainer>
      {loadingProfile ? (
        <Spinner />
      ) : (
        <>
          <Picture src={profile?.avatar_url} />

          <Details>
            <header>
              <strong>{profile?.name}</strong>
              <Link href={profile?.html_url} target="_blank" rel="noopener">
                Github
              </Link>
            </header>
            <p>{profile?.bio}</p>
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profile?.login}
              </li>
              {profile?.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  Gabriel
                </li>
              )}
              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {profile?.followers} seguidores
              </li>
            </ul>
          </Details>
        </>
      )}
    </ProfileContainer>
  )
}
