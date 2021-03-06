import React from "react"
import { api } from "../../api"
import { HomeHtml } from "./Home.html"

class HomeContainer extends React.Component{
  state = {
    accounts: [],
    categoryGroups: [],
    categories: [],
    transactions: [],
  }

  async loadAccounts() {
    try {
      const accountsResult = await api.accounts.list({})
      this.setState({
        accounts: accountsResult.data,
      })
    } catch (error) {
      throw error
    }
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
    this.loadAccounts()
    this.loadCategoryGroups()
    this.loadCategories()
    this.loadTransactions()
  }

  render(){
    return (
      <HomeHtml
        accounts={this.state.accounts}
        categoryGroups={this.state.categoryGroups}
        categories={this.state.categories}
        transactions={this.state.transactions}
      />
    )
  }
}

export default HomeContainer