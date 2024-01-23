import PropTypes from 'prop-types';
import Expense from './Expense';

const ExpenseList = ({
	expenses,
	setExpenses,
	budget,
	setEditExpense,
	deleteExpense,
}) => {
	return (
		<div className='expense-list container'>
			<h2>{expenses.length ? 'Expense List' : 'No expenses yet'}</h2>

			{expenses.map((expense) => (
				<Expense
					key={expense.id}
					expense={expense}
					setEditExpense={setEditExpense}
					deleteExpense={deleteExpense}
				/>
			))}
		</div>
	);
};

ExpenseList.propTypes = {
	expenses: PropTypes.array.isRequired,
	setExpenses: PropTypes.func.isRequired,
	budget: PropTypes.number.isRequired,
	setEditExpense: PropTypes.func.isRequired,
};

export default ExpenseList;
