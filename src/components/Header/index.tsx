import igniteLogo from '../../assets/ignite-logo.svg'

import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  NewTransactionButton,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>
          <img src={igniteLogo} alt="" />
          <p>DT Money</p>
        </HeaderLogo>
        <NewTransactionButton>New transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
