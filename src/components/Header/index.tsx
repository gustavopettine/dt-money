import igniteLogo from '../../assets/ignite-logo.svg'

import * as Dialog from '@radix-ui/react-dialog'

import { NewTransactionModal } from '../NewTransactionModal'

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

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New transaction</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
