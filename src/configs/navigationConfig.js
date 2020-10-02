import React from "react"
import * as Icon from "react-feather"
const navigationConfig = [
  {
    id: "home",
    title: "Home",
    type: "item",
    icon: <Icon.Home size={20} />,
    permissions: ["admin", "editor"],
    navLink: "/"
  },
  {
    id: "categories",
    title: "Categories",
    type: "collapse",
    icon: <Icon.Tag size={20} />,
    children: [
      {
        id: "createCategoryGroup",
        title: "Create Group",
        type: "item",
        icon: <Icon.Box size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/categories/create-category-group"
      },
      {
        id: "createCategory",
        title: "Create Category",
        type: "item",
        icon: <Icon.Box size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/categories/create-category"
      },
      {
        id: "list",
        title: "List",
        type: "item",
        icon: <Icon.List size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/categories/list"
      },
    ]
  },
  {
    id: "transactions",
    title: "Transactions",
    type: "collapse",
    icon: <Icon.Zap size={20} />,
    children: [
      {
        id: "create",
        title: "Create",
        type: "item",
        icon: <Icon.Box size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/transactions/create"
      },
      {
        id: "list",
        title: "List",
        type: "item",
        icon: <Icon.List size={12} />,
        permissions: ["admin", "editor"],
        navLink: "/transactions/list"
      },
    ]
  },
]

export default navigationConfig
