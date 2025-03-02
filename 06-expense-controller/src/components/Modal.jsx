import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Message from './Message';
import CloseIcon from '../img/cerrar.svg';

const Modal = ({
	setModalIsOpen,
	animateModal,
	setAnimateModal,
	saveExpense,
	editExpense,
	setEditExpense,
}) => {
	const [concept, setConcept] = useState('');
	const [amount, setAmount] = useState('');
	const [category, setCategory] = useState('');
	const [id, setId] = useState('');
	const [date, setDate] = useState('');

	const [message, setMessage] = useState('');

	useEffect(() => {
		if (Object.keys(editExpense).length > 0) {
			setConcept(editExpense.concept);
			setAmount(editExpense.amount);
			setCategory(editExpense.category);
			setId(editExpense.id);
			setDate(editExpense.date);
		}
	}, [editExpense]);

	const closeModal = () => {
		setAnimateModal(false);
		setEditExpense({});
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

		saveExpense({ concept, amount, category, id, date });
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
				<legend>
					{editExpense.concept ? 'Edit Expense' : 'New Expense'}
				</legend>
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
						<option value='miscellaneous'>
							Miscellaneous Expenses
						</option>
						<option value='entertainment'>Entertainment</option>
						<option value='health'>Health</option>
						<option value='subscriptions'>Subscriptions</option>
					</select>
				</div>
				<input
					type='submit'
					value={editExpense.concept ? 'Save Changes' : 'Add Expense'}
				/>
			</form>
		</div>
	);
};

Modal.propTypes = {
	setModalIsOpen: PropTypes.func.isRequired,
	animateModal: PropTypes.bool.isRequired,
	setAnimateModal: PropTypes.func.isRequired,
	saveExpense: PropTypes.func.isRequired,
	editExpense: PropTypes.object,
	setEditExpense: PropTypes.func.isRequired,
};

export default Modal;
