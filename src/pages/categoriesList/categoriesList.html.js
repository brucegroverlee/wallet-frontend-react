import React from "react"
import { CategoryGroupSection } from "../home/components/categoryGroupSection"

export const CategoriesListHtml = ({
  categoryGroups,
  categories,
  transactions,
}) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
