import React from "react"
import { CategoryGroupStatsHtml } from "./categoryGroupStats.html"

export const CategoryGroupStats = ({
  categoryGroup,
  categories,
  transactions,
}) => {
  const categoriesFiltered = categories.filter(cat => cat.categoryGroupId === categoryGroup.id)
  return (
    <CategoryGroupStatsHtml
      categoryGroup={categoryGroup}
      categories={categoriesFiltered}
      transactions={transactions}
    />
  )
}
