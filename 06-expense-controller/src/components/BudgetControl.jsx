import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BudgetControl = ({
	budget,
	setBudget,
	expenses,
	setExpenses,
	setIsValidBudget,
}) => {
	const [available, setAvailable] = useState(0);
	const [spent, setSpent] = useState(0);

	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		let totalSpent = expenses.reduce(
			(total, expense) => total + expense.amount,
			0
		);
		setSpent(totalSpent);
		setAvailable(budget - totalSpent);

		// Calculate percentage
		let newPercentage = ((totalSpent / budget) * 100).toFixed(2);
		setTimeout(() => {
			setPercentage(newPercentage);
		}, 1000);
	}, [expenses, budget]);

	const formatBudget = (budget) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(budget);
	};

	const handleResetApp = () => {
		const response = confirm('Are you sure you want to reset the app?');
		if (response) {
			setBudget(0);
			setExpenses([]);
			setIsValidBudget(false);
		}
	};

	return (
		<div className='budget-container container shadow two-columns'>
			<div className='progressbar'>
				<CircularProgressbar
					value={percentage}
					maxValue={100}
					text={`${percentage}% spent`}
					styles={{
						path: {
							stroke: percentage > 100 ? '#dc2626' : '#DC9FBD',
							transition: 'stroke-dashoffset 0.5s ease 0s',
							color: '#DC9FBD',
							transitionDuration: '1s',
						},
						trail: {
							stroke: '#f5f5f5',
						},
						text: {
							fill: percentage > 100 ? '#dc2626' : '#a46b88',
							fontSize: '22px',
						},
					}}
				/>
			</div>
			<div className='budget-content'>
				<button
					className='reset-app'
					type='button'
					onClick={handleResetApp}
				>
					Restart App
				</button>
				<p>
					<span>Remaining: </span>
					{formatBudget(budget)}
				</p>

				<p className={`${available < 0 ? 'negative' : ''}`}>
					<span>Available: </span>
					{formatBudget(available)}
				</p>

				<p>
					<span>Spent: </span>
					{formatBudget(spent)}
				</p>
			</div>
		</div>
	);
};

BudgetControl.propTypes = {
	budget: PropTypes.number.isRequired,
	setBudget: PropTypes.func.isRequired,
	expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
	setExpenses: PropTypes.func.isRequired,
	setIsValidBudget: PropTypes.func.isRequired,
};

export default BudgetControl;
