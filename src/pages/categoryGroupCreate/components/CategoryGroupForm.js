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

const typeOptions = [
  { value: "expenses", label: "Expenses" },
  { value: "income", label: "Income" },
]

export const CategoryGroupForm = ({
  fetching,
  type,
  name,
  description,
  handlerOnChangeType,
  handlerOnChangeName,
  handlerOnChangeDescription,
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
              <Select
                className="React"
                classNamePrefix="select"
                name="type"
                options={typeOptions}
                value={type}
                onChange={data => handlerOnChangeType(data)}
              />
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