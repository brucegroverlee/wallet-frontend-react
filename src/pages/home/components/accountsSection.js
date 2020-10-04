import React from "react"
import { Row, Col } from "reactstrap"
import {
  DollarSign
} from "react-feather"
import { Title } from "../../../components/title"
import { AccountCards } from "./AccountCard"

export const AccountsSection = ({
  accounts,
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
  return(
    <React.Fragment>
      <Title
        title="Accounts"
      />
      <Row>
        {accountsList}
      </Row>
    </React.Fragment>
  )
}