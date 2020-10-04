import React from "react"
import {
  Spinner,
  Card,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label
} from "reactstrap"
import Select from "react-select"
import { currencyOptions } from "../../../configs/currencies"

export const TransactionForm = ({
  fetching,
  accountOptions,
  categoryOptions,
  accountId,
  categoryId,
  description,
  total,
  currency,
  handlerOnChangeAccountId,
  handlerOnChangeCategoryId,
  handlerOnChangeDescription,
  handlerOnChangeTotal,
  handlerOnChangeCurrency,
  handlerOnClickCreate,
}) => {
  const createButton = (fetching) ? (
    <Button.Ripple color="primary">
      <Spinner color="white" size="sm" />
      <span className="ml-50">Loading...</span>
    </Button.Ripple>
  ) : (
    <Button.Ripple 
      color="primary" 
      type="submit"
      className="mr-1 mb-1"
      onClick={() => handlerOnClickCreate()}
    >
      Create 
    </Button.Ripple>
  )
  
  return (
    <Card>
      <CardBody>
        <Form className="mt-2" onSubmit={e => e.preventDefault()}>
          <Row>
            <Col md="6" sm="12">
              <h5 className="">Account</h5>
              <FormGroup className="form-label-group">
                <Select
                  className="React"
                  classNamePrefix="select"
                  name="account"
                  id="account"
                  options={accountOptions}
                  value={accountId}
                  onChange={data => handlerOnChangeAccountId(data)}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <h5 className="">Category</h5>
              <FormGroup className="form-label-group">
                <Select
                  className="React"
                  classNamePrefix="select"
                  name="category"
                  id="category"
                  options={categoryOptions}
                  value={categoryId}
                  onChange={data => handlerOnChangeCategoryId(data)}
                />
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup className="form-label-group">
                <Select
                  className="React"
                  classNamePrefix="select"
                  name="currency"
                  id="currency"
                  options={currencyOptions}
                  value={currency}
                  onChange={data => handlerOnChangeCurrency(data)}
                />
                <Label for="currency">Currency</Label>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup className="form-label-group">
                <Input
                  type="number"
                  name="total"
                  id="total"
                  placeholder="total"
                  value={total}
                  onChange={e => handlerOnChangeTotal(e.target.value)}
                />
                <Label for="total">Total</Label>
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup className="form-label-group">
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  value={description}
                  onChange={e => handlerOnChangeDescription(e.target.value)}
                />
                <Label for="description">Description</Label>
              </FormGroup>
            </Col>
            
            <Col sm="12">
              <FormGroup className="form-label-group">
                {createButton}
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}