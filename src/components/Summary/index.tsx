import { useContext } from 'react'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

import { SummaryContainer, SummaryCard } from './styles'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  console.log(transactions)

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Inputs</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Outputs</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
