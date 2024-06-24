import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'

import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighlight,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Website development</td>
              <td>
                <PriceHighlight variant="income">$ 12.000,00</PriceHighlight>
              </td>
              <td>Sale</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Apartment rent</td>
              <td>
                <PriceHighlight variant="outcome">- $ 2.000,00</PriceHighlight>
              </td>
              <td>Expense</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
