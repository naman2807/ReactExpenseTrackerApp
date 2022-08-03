import { useContext } from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const expensesContext = useContext(ExpensesContext);
  const recent = expensesContext.expenses.filter((expenses) => {
    const date = new Date();
    const date7DaysAgo = getDateMinusDays(date, 7);
    return expenses.date > date7DaysAgo;
  });

  return <ExpensesOutput expenses={recent} period={"Last 7 days"} fallbackText="No expenses registered for the last 7 days." />;
}

export default RecentExpenses;
