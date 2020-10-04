import React from "react"
import { Progress } from "reactstrap"

export const CategoryStatsHtml = ({
  name,
  total,
  budget,
  percent,
}) => {
  return(
    <React.Fragment>
      <div className="d-flex justify-content-between mb-25">
        <div className="browser-info">
          <p className="mb-25">{name}</p>
          <h4>{total}</h4>
        </div>
        <div className="stastics-info text-right">
          <span>
            {budget}
          </span>
        </div>
      </div>
      <Progress className="mb-2" value={percent} />
    </React.Fragment>
  )
}