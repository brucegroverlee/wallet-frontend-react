import React from "react"
import { connect } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import { history } from "../../history"
import { api } from "../../api"
import { CategoryCreateHtml } from "./categoryCreate.html"

class CategoryCreateContainer extends React.Component {
  state = {
    fetching: false,
    categoryGroupOptions: [],
    categoryGroupId : { value: "", label: "" },
    name: "",
    description: "",
    isRecurrent: false,
    budget: 0,
    currency: { value: "pen", label: "PEN" },
  }

  handlerOnChangeCategoryGroupId = (value) => {
    this.setState({
      categoryGroupId: value,
    })
  }

  handlerOnChangeName = (value) => {
    this.setState({
      name: value,
    })
  }

  handlerOnChangeDescription = (value) => {
    this.setState({
      description: value,
    })
  }

  handlerOnChangeIsRecurrent = (value) => {
    this.setState({
      isRecurrent: value,
    })
  }

  handlerOnChangeBudget = (value) => {
    this.setState({
      budget: value,
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
      await api.categories.create({
        categoryGroupId: this.state.categoryGroupId.value,
        name: this.state.name,
        description: this.state.description,
        isRecurrent: false,
        budget: this.state.budget,
        currency: this.state.currency.value,
      })
      toast.success("The category was created successfully!")
      setTimeout(() => {
        history.replace("/categories/list")
      }, 3500)
    } catch (error) {
      if (error.response.status === 406) {
        toast.error(`Oops! ${error.response.data.message}`)
        console.error(error.response.data.message)
      } else {
        toast.error("Oops! something went wrong")
        console.error(error.response)
      }
      this.setState({ fetching: false, })
    }
  }

  async componentDidMount() {
    try {
      const result = await api.categoryGroups.list({
        perPage: 20,
      })
      const options = result.data.map(categoryGroup => { return{ value: categoryGroup.id, label: categoryGroup.name, } })
      this.setState({
        categoryGroupOptions: options,
      })
    } catch (error) {
      if (error.response.status === 406) {
        toast.error(`Oops! ${error.response.data.message}`)
        console.error(error.response.data.message)
      } else {
        toast.error("Oops! something went wrong")
        console.error(error.response)
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <CategoryCreateHtml
          fetching={this.state.fetching}
          categoryGroupOptions={this.state.categoryGroupOptions}
          categoryGroupId={this.state.categoryGroupId}
          name={this.state.name}
          description={this.state.description}
          isRecurrent={this.state.isRecurrent}
          budget={this.state.budget}
          currency={this.state.currency}
          handlerOnChangeCategoryGroupId={this.handlerOnChangeCategoryGroupId}
          handlerOnChangeName={this.handlerOnChangeName}
          handlerOnChangeDescription={this.handlerOnChangeDescription}
          handlerOnChangeIsRecurrent={this.handlerOnChangeIsRecurrent}
          handlerOnChangeBudget={this.handlerOnChangeBudget}
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

export default connect(mapStateToProps, {})(CategoryCreateContainer)