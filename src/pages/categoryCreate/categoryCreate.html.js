import React from "react"
import {
  Row,
  Col,
} from "reactstrap"
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import { CategoryForm } from "./components/CategoryForm"

export const CategoryCreateHtml = (props) => {
  return(
    <React.Fragment>
      <Breadcrumbs
        breadCrumbTitle="Create Category"
        breadCrumbParent="Categories List"
        breadCrumbActive="Create Category"
      />
      <Row>
        <Col sm="12">
          <CategoryForm {...props}/>
        </Col>
      </Row>
    </React.Fragment>
  )
}