import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { expenses } = useContext(AppContext);

	const total = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div class='expensescontainer'>
			<h4>Spent so far: ₹{total}</h4>
		</div>
	);
};

export default ExpenseTotal;