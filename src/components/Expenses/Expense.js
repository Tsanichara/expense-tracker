import { useState } from "react";

import './Expense.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  

  return (
    <div>
      
    <Card className="expenses">
    <ExpenseFilter selected ={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>
    <ExpensesChart expenses = {filteredExpenses} />
    <ExpensesList expenses = {filteredExpenses} />
      
    </Card>
    </div>
  );
}

export default Expense;

