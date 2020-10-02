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

const currencyOptions = [
  { value: "usd", label: "USD" },
  { value: "pen", label: "PEN" },
]

export const CategoryForm = ({
  fetching,
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
        <Form className="mt-2">
          <Row>
            <Col md="6" sm="12">
              <Select
                className="React"
                classNamePrefix="select"
                defaultValue={currencyOptions[0]}
                name="type"
                options={currencyOptions}
              />
            </Col>
            <Col md="6" sm="12">
              <FormGroup className="form-label-group">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
                <Label for="name">Name</Label>
              </FormGroup>
            </Col>
            <Col sm="12">
              <FormGroup className="form-label-group">
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
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