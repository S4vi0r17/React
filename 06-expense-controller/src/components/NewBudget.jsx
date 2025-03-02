import { useState } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
	const [message, setMessage] = useState('');

	const handleBudget = (e) => {
		e.preventDefault();

		if (!Number(budget) || Number(budget) < 0) {
			setMessage('Invalid budget');
			return;
		}

		setMessage('');
		setIsValidBudget(true);
	};

	return (
		<div className='budget-container container shadow'>
			<form onSubmit={handleBudget} className='form'>
				<div className='field'>
					<label htmlFor='budget'>Budget</label>
					<input
						type='number'
						className='new-budget'
						placeholder='Enter your budget'
						value={budget}
						onChange={(e) => setBudget(Number(e.target.value))}
					/>
				</div>
				<input
					type='submit'
					className='button-primary'
					value='Set budget'
				/>
				{message && <Message type='error'>{message}</Message>}
			</form>
		</div>
	);
};

NewBudget.propTypes = {
	budget: PropTypes.number.isRequired,
	setBudget: PropTypes.func.isRequired,
	setIsValidBudget: PropTypes.func.isRequired,
};

export default NewBudget;
