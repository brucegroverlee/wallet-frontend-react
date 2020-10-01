import React from "react"
import { Form, FormGroup, Input, Label, Button, Spinner, } from "reactstrap"
import Checkbox from "../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import { history } from "../../../history"

const RegisterJWT = ({
  fetching,
  name,
  email,
  password,
  confirmPass,
  handlerOnChangeName,
  handlerOnChangeEmail,
  handlerOnChangePassword,
  handlerOnChangeConfirmPassword,
  handlerOnClickSignup,
}) => {
  const signupButton = (fetching) ? (
    <Button.Ripple color="primary">
      <Spinner color="white" size="sm" />
      <span className="ml-50">Loading...</span>
    </Button.Ripple>
  ) : (
    <Button.Ripple color="primary" type="submit" onClick={() => handlerOnClickSignup()}>
      Register 
    </Button.Ripple>
  )

  return (
    <Form onSubmit={e => e.preventDefault()}>
      <FormGroup className="form-label-group">
        <Input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={e => handlerOnChangeName(e.target.value)}
        />
        <Label>Name</Label>
      </FormGroup>
      <FormGroup className="form-label-group">
        <Input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => handlerOnChangeEmail(e.target.value)}
        />
        <Label>Email</Label>
      </FormGroup>
      <FormGroup className="form-label-group">
        <Input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={e => handlerOnChangePassword(e.target.value)}
        />
        <Label>Password</Label>
      </FormGroup>
      <FormGroup className="form-label-group">
        <Input
          type="password"
          placeholder="Confirm Password"
          required
          value={confirmPass}
          onChange={e => handlerOnChangeConfirmPassword(e.target.value)}
        />
        <Label>Confirm Password</Label>
      </FormGroup>
      <FormGroup>
        <Checkbox
          color="primary"
          icon={<Check className="vx-icon" size={16} />}
          label=" I accept the terms & conditions."
          defaultChecked={true}
        />
      </FormGroup>
      <div className="d-flex justify-content-between">
        <Button.Ripple
          color="primary"
          outline
          onClick={() => {
            history.push("/login")
          }}
        >
          Login
        </Button.Ripple>
        {signupButton}
      </div>
    </Form>
  )
}

export default RegisterJWT
