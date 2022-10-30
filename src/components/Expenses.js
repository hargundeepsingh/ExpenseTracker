import React,{ useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';

import ExpensesChart from './ExpensesChart';

import Card from './Card';
import ExpensesFilter from './ExpensesFilter'

import ExpensesList from './ExpensesList';

function Expenses(props){

  const[filteredYear,setFilteredYear]=useState('2020');

  const YearChangeHandler=year=>{
    setFilteredYear(year);

  }

  const filteredExpenses=props.items.filter(expense=>expense.date.getFullYear().toString()===filteredYear)

  return(
    <div>
      
  <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onYearChange={YearChangeHandler}/>  
    <ExpensesChart expenses={filteredExpenses} />
    <ExpensesList items={filteredExpenses} />

    

    </Card>    
    
    </div>);

  
}

export default Expenses;
