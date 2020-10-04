import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"

import CheckSessionContainer from "./containers/checkSessionContainer"

// Route-based code splitting
const Home = lazy(() =>
  import("./pages/home/Home.container")
)

const CategoryGroupCreate = lazy(() =>
  import("./pages/categoryGroupCreate/categoryGroupCreate.container")
)

const CategoryCreate = lazy(() =>
  import("./pages/categoryCreate/categoryCreate.container")
)

const TransactionCreate = lazy(() =>
  import("./pages/transactionCreate/transactionCreate.container")
)
const TransactionsList = lazy(() =>
  import("./pages/transactionsList/transactionsList.container")
)

const Login = lazy(() =>
  import("./pages/login/Login.container")
)

const Register = lazy(() =>
  import("./pages/register/Register.container")
)
const error404 = lazy(() => import("./pages/error404/404"))

// Set Layout and Component Using App Route
const RouteConfig = ({
  component: Component,
  fullLayout,
  publicRoute,
  permission,
  user,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      return (
        <CheckSessionContainer publicRoute={publicRoute}>
          <ContextLayout.Consumer>
            {context => {
              let LayoutTag =
                fullLayout === true
                  ? context.fullLayout
                  : context.state.activeLayout === "horizontal"
                  ? context.horizontalLayout
                  : context.VerticalLayout
                return (
                  <LayoutTag {...props} permission={props.user}>
                    <Suspense fallback={<Spinner />}>
                      <Component {...props} />
                    </Suspense>
                  </LayoutTag>
                )
            }}
          </ContextLayout.Consumer>
        </CheckSessionContainer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    user: state.auth.login.userRole
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute
            exact
            path="/"
            component={Home}
          />
          <AppRoute
            path="/categories/create-category-group"
            component={CategoryGroupCreate}
          />
          <AppRoute
            path="/categories/create-category"
            component={CategoryCreate}
          />
          <AppRoute
            path="/transactions/create"
            component={TransactionCreate}
          />
          <AppRoute
            path="/transactions/list"
            component={TransactionsList}
          />
          <AppRoute
            path="/login"
            component={Login}
            fullLayout
            publicRoute
          />
          <AppRoute
            path="/register"
            component={Register}
            fullLayout
            publicRoute
          />
          <AppRoute
            path="/spinner"
            component={Spinner}
            fullLayout
            publicRoute
          />
          <AppRoute
            component={error404} 
            fullLayout 
            publicRoute />
        </Switch>
      </Router>
    )
  }
}

export default AppRouter
