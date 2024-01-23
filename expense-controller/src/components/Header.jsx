import PropTypes from 'prop-types';
import NewBudget from './NewBudget';
import BudgetControl from './BudgetControl';

const Header = ({ expenses, budget, setBudget, isValidBudget, setIsValidBudget }) => {
	return (
		<header>
			<h1>Expense Controller</h1>

			{isValidBudget ? (
				<BudgetControl
					budget={budget}
					expenses={expenses}
				/>
			) : (
				<NewBudget
					budget={budget}
					setBudget={setBudget}
					setIsValidBudget={setIsValidBudget}
				/>
			)}
		</header>
	);
};

Header.propTypes = {
	budget: PropTypes.number.isRequired,
	setBudget: PropTypes.func.isRequired,
	isValidBudget: PropTypes.bool.isRequired,
	setIsValidBudget: PropTypes.func.isRequired,
	expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
