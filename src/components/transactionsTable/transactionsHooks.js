import { useState, useEffect } from "react"
import { api } from "../../api"

export const useTransactionsHooks = (accounts, categories) => {
  const [transactions, setTransactions] = useState([])

  const loadTransactions = async () => {
    try {
      const result = await api.transactions.list({
        perPage: 100,
      })
      setTransactions(result.data)
    } catch (error) {
      console.error(error.response)
      throw error
    }
  }

  useEffect(() => {
    if (accounts.length > 0 && categories.length > 0) {
      loadTransactions()
    }
  }, [accounts, categories])

  return {
    transactions,
    setTransactions,
    loadTransactions,
  }
}

export default useTransactionsHooks