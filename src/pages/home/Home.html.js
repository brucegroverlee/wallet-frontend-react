import React from "react"
import { Row, Col } from "reactstrap"
import {
  DollarSign
} from "react-feather"
import { Title } from "../../components/title"
import { AccountCards } from "./components/AccountCard"
import { TransactionTableContainer } from "../../components/transactionsTable/transactionsTable.container"

export const HomeHtml = ({
  accounts,
  categoryGroups,
  categories,
  transactions,
}) => {
  const accountsList = accounts.map(account => (
    <Col key={`account-${account.id}`} lg="3" sm="6">
      <AccountCards
        hideChart
        iconRight
        iconBg="primary"
        icon={<DollarSign className="primary" size={22} />}
        total={account.total}
        currency={account.currency}
        title={account.name}
      />
    </Col>
  ))
  return (
    <React.Fragment>
      <Title
        title="Accounts"
      />
      <Row>
        {accountsList}
      </Row>
      <Title
        title="Income"
      />
      <Title
        title="Expenses"
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