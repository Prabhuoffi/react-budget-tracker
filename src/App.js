import React from 'react';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';
import './App.css';

const App = () => {
	return (
		<AppProvider>
		
				<h1>  Budget Planner  </h1>
				
						<Budget />
					
						<RemainingBudget />
				       	<ExpenseTotal />



						<h1> Expense</h1>
						


				
				
				
						<ExpenseList />
				
				
				<h3>Add Expense</h3>
				
						<AddExpenseForm />
					
			
		</AppProvider>
	);
};

export default App;