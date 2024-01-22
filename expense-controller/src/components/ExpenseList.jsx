import PropTypes from 'prop-types';
import Expense from './Expense';

const ExpenseList = ({ expenses, setExpenses, budget }) => {
	return (
		<div className='expense-list container'>
			<h2>{expenses.length ? 'Expense List' : 'No expenses yet'}</h2>

			{expenses.map((expense) => (
				<Expense key={expense.id} expense={expense} />
			))}
		</div>
	);
};

ExpenseList.propTypes = {
	expenses: PropTypes.array.isRequired,
	setExpenses: PropTypes.func.isRequired,
	budget: PropTypes.number.isRequired
};

export default ExpenseList;
