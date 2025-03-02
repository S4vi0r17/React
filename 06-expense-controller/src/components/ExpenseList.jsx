import PropTypes from 'prop-types';
import Expense from './Expense';

const ExpenseList = ({
	expenses,
	setExpenses,
	budget,
	setEditExpense,
	deleteExpense,
	filter,
	filteredExpenses,
}) => {
	return (
		<div className='expense-list container'>
			{filter ? (
				<>
					<h2>
						{filteredExpenses.length
							? 'Expense List'
							: 'No expenses in this category yet'}
					</h2>
					{filteredExpenses.map((expense) => (
						<Expense
							key={expense.id}
							expense={expense}
							setEditExpense={setEditExpense}
							deleteExpense={deleteExpense}
						/>
					))}
				</>
			) : (
				<>
					<h2>
						{expenses.length ? 'Expense List' : 'No expenses yet'}
					</h2>
					{expenses.map((expense) => (
						<Expense
							key={expense.id}
							expense={expense}
							setEditExpense={setEditExpense}
							deleteExpense={deleteExpense}
						/>
					))}
				</>
			)}
		</div>
	);
};

ExpenseList.propTypes = {
	expenses: PropTypes.array.isRequired,
	setExpenses: PropTypes.func.isRequired,
	budget: PropTypes.number.isRequired,
	setEditExpense: PropTypes.func.isRequired,
	deleteExpense: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired,
	filteredExpenses: PropTypes.array.isRequired,
};

export default ExpenseList;
