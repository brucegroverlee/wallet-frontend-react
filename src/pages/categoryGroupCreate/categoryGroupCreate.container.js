import React from "react"
import { connect } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import { history } from "../../history"
import { api } from "../../api"
import { CategoryGroupCreateHtml } from "./categoryGroupCreate.html"

class CreateCategoryGroupContainer extends React.Component {
  state = {
    fetching: false,
    type: {
      value: "expenses",
      label: "Expenses",
    },
    name: "",
    description: "",
  }

  handlerOnChangeType = (value) => {
    this.setState({
      type: value,
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

  handlerOnClickCreate = async () => {
    try {
      this.setState({ fetching: true, })
      await api.categoryGroups.create({
        type: this.state.type.value,
        name: this.state.name,
        description: this.state.description,
      })
      toast.success("The category group was created successfully!")
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

  render() {
    return (
      <React.Fragment>
        <CategoryGroupCreateHtml
          fetching={this.state.fetching}
          type={this.state.type}
          name={this.state.name}
          description={this.state.description}
          handlerOnChangeType={this.handlerOnChangeType}
          handlerOnChangeName={this.handlerOnChangeName}
          handlerOnChangeDescription={this.handlerOnChangeDescription}
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

export default connect(mapStateToProps, {})(CreateCategoryGroupContainer)