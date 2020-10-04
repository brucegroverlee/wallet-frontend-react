import React from "react"
import { Card, CardBody, } from "reactstrap"
import DataTable from "react-data-table-component"

export const TransactionsTableHtml = ({
  data,
  columns,
}) => {
  return (
    <Card>
      <CardBody>
        <DataTable
          data={data}
          columns={columns}
          noHeader
          pagination
        />
      </CardBody>
    </Card>
  )
}