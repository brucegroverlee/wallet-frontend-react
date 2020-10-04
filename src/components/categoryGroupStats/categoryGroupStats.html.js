import React from "react"
import { Col, Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { CategoryStats } from "./components/categoryStats.container"

export const CategoryGroupStatsHtml = ({
  categoryGroup,
  categories,
  transactions,
}) => {
  const categoriesList = categories.map(cat => (
    <CategoryStats
      key={cat.id}
      category={cat}
      transactions={transactions}
    />
  ))
  return(
    <Col lg="3" md="6" sm="12">
      <Card>
        <CardHeader>
          <CardTitle>{categoryGroup.name}</CardTitle>
        </CardHeader>
        <CardBody>
          {categoriesList}
        </CardBody>
      </Card>
    </Col>
  )
}