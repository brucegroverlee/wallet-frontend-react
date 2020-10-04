import React from "react"
import { Row } from "reactstrap"
import { Title } from "../../../components/title"
import { CategoryGroupStats } from "../../../components/categoryGroupStats/categoryGroupStats.container"

export const CategoryGroupSection = ({
  type,
  title,
  categoryGroups,
  categories,
  transactions,
}) => {
  const categoryGroupsFiltered = categoryGroups.filter(cg => cg.type === type)
  const categoryGroupsComponents = categoryGroupsFiltered.map(cg => (
    <CategoryGroupStats
      key={cg.id}
      type={type}
      categoryGroup={cg}
      categories={categories}
      transactions={transactions}
    />
  ))
  return(
    <React.Fragment>
      <Title
        title={title}
      />
      <Row>
        {categoryGroupsComponents}
      </Row>
    </React.Fragment>
  )
}