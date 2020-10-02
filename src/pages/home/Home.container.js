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

  async getAccounts() {
    try {
      const accountResult = await api.accounts.list({})
      this.setState({
        accounts: accountResult.data,
      })
    } catch (error) {
      throw error
    }
  }

  componentDidMount() {
    this.getAccounts()
    // get data
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