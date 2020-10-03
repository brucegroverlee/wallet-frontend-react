import { Accounts } from "./accounts/accounts"
import { Categories } from "./categories/categories"
import { CategoryGroups } from "./categoryGroups/categoryGroups"
import { Transactions } from "./transactions/transactions"
import { Users } from "./users/users"

export const api = {
  accounts: Accounts,
  categories: Categories,
  categoryGroups: CategoryGroups,
  transactions: Transactions,
  users: Users,
}