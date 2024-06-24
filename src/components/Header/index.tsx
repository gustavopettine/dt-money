import igniteLogo from '../../assets/ignite-logo.svg'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={igniteLogo} alt="" />
        <NewTransactionButton>New transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
