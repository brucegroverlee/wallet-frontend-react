import React from "react"
import numeral from "numeral"
import { CategoryStatsHtml } from "./categoryStats.html"

export const CategoryStats = ({
  category,
  transactions,
}) => {
  const transactionsFiltered = transactions.filter(transaction => transaction.categoryId === category.id)
  const total = transactionsFiltered.reduce((accumulator, currentTransaction) => {
    return accumulator + currentTransaction.total
  }, 0)
  const totalFormated = `${category.currency.toUpperCase()} ${numeral(Math.abs(total)).format("0,0.00")}`
  const budgetFormated = `${category.currency.toUpperCase()} ${numeral(category.budget).format("0,0.00")}`
  const percent = (100 * total) / category.budget

  return(
    <CategoryStatsHtml
      name={category.name}
      total={totalFormated}
      budget={budgetFormated}
      percent={percent}
    />
  )
}