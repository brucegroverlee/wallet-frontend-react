import React from "react"
import { TransactionsTableHtml } from "./transactionsTable.html"
import { columns } from "./columns"
import { useTransactionsHooks } from "./transactionsHooks"

export const TransactionTableContainer = ({
  accounts,
  categories,
}) => {
  const {
    transactions,
  } = useTransactionsHooks(accounts, categories)

  return(
    <TransactionsTableHtml
      data={transactions}
      columns={columns(accounts, categories)}
    />
  )
}