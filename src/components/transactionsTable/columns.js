import React from "react"
import numeral from "numeral"
import moment from "moment"

export const columns = (accounts, categories) => ([
  {
    name: "Date",
    selector: "createdAt",
    sortable: true,
    width: "110px",
    format: (transaction) => {
      return moment(transaction.createdAt).format('YYYY-MM-DD')
    },
  },
  {
    name: "Category",
    selector: "category",
    sortable: true,
    format: (transaction) => {
      const category = categories.find(category => category.id === transaction.categoryId)
      return category.name
    },
  },
  {
    name: "Account",
    selector: "account",
    sortable: true,
    format: (transaction) => {
      const account = accounts.find(account => account.id === transaction.accountId)
      return account.name
    },
  },
  {
    name: "Description",
    selector: "description",
    sortable: true,
  },
  {
    name: "Total",
    selector: "total",
    sortable: true,
    width: "130px",
    cell: (transaction) => {
      const color = transaction.total < 0 ? ("text-danger") : ("text-success")
      return(
      <div className={`text-bold-500 ${color}`}>
        {`${transaction.currency.toUpperCase()} ${numeral(transaction.total).format("0,0.00")}`}
      </div>
    )},
  },
  {
    name: "ID",
    selector: "id",
    sortable: true,
  },
])