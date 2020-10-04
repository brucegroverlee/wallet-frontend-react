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

export const CategoryForm = ({
  fetching,
  categoryGroupOptions,
  categoryGroupId,
  name,
  description,
  isRecurrent,
  budget,
  currency,
  handlerOnChangeCategoryGroupId,
  handlerOnChangeName,
  handlerOnChangeDescription,
  handlerOnChangeIsRecurrent,
  handlerOnChangeBudget,
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
              <FormGroup className="form-label-group">
                <Select
                  className="React"
                  classNamePrefix="select"
                  name="categoryGroup"
                  id="categoryGroup"
                  options={categoryGroupOptions}
                  value={categoryGroupId}
                  onChange={data => handlerOnChangeCategoryGroupId(data)}
                />
                <Label for="categoryGroup">Category Group</Label>
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
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={name}
                  onChange={e => handlerOnChangeName(e.target.value)}
                />
                <Label for="name">Name</Label>
              </FormGroup>
            </Col>
            <Col md="6" sm="12">
              <FormGroup className="form-label-group">
                <Input
                  type="number"
                  name="budget"
                  id="budget"
                  placeholder="budget"
                  value={budget}
                  onChange={e => handlerOnChangeBudget(e.target.value)}
                />
                <Label for="budget">Budget</Label>
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