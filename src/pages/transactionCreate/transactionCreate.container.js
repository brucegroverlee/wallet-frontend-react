import React from "react"
import { connect } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import numeral from "numeral"
import { history } from "../../history"
import { api } from "../../api"
import { TransactionCreateHtml } from "./transactionCreate.html"

class TransactionCreateContainer extends React.Component {
  state = {
    fetching: false,
    accountOptions: [],
    categoryOptions: [],
    accountId: { value: "", label: "" },
    categoryId: { value: "", label: "" },
    description: "",
    total: 0,
    currency: { value: "pen", label: "PEN" },
  }

  handlerOnChangeAccountId = (value) => {
    this.setState({
      accountId: value,
    })
  }

  handlerOnChangeCategoryId = (value) => {
    this.setState({
      categoryId: value,
    })
  }

  handlerOnChangeDescription = (value) => {
    this.setState({
      description: value,
    })
  }

  handlerOnChangeTotal = (value) => {
    this.setState({
      total: value,
    })
  }

  handlerOnChangeCurrency = (value) => {
    this.setState({
      currency: value,
    })
  }

  handlerOnClickCreate = async () => {
    try {
      this.setState({ fetching: true, })
      await api.transactions.create({
        accountId: this.state.accountId.value,
        categoryId: this.state.categoryId.value,
        description: this.state.description,
        total: this.state.total,
        currency: this.state.currency.value,
      })
      toast.success("The transaction was created successfully!")
      setTimeout(() => {
        history.replace("/transactions/list")
      }, 3500)
    } catch (error) {
      if (error.response.status === 406) {
        toast.error(`Oops! ${error.response.data.message}`)
        console.error(error.response.data.message)
      } else {
        toast.error("Oops! Something went wrong")
        console.error(error.response)
      }
      this.setState({ fetching: false, })
    }
  }

  async loadAccounts() {
    try {
      const result = await api.accounts.list({
        perPage: 100,
      })
      const options = result.data.map(account => ({ value: account.id, label: `${account.name} - ${account.currency.toUpperCase()} ${numeral(account.total).format("0,0.00")}`, }))
      this.setState({
        accountOptions: options,
      })
    } catch (error) {
      if (error.response.status === 406) {
        toast.error(`Oops! ${error.response.data.message}`)
        console.error(error.response.data.message)
      } else {
        toast.error("Oops! Something went wrong")
        console.error(error.response)
      }
    }
  }

  async loadCategories() {
    try {
      const result = await api.categories.list({
        perPage: 100,
      })
      const options = result.data.map(category => ({ value: category.id, label: category.name, }))
      this.setState({
        categoryOptions: options,
      })
    } catch (error) {
      if (error.response.status === 406) {
        toast.error(`Oops! ${error.response.data.message}`)
        console.error(error.response.data.message)
      } else {
        toast.error("Oops! Something went wrong")
        console.error(error.response)
      }
    }
  }

  async componentDidMount() {
    await this.loadAccounts()
    await this.loadCategories()
  }

  render() {
    return (
      <React.Fragment>
        <TransactionCreateHtml
          {...this.state}
          handlerOnChangeAccountId={this.handlerOnChangeAccountId}
          handlerOnChangeCategoryId={this.handlerOnChangeCategoryId}
          handlerOnChangeDescription={this.handlerOnChangeDescription}
          handlerOnChangeTotal={this.handlerOnChangeTotal}
          handlerOnChangeCurrency={this.handlerOnChangeCurrency}
          handlerOnClickCreate={this.handlerOnClickCreate}
        />
        <ToastContainer
          position="bottom-right"
          autoClose={7000}
          hideProgressBar={true}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {})(TransactionCreateContainer)