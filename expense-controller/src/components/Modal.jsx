import PropTypes from 'prop-types';
import { useState } from 'react';
import Message from './Message';
import CloseIcon from '../img/cerrar.svg';

const Modal = ({
	setModalIsOpen,
	animateModal,
	setAnimateModal,
	saveExpense,
}) => {
	const [concept, setConcept] = useState('');
	const [amount, setAmount] = useState('');
	const [category, setCategory] = useState('');

	const [message, setMessage] = useState('');

	const closeModal = () => {
		setAnimateModal(false);

		setTimeout(() => {
			setModalIsOpen(false);
		}, 500);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (concept.trim() === '' || amount <= 0 || category.trim() === '') {
			setMessage('All fields are required');
			setTimeout(() => {
				setMessage('');
			}, 3000);
			return;
		}

		// Other way to validate
		// if([concept, amount, category].includes('')) {
		//     alert('All fields are required');
		//     return;
		// }

		saveExpense({ concept, amount, category });
	};

	return (
		<div className='modal'>
			<div className='close-modal'>
				<img src={CloseIcon} alt='Close Icon' onClick={closeModal} />
			</div>

			<form
				className={`form ${animateModal ? 'animate' : 'close'}`}
				onSubmit={handleSubmit}
			>
				<legend>New Expense</legend>
				{message && <Message type='error'>{message}</Message>}
				<div className='field'>
					<label htmlFor='concept'>Concept</label>
					<input
						type='text'
						id='concept'
						placeholder='Enter expense concept...'
						value={concept}
						onChange={(e) => setConcept(e.target.value)}
					/>
				</div>
				<div className='field'>
					<label htmlFor='amount'>Amount</label>
					<input
						type='number'
						id='amount'
						placeholder='Enter expense amount...'
						value={amount}
						onChange={(e) => setAmount(Number(e.target.value))}
					/>
				</div>
				<div className='field'>
					<label htmlFor='category'>Category</label>
					<select
						name='category'
						id='category'
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<option value=''>-- Select --</option>
						<option value='savings'>Savings</option>
						<option value='food'>Food</option>
						<option value='housing'>Housing</option>
						<option value='miscellaneous'>Miscellaneous Expenses</option>
						<option value='entertainment'>Entertainment</option>
						<option value='health'>Health</option>
						<option value='subscriptions'>Subscriptions</option>
					</select>
				</div>
				<input type='submit' value='Add Expense' />
			</form>
		</div>
	);
};

Modal.propTypes = {
	setModalIsOpen: PropTypes.func.isRequired,
	animateModal: PropTypes.bool.isRequired,
	setAnimateModal: PropTypes.func.isRequired,
	saveExpense: PropTypes.func.isRequired,
};

export default Modal;
