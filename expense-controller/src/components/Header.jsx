import PropTypes from 'prop-types';
import NewBudget from './NewBudget';
import BudgetControl from './BudgetControl';

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
	return (
		<header>
			<h1>Expense Controller</h1>

			{isValidBudget ? (
				<BudgetControl budget={budget} />
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
};

export default Header;
