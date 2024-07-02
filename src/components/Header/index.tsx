import githubBlogLogo from '../../assets/logo.svg'
import leftEffect from '../../assets/leftEffect.png'
import rightEffect from '../../assets/rightEffect.png'
import { HeaderContainer } from './styles'

export function Header(){
  return (
    <HeaderContainer>
      <img src={leftEffect} alt="" />

      <img src={githubBlogLogo} alt="" />
      <img src={rightEffect} alt="" />
    </HeaderContainer>
  )
}