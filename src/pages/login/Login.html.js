import React from "react"
import { Link } from "react-router-dom"
import {
  Button,
  Spinner,
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap"
import { Mail, Lock, Check } from "react-feather"
import { history } from "../../history"
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy"
import loginImg from "../../assets/img/pages/login.png"
import "../../assets/scss/pages/authentication.scss"

export const LoginHtml = ({
  fetching,
  email,
  password,
  handlerOnChangeEmail,
  handlerOnChangePassword,
  handlerOnClickLogin,
}) => {
  const loginButton = (fetching) ? (
    <Button.Ripple color="primary">
      <Spinner color="white" size="sm" />
      <span className="ml-50">Loading...</span>
    </Button.Ripple>
  ) : (
    <Button.Ripple color="primary" type="submit" onClick={() => handlerOnClickLogin()}>
      Login 
    </Button.Ripple>
  )

  return(
    <Row className="m-0 justify-content-center">
      <Col
        sm="8"
        xl="7"
        lg="10"
        md="8"
        className="d-flex justify-content-center"
      >
        <Card className="bg-authentication login-card rounded-0 mb-0 w-100">
          <Row className="m-0">
            <Col
              lg="6"
              className="d-lg-block d-none text-center align-self-center px-1 py-0"
            >
              <img src={loginImg} alt="loginImg" />
            </Col>
            <Col lg="6" md="12" className="p-0">
              <Card className="rounded-0 mb-0 px-2">
                <CardBody>
                  <h4>Login</h4>
                  <p>Welcome back, please login to your account.</p>
                  <Form onSubmit={e => e.preventDefault()}>
                    <FormGroup className="form-label-group position-relative has-icon-left">
                      <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => handlerOnChangeEmail(e.target.value)}
                      />
                      <div className="form-control-position">
                        <Mail size={15} />
                      </div>
                      <Label>Email</Label>
                    </FormGroup>
                    <FormGroup className="form-label-group position-relative has-icon-left">
                      <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => handlerOnChangePassword(e.target.value)}
                      />
                      <div className="form-control-position">
                        <Lock size={15} />
                      </div>
                      <Label>Password</Label>
                    </FormGroup>
                    <FormGroup className="d-flex justify-content-between align-items-center">
                      <Checkbox
                        color="primary"
                        icon={<Check className="vx-icon" size={16} />}
                        label="Remember me"
                      />
                      <div className="float-right">
                        <Link to="/forgot-password">Forgot Password?</Link>
                      </div>
                    </FormGroup>
                    <div className="d-flex justify-content-between">
                      <Button.Ripple 
                        color="primary" 
                        outline
                        onClick={() => {
                          history.push("register")
                        }}
                      >
                        Register                           
                      </Button.Ripple>
                      {loginButton}
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}