import React from "react"
import { Title } from "../../components/title"
import { AccountsSection } from "./components/accountsSection"
import { CategoryGroupSection } from "./components/categoryGroupSection"
import { TransactionTableContainer } from "../../components/transactionsTable/transactionsTable.container"

export const HomeHtml = ({
  accounts,
  categoryGroups,
  categories,
  transactions,
}) => {
  return (
    <React.Fragment>
      <AccountsSection accounts={accounts}/>
      <CategoryGroupSection
        type={"income"}
        title={"Income"}
        categoryGroups={categoryGroups}
        categories={categories}
        transactions={transactions}
      />
      <CategoryGroupSection
        type={"expenses"}
        title={"Expenses"}
        categoryGroups={categoryGroups}
        categories={categories}
        transactions={transactions}
      />
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

export default HomeHtml