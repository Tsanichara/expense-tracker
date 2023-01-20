import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './Expense.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      
    <Card className="expenses">
    <ExpenseFilter selected ={filteredYear} onChangeFilter={filterChangeHandler}></ExpenseFilter>

    {props.expenses.map((expense) => (
       <ExpenseItem
        title ={expense.title}
        amount = {expense.amount}
        date = {expense.date}  
        />
        ))}
      
    </Card>
    </div>
  );
}

export default Expense;

