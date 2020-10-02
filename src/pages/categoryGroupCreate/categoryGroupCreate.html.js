import React from "react"
import {
  Row,
  Col,
} from "reactstrap"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import { CategoryGroupForm } from "./components/CategoryGroupForm"

export const CategoryGroupCreateHtml = (props) => {
  return(
    <React.Fragment>
      <Breadcrumbs
        breadCrumbTitle="Create Category Group"
        breadCrumbParent="Categories List"
        breadCrumbActive="Create Category Group"
      />
      <Row>
        <Col sm="12">
          <CategoryGroupForm {...props}/>
        </Col>
      </Row>
    </React.Fragment>
  )
}