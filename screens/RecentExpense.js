import { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import ErrorOverlay from "../components/UI/ErrorOverlay";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState("");
  const expensesContext = useContext(ExpensesContext);

  useEffect(() => {
    async function fetchExpenses() {
      setIsFetching(true);
      try {
        const data = await getExpenses();
        expensesContext.setExpenses(data);
      } catch (error) {
        setError("Could not fetch expenses");
      }
      setIsFetching(false);
    }

    fetchExpenses();
  }, []);

  function errorHandler() {
    setError(null);
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recent = expensesContext.expenses?.filter((expenses) => {
    const date = new Date();
    const date7DaysAgo = getDateMinusDays(date, 7);
    return expenses.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expenses={recent}
      period={"Last 7 days"}
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
