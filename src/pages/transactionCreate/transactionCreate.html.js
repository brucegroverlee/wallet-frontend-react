import React from "react"
import {
  Row,
  Col,
} from "reactstrap"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import { TransactionForm } from "./components/TransactionForm"

export const TransactionCreateHtml = (props) => {
  return(
    <React.Fragment>
      <Breadcrumbs
        breadCrumbTitle="Create Transaction"
        breadCrumbParent="Transactions List"
        breadCrumbActive="Create Transaction"
      />
      <Row>
        <Col sm="12">
          <TransactionForm {...props}/>
        </Col>
      </Row>
    </React.Fragment>
  )
}