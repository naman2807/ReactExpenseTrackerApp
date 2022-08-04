import axios from "axios";
import { getFormattedDate } from "./date";

const RELATIVE_URL =
  "https://react-native-expense-tra-3c5f5-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const response = await axios.post(RELATIVE_URL + "/expenses.json", expenseData);
  const id = response.data.name;
  return id;
}

export async function getExpenses() {
  const response = await axios.get(RELATIVE_URL + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expense) {
    return axios.put(RELATIVE_URL + `/expenses/${id}.json`, expense)
}

export function deleteExpense(id) {
    return axios.delete(RELATIVE_URL + `/expenses/${id}.json`)
}
