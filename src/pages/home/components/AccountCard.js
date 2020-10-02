import React from "react"
import { Card, CardBody } from "reactstrap"
import numeral from "numeral"

export const AccountCards = (props) => {
  return (
    <Card>
      <CardBody
        className={`${props.className ? props.className : "stats-card-body"} d-flex ${
          !props.iconRight && !props.hideChart
            ? "flex-column align-items-start"
            : props.iconRight
            ? "justify-content-between flex-row-reverse align-items-center"
            : props.hideChart && !props.iconRight
            ? "justify-content-center flex-column text-center"
            : null
        } ${!props.hideChart ? "pb-0" : "pb-2"} pt-2`}
      >
        <div className="icon-section">
          <div
            className={`avatar avatar-stats p-50 m-0 ${
              props.iconBg
                ? `bg-rgba-${props.iconBg}`
                : "bg-rgba-primary"
            }`}
          >
            <div className="avatar-content">{props.icon}</div>
          </div>
        </div>
        <div className="title-section">
          <h4 className="text-bold-600 mt-1 mb-25">
            {props.currency.toUpperCase()}
            {" "}
            {numeral(props.total).format("0,0.00")}
          </h4>
          <p className="mb-0">{props.title}</p>
        </div>
      </CardBody>
    </Card>
  )
}
