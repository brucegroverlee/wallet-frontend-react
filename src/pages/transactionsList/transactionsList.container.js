import React from "react"
import { api } from "../../api"
import { TransactionsListHtml } from "./transactionsList.html"

class TransactionsListContainer extends React.Component{
  state = {
    accounts: [],
    categories: [],
  }

  async loadAccounts() {
    try {
      const accountsResult = await api.accounts.list({
        perPage: 100,
      })
      this.setState({
        accounts: accountsResult.data,
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

  componentDidMount() {
    this.loadAccounts()
    this.loadCategories()
  }

  render(){
    return (
      <TransactionsListHtml
        accounts={this.state.accounts}
        categories={this.state.categories}
      />
    )
  }
}

export default TransactionsListContainer