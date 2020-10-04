import React from "react"
import { Title } from "../../components/title"
import { TransactionTableContainer } from "../../components/transactionsTable/transactionsTable.container"

export const TransactionsListHtml = ({
  accounts,
  categories,
}) => {
  return (
    <React.Fragment>
      <Title
        title="Transactions"
      />
      <TransactionTableContainer
        accounts={accounts}
        categories={categories}
      />
    </React.Fragment>
  )
}

export default TransactionsListHtml