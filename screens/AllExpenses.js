import { useContext } from "react"
import { Text } from "react-native"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { ExpensesContext } from "../store/expenses-context";


function AllExpenses() {
    const expensesContext = useContext(ExpensesContext);
    return <ExpensesOutput expenses={expensesContext.expenses} period={"Total"} fallbackText="No registered expenses found."/>
}

export default AllExpenses