import React from "react"
import { api } from "../../api"
import { CategoriesListHtml } from "./categoriesList.html"

class CategoriesListContainer extends React.Component{
  state = {
    categoryGroups: [],
    categories: [],
    transactions: [],
  }

  async loadCategoryGroups() {
    try {
      const categoryGroupResult = await api.categoryGroups.list({
        perPage: 50,
      })
      this.setState({
        categoryGroups: categoryGroupResult.data,
      })
    } catch (error) {
      throw error
    }
  }

  async loadCategories() {
    try {
      const categoriesResult = await api.categories.list({
        perPage: 100,
      })
      this.setState({
        categories: categoriesResult.data,
      })
    } catch (error) {
      throw error
    }
  }

  async loadTransactions() {
    try {
      const transactionsResult = await api.transactions.list({
        perPage: 100,
      })
      this.setState({
        transactions: transactionsResult.data,
      })
    } catch (error) {
      throw error
    }
  }

  componentDidMount() {
    this.loadCategoryGroups()
    this.loadCategories()
    this.loadTransactions()
  }

  render(){
    return (
      <CategoriesListHtml
        categoryGroups={this.state.categoryGroups}
        categories={this.state.categories}
        transactions={this.state.transactions}
      />
    )
  }
}

export default CategoriesListContainer